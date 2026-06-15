let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/4N1VGTRZw/';

let video;
let label = "";

let hearts = [];

let smallColors = ['#EB474D', '#F5B0B0', '#D85B5B'];
let bigColors = ['#F494FF', '#FF66BF', '#F5B0D8'];

let smallSizes = [21, 18];
let bigSizes = [111, 101, 82, 74];

let isPreview = (window !== window.top);
let videoReady = false;
let modelReady = false;
let classifying = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  if (!isPreview) {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json', function() {
      modelReady = true;
      if (videoReady && !classifying) {
        classifying = true;
        classifyVideo();
      }
    });

    video = createCapture(VIDEO, function() {
      videoReady = true;
      if (modelReady && !classifying) {
        classifying = true;
        classifyVideo();
      }
    });
    video.size(320, 240);
    video.hide();
  }
}

function draw() {
  background(0);

  if (isPreview) {
    if (frameCount % 6 === 0) {
      let type = random() < 0.5 ? "small" : "big";
      hearts.push(new Heart(random(width * 0.2, width * 0.8), height * 0.6, type));
    }
    for (let i = hearts.length - 1; i >= 0; i--) {
      hearts[i].update();
      hearts[i].show();
      if (hearts[i].isDone()) hearts.splice(i, 1);
    }
    return;
  }

  if (!classifying) {
    fill(200);
    noStroke();
    textSize(20);
    text('로딩 중...', width / 2, height / 2);
    return;
  }

  // 카메라 화면 (왼쪽 상단, 좌우 반전)
  push();
  translate(20 + 160, 20);
  scale(-1, 1);
  image(video, 0, 0, 160, 120);
  pop();

  // 인식 라벨
  fill(255);
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  text(label, 20, 150);
  textAlign(CENTER, CENTER);

  let currentLabel = label.toLowerCase();

  if (currentLabel === 'small heart') {
    for (let i = 0; i < 5; i++) {
      hearts.push(new Heart(width / 2, height / 2, "small"));
    }
  } else if (currentLabel === 'big heart') {
    if (frameCount % 8 === 0) {
      hearts.push(new Heart(width / 2, height / 2, "big"));
    }
  } else {
    fill(255);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text('손으로 하트를 만들어보세요\n(한손하트, 양손하트)', width / 2, height / 2);
  }

  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].update();
    hearts[i].show();
    if (hearts[i].isDone()) hearts.splice(i, 1);
  }
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    setTimeout(classifyVideo, 200);
    return;
  }
  if (results && results[0]) {
    label = results[0].label;
  }
  setTimeout(classifyVideo, 100);
}

class Heart {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;

    if (this.type === "small") {
      this.w = random(smallSizes);
      this.col = color(random(smallColors));
      this.vx = random(-7, 7);
      this.vy = random(-10, -4);
      this.gravity = 0.5;
    } else {
      this.w = random(bigSizes);
      this.col = color(random(bigColors));
      this.vx = random(-2, 2);
      this.vy = random(-5, -2);
      this.gravity = 0.18;
    }

    this.alpha = 255;
    this.angle = random(-0.3, 0.3);
    this.spin = random(-0.01, 0.01);
  }

  update() {
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.spin;
    this.alpha -= 2;
    this.col.setAlpha(this.alpha);
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(this.col);
    noStroke();
    drawSvgHeart(this.w);
    pop();
  }

  isDone() {
    return this.y > height + 100 || this.alpha <= 0;
  }
}

function drawSvgHeart(w) {
  let s = w / 20;
  push();
  scale(s);
  translate(-10, -9);
  beginShape();
  vertex(14.696, 0);
  bezierVertex(12.652, 0, 10.887, 1.197, 10, 2.943);
  bezierVertex(9.113, 1.197, 7.348, 0, 5.304, 0);
  bezierVertex(2.374, 0, 0, 2.457, 0, 5.481);
  bezierVertex(0, 8.505, 1.817, 11.277, 4.165, 13.554);
  bezierVertex(6.513, 15.831, 10, 18, 10, 18);
  bezierVertex(10, 18, 13.374, 15.867, 15.835, 13.554);
  bezierVertex(18.46, 11.088, 20, 8.514, 20, 5.481);
  bezierVertex(20, 2.448, 17.626, 0, 14.696, 0);
  endShape(CLOSE);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
