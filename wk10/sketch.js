let particles = [];
let flowfield = [];
let scl = 20;
let cols, rows;
let t=0;
let off = 0.01;
let palette;
let currentColorIndex = 0;
let layerStartTime = 0;
let layerDuration = 5000;

function setup() {
  createCanvas(1000, 1000);
  cols = floor(width/scl);
  rows = floor(height/scl);
  
  background(0);
  
  palette = [
    color(179, 123, 255),
    color(255, 107, 190),
    color(90, 176, 255),
    color(200, 168, 255),
    color(232, 90, 165),
    color(127, 207, 255),
    color(155, 127, 232),
    color(255, 157, 213),
    color(107, 142, 224)
  ];
  
  startNewLayer();
}

function startNewLayer() {
  particles = [];
  for(let i=0; i<300; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
  layerStartTime = millis();
}

function draw() {
  if (millis() - layerStartTime > layerDuration) {
    currentColorIndex = (currentColorIndex + 1) % palette.length;
    startNewLayer();
  }
  
  flowfield = [];
  for(let x=0; x<cols; x++) {
    for(let y=0; y<rows; y++) {
      let n = noise(x*off, y*off, t);
      let angle = map(n, 0, 1, 0, TWO_PI*4);
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.08);
      flowfield.push(v);
    }
  }
  t += off;
  for(let i=0; i<particles.length; i++) {
    particles[i].addForce();
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.prev = this.pos.copy();
  }
  update() {
    this.vel.add(this.acc);
    this.vel.limit(4);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  updatePrev() {
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }
  addForce() {
    let xx = floor(this.pos.x/scl);
    let yy = floor(this.pos.y/scl);
    let index = xx + yy*cols;
    this.acc.add(flowfield[index]);
    this.updatePrev();
  }
  show() {
    let c = palette[currentColorIndex];
    c.setAlpha(40);
    stroke(c);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
  }
  edges() {
    if(this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if(this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if(this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if(this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}