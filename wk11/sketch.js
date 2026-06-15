let rad1 = 0,
  rad2 = 0,
  rad3 = 0;

let steps = 0;
let dir = 1;
let speed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#FFDADF');
  noStroke();

  // 0~1 사이로 움직이는 값 만들기
  steps += speed * dir;

  if (steps > 1 || steps < 0) {
    dir *= -1;
  }

  let eased = easeInOutCubic(steps);

  // easing이 적용된 회전값
  rad1 = map(eased, 0, 1, 0, TWO_PI);
  rad2 = map(eased, 0, 1, 0, -TWO_PI);
  rad3 = map(eased, 0, 1, 0, TWO_PI * 2);

  for (let x = -100; x < width + 100; x += 190) {
    for (let y = -100; y < height + 100; y += 170) {
      push();
      translate(x, y);
      rotate(rad1);
      fill('#4B7FD0');
      beginShape();
      vertex(7.06, -91.86);
      bezierVertex(-25.74, -94.26, -36.27, -64.20, -37.44, -48.86);
      bezierVertex(-56.77, -54.53, -97.94, -57.66, -107.94, -24.86);
      bezierVertex(-117.94, 7.94, -89.11, 19.47, -73.44, 21.14);
      bezierVertex(-84.44, 31.47, -99.14, 57.14, -69.94, 77.14);
      bezierVertex(-40.74, 97.14, -13.77, 80.14, -3.94, 69.14);
      bezierVertex(2.89, 81.30, 25.26, 101.64, 60.06, 85.64);
      bezierVertex(94.86, 69.64, 84.89, 35.97, 75.56, 21.14);
      bezierVertex(90.89, 22.64, 118.96, 15.54, 108.56, -24.86);
      bezierVertex(98.16, -65.26, 66.89, -60.70, 52.56, -53.36);
      bezierVertex(52.06, -62.86, 48.06, -88.86, 7.06, -91.86);
      endShape(CLOSE);
      pop();
    }
  }

  for (let x = -100; x < width + 100; x += 190) {
    for (let y = -100; y < height + 100; y += 170) {
      push();
      translate(x, y);
      rotate(rad2);
      fill('#FFFFFF');
      beginShape();
      vertex(-21.80, -36.11);
      bezierVertex(-32.20, -28.11, -29.46, -17.44, -26.80, -13.11);
      bezierVertex(-32.80, -16.11, -45.30, -17.91, -47.30, -1.11);
      bezierVertex(-49.30, 15.69, -36.13, 17.56, -29.30, 16.39);
      bezierVertex(-32.63, 20.56, -35.80, 30.49, -21.80, 36.89);
      bezierVertex(-7.80, 43.29, -0.63, 35.89, 1.20, 31.39);
      bezierVertex(5.37, 34.73, 16.40, 39.79, 27.20, 33.39);
      bezierVertex(38.00, 26.99, 33.04, 15.73, 29.20, 10.89);
      bezierVertex(34.37, 10.06, 45.20, 5.89, 47.20, -4.11);
      bezierVertex(49.20, -14.11, 40.04, -18.27, 35.20, -19.11);
      bezierVertex(36.20, -21.77, 36.40, -28.91, 29.20, -36.11);
      bezierVertex(22.00, -43.31, 10.87, -35.77, 6.20, -31.11);
      bezierVertex(1.20, -36.11, -11.40, -44.11, -21.80, -36.11);
      endShape(CLOSE);
      pop();
    }
  }

  for (let x = -100; x < width + 100; x += 190) {
    for (let y = -100; y < height + 100; y += 170) {
      push();
      translate(x, y);
      rotate(rad3);
      fill('#FC9CBA');
      beginShape();
      vertex(-13.5, 3.04);
      bezierVertex(-13.5, -2.16, -3, -10.46, 3.5, -10.96);
      bezierVertex(10, -11.46, 13, -6.96, 13.5, -0.46);
      bezierVertex(14, 6.04, 6, 11.04, 0, 11.04);
      bezierVertex(-6, 11.04, -13.5, 9.54, -13.5, 3.04);
      endShape(CLOSE);
      pop();
    }
  }
}

function easeInOutCubic(x) {
  if (x < 0.5) {
    return 4 * x * x * x;
  } else {
    return 1 - pow(-2 * x + 2, 3) / 2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}