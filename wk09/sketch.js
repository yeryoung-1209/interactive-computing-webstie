let letters = [];

let cell = 60;
let cols;
let stacks = [];
let hasTyped = false;

let pastelColors = [
  "#FFB3BA", // pastel red
  "#FFDFBA", // pastel orange
  "#FFFFBA", // pastel yellow
  "#BAFFC9", // pastel green
  "#BAE1FF", // pastel blue
  "#D5BAFF", // pastel purple
  "#FFBAF2"  // pastel pink
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(width / cell);

  for (let i = 0; i < cols; i++) {
    stacks[i] = 0;
  }

  textAlign(CENTER, CENTER);

  let sample = ['W', 'E', 'E', 'K', '0', '9'];
  for (let ch of sample) {
    let col = floor(random(cols));
    let x = col * cell + cell / 2;
    let ltr = new Letter(x, -cell, ch, col);
    ltr.y = ltr.targetY;
    ltr.stop = true;
    stacks[ltr.col]++;
    letters.push(ltr);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < letters.length; i++) {
    letters[i].move();
    letters[i].show();
  }

  if (!hasTyped) {
    fill(255, 180);
    noStroke();
    textSize(18);
    textAlign(CENTER, CENTER);
    text('키보드를 눌러 글자를 떨어뜨려보세요', width / 2, height / 2);
  }
}

function keyPressed() {
  if (key.length !== 1) return;

  hasTyped = true;

  let col = floor(random(cols));
  let x = col * cell + cell / 2;

  let y = -cell;

  letters.push(new Letter(x, y, key, col));
}

class Letter {
  constructor(x, y, ch, col) {
    this.x = x;
    this.y = y;
    this.ch = ch;
    this.col = col;

    this.speed = 6;
    this.stop = false;

    this.angle = random([0, 90, 180, 270]);
    this.color = random(pastelColors);

    this.targetY = height - cell / 2 - stacks[this.col] * cell;
  }

  move() {
    if (this.stop == false) {
      this.y += this.speed;

      if (this.y >= this.targetY) {
        this.y = this.targetY;
        this.stop = true;

        stacks[this.col]++;
      }
    }
  }

  show() {
    push();

    translate(this.x, this.y);
    rotate(radians(this.angle));

    fill(this.color);
    noStroke();
    textSize(48);
    text(this.ch, 0, 0);

    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}