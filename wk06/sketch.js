let puffs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#C6E2E9'); 

  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);

  if (speed > 1.5 && mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height) {
    let count = constrain(floor(speed * 0.25), 1, 4);
    for (let i = 0; i < count; i++) {
      puffs.push(new Puff(
        mouseX + random(-speed * 0.2, speed * 0.2),
        mouseY + random(-speed * 0.2, speed * 0.2),
        random(25, 65)  
      ));
    }
  }

  for (let i = puffs.length - 1; i >= 0; i--) {
    puffs[i].update();
    puffs[i].display();
    if (puffs[i].isDead()) puffs.splice(i, 1);
  }
}

class Puff {
  constructor(_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.maxR = _r * random(1.6, 2.8);
    this.life = 255;
    this.decay = random(0.4, 0.8);
    this.vx = random(-0.08, 0.08);
    this.vy = random(-0.25, -0.08);

    this.bubbles = [];
    let nb = floor(random(4, 9));
    for (let i = 0; i < nb; i++) {
      let angle = random(TWO_PI);
      let d = random(0.1, 0.55);
      this.bubbles.push({
        ox: cos(angle) * d,
        oy: sin(angle) * d,
        r: random(0.25, 0.65)
      });
    }
  }

  update() {
    this.r = lerp(this.r, this.maxR, 0.04);
    this.vx *= 0.99;
    this.vy *= 0.99;
    this.x += this.vx;
    this.y += this.vy;
    this.life -= this.decay;
  }

  display() {
    let t = constrain(this.life / 255, 0, 1);
    let alpha = t * t * 52;

    fill(205, 10, 100, alpha * 0.50);
    ellipse(this.x, this.y, this.r * 2.8, this.r * 2.4);

    fill(202, 7, 100, alpha * 0.75);
    ellipse(this.x, this.y, this.r * 2.0, this.r * 1.8);

    fill(198, 4, 100, alpha);
    ellipse(this.x, this.y, this.r * 1.3, this.r * 1.2);

    for (let b of this.bubbles) {
      let progress = this.r / this.maxR;
      let bx = this.x + b.ox * this.r * progress;
      let by = this.y + b.oy * this.r * progress;
      let br = this.r * b.r;

      fill(205, 9, 100, alpha * 0.45);
      ellipse(bx, by, br * 2.4, br * 2.1);

      fill(200, 4, 100, alpha * 0.7);
      ellipse(bx, by, br * 1.5, br * 1.4);
    }
  }

  isDead() {
    return this.life <= 0;
  }
}