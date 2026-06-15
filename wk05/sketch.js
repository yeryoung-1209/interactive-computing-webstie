let maxW = 50;
let stars = [];
let cols, rows;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  cols = ceil(width / maxW) + 1;
  rows = ceil(height / maxW) + 1;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * maxW;
      let y = j * maxW;
      stars.push(new RotatingStar(x, y, maxW));
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

class RotatingStar {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.rad = 0;
    this.scl = 1;
    this.bright = 255;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.rad);
    scale(this.scl);
    fill(this.bright);
    noStroke();

    let r = this.w / 2;
    let inner = this.w / 10;

    beginShape();
    vertex(0, -r);
    vertex(inner, -inner);
    vertex(r, 0);
    vertex(inner, inner);
    vertex(0, r);
    vertex(-inner, inner);
    vertex(-r, 0);
    vertex(-inner, -inner);
    endShape(CLOSE);
    pop();
  }

  update() {
    this.rad = atan2(mouseY - this.y, mouseX - this.x);
    let distance = dist(this.x, this.y, mouseX, mouseY);
    let maxDistance = dist(0, 0, 400, 400);
    this.scl = map(distance, 0, maxDistance, 1, 0.05);
    this.bright = map(distance, 0, maxDistance, 255, 5);
  }
}