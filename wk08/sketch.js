let capture;
let prevFrame;
let dots = [];
let dotSize = 12;
let gap = 6;
let spacing; // dotSize + gap
let cols, rows;

let isPreview = (window !== window.top);
let hasMotion = false;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.style('display', 'block');
  canvas.style('margin', '0 auto');
  document.body.style.margin = '0';
  document.body.style.backgroundColor = 'black';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.minHeight = '100vh';

  noStroke();
  if (!isPreview) {
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();
    prevFrame = capture.get(0, 0, capture.width, capture.height);
  }
  initDots();
}

function initDots() {
  dots = [];
  spacing = dotSize + gap;
  cols = ceil(width / spacing);
  rows = ceil(height / spacing);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;
      dots.push(new Dot(x, y));
    }
  }
}

function draw() {
  background(0);

  if (isPreview) {
    for (let cdot of dots) {
      cdot.showPreview();
    }
    return;
  }

  capture.loadPixels();
  prevFrame.loadPixels();

  if (capture.pixels.length > 0 && prevFrame.pixels.length > 0) {
    for (let cdot of dots) {
      cdot.update();
      cdot.show();
      if (cdot.energy > 0.3) hasMotion = true;
    }
  }

  if (!hasMotion) {
    fill(255, 200);
    noStroke();
    textSize(18);
    textAlign(CENTER, CENTER);
    text('카메라 앞에서 움직여보세요', width / 2, height / 2);
  }

  prevFrame = capture.get(0, 0, capture.width, capture.height);
}

function getColorAt(x, y) {
  let cx = floor(map(x, 0, width, 0, capture.width));
  let cy = floor(map(y, 0, height, 0, capture.height));
  let index = (cx + cy * capture.width) * 4;
  let r = capture.pixels[index];
  let g = capture.pixels[index + 1];
  let b = capture.pixels[index + 2];
  return color(r, g, b);
}

function motionAt(x, y) {
  let cx = floor(map(x, 0, width, 0, capture.width));
  let cy = floor(map(y, 0, height, 0, capture.height));
  let index = (cx + cy * capture.width) * 4;
  let r = capture.pixels[index];
  let g = capture.pixels[index + 1];
  let b = capture.pixels[index + 2];
  let pr = prevFrame.pixels[index];
  let pg = prevFrame.pixels[index + 1];
  let pb = prevFrame.pixels[index + 2];
  return dist(r, g, b, pr, pg, pb) > 80;
}

class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c = color(0);
    this.energy = 0;
    this.angle = 0;
  }

  update() {
    this.c = getColorAt(this.x, this.y);

    if (motionAt(this.x, this.y)) {
      this.energy = 1;
      if (this.angle === 0) {
        this.angle = random(-0.3, 0.3);
      }
    }

    this.energy *= 0.97;

    if (this.energy < 0.05) {
      this.angle *= 0.85;
      if (abs(this.angle) < 0.01) this.angle = 0;
    } else {
      let flipSpeed = this.energy * 0.5;
      this.angle += flipSpeed;
    }
  }

  show() {
    let scaleX = cos(this.angle);
    let w = abs(scaleX) * dotSize;

    if (scaleX >= 0) {
      fill(this.c);
    } else {
      let r = red(this.c);
      let g = green(this.c);
      let b = blue(this.c);
      let br = lerp(r, 255, 0.75);
      let bg = lerp(g, 255, 0.75);
      let bb = lerp(b, 255, 0.75);
      fill(br, bg, bb);
    }

    ellipse(this.x, this.y, w, dotSize);
  }

  showPreview() {
    let phase = this.x * 0.015 + this.y * 0.015 + frameCount * 0.025;
    let r = sin(phase) * 60 + 180;
    let g = sin(phase + TWO_PI / 3) * 60 + 180;
    let b = sin(phase + TWO_PI * 2 / 3) * 60 + 180;
    fill(r, g, b);
    ellipse(this.x, this.y, dotSize, dotSize);
  }
}