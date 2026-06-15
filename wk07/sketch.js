let img;
let particles = [];

const STEP = 8;      // 픽셀 간격 
const RADIUS = 100;   // 마우스 영향 반경
const FORCE  = 15;    // 튕겨나가는 힘
const SPRING = 0.02; // 집으로 돌아오는 힘
const DAMP   = 0.35; // 감쇠 

function preload() {
  img = loadImage('monet.png');
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  img.loadPixels();

  for (let y = 0; y < height; y += STEP) {
    for (let x = 0; x < width; x += STEP) {
      let idx = (y * width + x) * 4;
      particles.push({
        x:  x,  y:  y,   // 현재 위치
        hx: x,  hy: y,   // 집 위치
        vx: 0,  vy: 0,   // 속도
        r: img.pixels[idx],
        g: img.pixels[idx + 1],
        b: img.pixels[idx + 2],
      });
    }
  }
}

function draw() {
  background(0);

  for (let p of particles) {
    // 마우스와의 거리
    let dx = p.x - mouseX;
    let dy = p.y - mouseY;
    let dist = sqrt(dx * dx + dy * dy);

    // 마우스가 반경 안에 있으면 밀어냄
    if (dist < RADIUS && dist > 0) {
      let strength = (RADIUS - dist) / RADIUS; // 가까울수록 강함
      p.vx += (dx / dist) * strength * FORCE;
      p.vy += (dy / dist) * strength * FORCE;
    }

    // 집으로 돌아오는 스프링
    p.vx += (p.hx - p.x) * SPRING;
    p.vy += (p.hy - p.y) * SPRING;

    // 감쇠
    p.vx *= DAMP;
    p.vy *= DAMP;

    // 위치 업데이트
    p.x += p.vx;
    p.y += p.vy;

    // 그리기
    stroke(p.r, p.g, p.b);
    strokeWeight(STEP - 1);
    point(p.x, p.y);
  }
}