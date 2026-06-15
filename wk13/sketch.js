// ml5 HandPose + FaceMesh 텀프로젝트
// 교수님 FaceMesh 예제 보고 손/얼굴 같이 쓰게 발전시킴
// 해파리는 내가 피그마에서 그린 SVG를 그대로 불러와서 씀 (코드에 박아둠)
// - 손 위치/각도를 따라 해파리가 헤엄침
// - 손을 쥐면 종의 아랫부분이 오므라들고, 펴면 벌어짐
// - 입을 벌리면 해파리 아래에서 거품(뿅뿅뿅)이 나옴

// ===== 내 피그마 SVG들 (해상도 위해 width/height만 2배, viewBox 그대로) =====
const SVG_OUTER = `<svg xmlns="http://www.w3.org/2000/svg" width="398" height="214" viewBox="0 0 199 107" fill="none"><path d="M10.5306 99.7028C16.3453 109.878 19.2526 105.517 30.882 99.7028C35.243 93.8881 26.5209 95.3417 36.6966 90.9807C46.8723 86.6197 43.965 95.3417 55.5943 95.3417C67.2236 95.3417 64.3163 86.6197 75.9457 82.2587C87.575 77.8977 90.4823 83.7124 103.565 79.3514C116.648 74.9904 122.463 79.3514 132.639 79.3514C142.814 79.3514 145.722 82.2587 157.351 79.3514C168.98 76.444 176.249 93.8881 184.971 90.9807C193.693 88.0734 198.054 93.8881 198.054 86.6197C198.054 79.3514 192.239 53.1853 187.878 43.0097C183.517 32.834 157.351 13.9363 141.361 13.9363C125.37 13.9363 106.473 -2.05401 75.9457 0.853322C45.4186 3.76066 10.5306 40.1024 3.26227 63.361C-4.00607 86.6197 4.71594 89.5271 10.5306 99.7028Z" fill="url(#g0)" stroke="url(#g1)"/><defs><linearGradient id="g0" x1="99.2769" y1="0.5" x2="99.2769" y2="105.807" gradientUnits="userSpaceOnUse"><stop stop-color="#0F5FA4"/><stop offset="1" stop-color="#06243E"/></linearGradient><linearGradient id="g1" x1="99.2769" y1="0.5" x2="99.2769" y2="105.807" gradientUnits="userSpaceOnUse"><stop stop-color="#4076B6"/><stop offset="1" stop-color="#343434"/></linearGradient></defs></svg>`;

const SVG_BODY = `<svg xmlns="http://www.w3.org/2000/svg" width="364" height="172" viewBox="0 0 182 86" fill="none"><path d="M9.65231 79.9256C14.9578 88.0727 17.6106 84.5811 28.2216 79.9256C32.2007 75.2702 24.2424 76.434 33.5271 72.9424C42.8117 69.4508 40.159 76.434 50.77 76.434C61.381 76.434 58.7282 69.4508 69.3392 65.9592C79.9503 62.4676 82.603 67.1231 94.5404 63.6315C106.478 60.1399 111.783 63.6315 121.068 63.6315C130.353 63.6315 133.005 65.9592 143.616 63.6315C154.227 61.3038 160.859 75.2701 168.817 72.9424C176.776 70.6147 180.755 75.2701 180.755 69.4508C180.755 63.6315 175.449 42.682 171.47 34.5349C167.491 26.3879 143.616 11.2577 129.026 11.2577C114.436 11.2577 97.1932 -1.54484 69.3392 0.782883C41.4853 3.11061 9.65231 32.2072 3.02042 50.829C-3.61146 69.4508 4.3468 71.7786 9.65231 79.9256Z" fill="url(#g0)" stroke="url(#g1)"/><defs><linearGradient id="g0" x1="90.6275" y1="0.5" x2="90.6275" y2="84.8127" gradientUnits="userSpaceOnUse"><stop stop-color="#4B87C6"/><stop offset="1" stop-color="#5890C2"/></linearGradient><linearGradient id="g1" x1="90.6275" y1="0.5" x2="90.6275" y2="84.8127" gradientUnits="userSpaceOnUse"><stop stop-color="#B1D3FB"/><stop offset="1" stop-color="#343434"/></linearGradient></defs></svg>`;

const SVG_GLOSSY = `<svg xmlns="http://www.w3.org/2000/svg" width="322" height="98" viewBox="0 0 161 49" fill="none"><path d="M9.07305 45.2757C13.753 49.8172 16.0929 47.8708 25.4527 45.2757C28.9627 42.6805 21.9428 43.3293 30.1326 41.3829C38.3225 39.4365 35.9825 43.3293 45.3423 43.3293C54.7021 43.3293 52.3622 39.4365 61.722 37.4901C71.0818 35.5438 73.4217 38.1389 83.9515 36.1926C94.4813 34.2462 99.1612 36.1926 107.351 36.1926C115.541 36.1926 117.881 37.4901 127.241 36.1926C136.6 34.895 142.45 42.6805 149.47 41.3829C156.49 40.0853 160 42.6805 160 39.4365C160 36.1926 155.32 24.5143 151.81 19.9727C148.3 15.4311 127.241 6.99684 114.371 6.99684C101.501 6.99684 86.2915 -0.139895 61.722 1.15769C37.1525 2.45528 9.07305 18.6751 3.22317 29.0558C-2.62671 39.4365 4.39315 40.7341 9.07305 45.2757Z" fill="url(#g0)" stroke="url(#g1)" stroke-width="2"/><defs><linearGradient id="g0" x1="80.5" y1="1" x2="80.5" y2="30.375" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFE"/><stop offset="1" stop-color="#87B6EC"/></linearGradient><linearGradient id="g1" x1="80.5" y1="1" x2="80.5" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#E4F5FF"/><stop offset="1" stop-color="#C4DCFE"/></linearGradient></defs></svg>`;

const SVG_HLA = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="84" viewBox="0 0 16 42" fill="none"><path d="M2.26251 9.57207C0.0958443 8.23874 -2.43749 4.87207 4.76251 2.07207C13.7625 -1.42793 18.2625 -0.42793 14.7625 4.57207C11.2625 9.57207 7.76251 9.57208 8.26251 19.0721C8.52954 24.1456 7.51309 28.7914 6.5079 32.7046C6.03462 38.452 4.76251 44.0024 4.76251 41.0721C4.76251 38.9753 5.63092 36.1187 6.5079 32.7046C6.76143 29.6259 6.78574 26.4906 6.26251 24.5721C4.76251 19.0721 9.76251 13.0721 2.26251 9.57207Z" fill="#FCFCF4"/></svg>`;

const SVG_HLB = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="52" viewBox="0 0 10 26" fill="none"><path d="M0.420391 5.20543C-0.349179 4.263 -0.349155 1.75013 2.92815 0.549349C6.43902 -0.737004 9.65086 0.262983 9.15086 3.26302C8.38045 7.88555 5.93746 5.20544 6.43901 11.1031C6.8464 15.8936 4.27563 21.5843 3.296 23.8191C3.08339 25.1539 2.92815 25.7564 2.92815 24.761C2.92815 24.6675 3.06957 24.3356 3.296 23.8191C3.68005 21.4077 4.2513 16.6066 4.43281 14.5176C4.75579 10.8003 4.43281 7.763 0.420391 5.20543Z" fill="#FCFCF4"/></svg>`;

const SVG_HLC = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" viewBox="0 0 10 25" fill="none"><path d="M0.976803 6.36957C0.141424 5.67489 -0.735039 3.31982 1.00382 1.39144C2.86661 -0.674385 5.32999 -0.52418 6.0472 2.40996C7.1523 6.93096 4.60909 5.01776 6.99639 10.4222C8.93549 14.812 9.22786 20.7752 9.36237 23.1096C9.68799 24.4128 9.79593 25.0155 9.44872 24.0825C9.41612 23.9949 9.39346 23.6492 9.36237 23.1096C8.77416 20.7556 7.47563 16.116 6.86651 14.1138C5.78258 10.5508 4.51053 7.78338 0.976803 6.36957Z" fill="#FCFCF4"/></svg>`;

const SVG_FRILL = `<svg xmlns="http://www.w3.org/2000/svg" width="74" height="352" viewBox="0 0 37 176" fill="none"><path d="M26.2566 31.187C28.0126 31.187 26.5005 29.466 25.5249 28.6054C24.6713 27.7449 23.4762 24.9175 25.5249 20.4919C28.0858 14.96 26.2566 3.15851 28.0858 1.31453C29.5492 -0.160659 34.3051 0.699865 36.5001 1.31453C36.5001 3.28144 36.0611 9.87059 34.3051 20.4919C32.8169 29.4927 31.8333 29.171 31.582 28.8346C31.6192 28.9317 31.6731 29.0921 31.7442 29.343C32.4759 31.9246 29.915 31.5558 29.915 33.7686C29.915 35.9814 31.0125 35.2438 31.0125 37.0877C31.0125 38.9317 28.0858 37.8253 28.0858 40.4069C28.0858 42.9885 25.1591 40.7757 25.1591 43.3573C25.1591 45.9389 21.8665 42.2509 21.8665 44.8325C21.8665 47.414 21.1348 45.9389 21.1348 47.414C21.1348 48.8892 18.9398 47.414 19.3056 48.5204C19.6715 49.6268 18.2081 47.7828 18.2081 50.3644C18.2081 52.946 14.9156 48.8892 14.9156 50.3644C14.9156 51.8396 16.3789 51.4708 17.1106 52.5772C17.8423 53.6836 15.6472 54.0524 15.6472 55.5275C15.6472 57.0027 17.1106 55.5275 17.1106 57.3715C17.1106 59.2155 14.9156 57.3715 14.9156 59.2155C14.9156 61.0595 16.3789 59.2155 16.3789 61.4283C16.3789 63.6411 13.818 62.9035 16.0131 64.3786C18.2081 65.8538 17.8423 66.5914 17.8423 69.5418C17.8423 72.4922 14.9156 68.8042 15.2814 71.017C15.6472 73.2298 17.8423 71.7546 17.8423 73.9673C17.8423 76.1801 15.6472 73.9673 16.0131 76.5489C16.3789 79.1305 17.1106 79.8681 17.1106 81.3433C17.1106 82.8185 14.1839 76.9177 14.9156 79.4993C15.6472 82.0809 14.5497 82.4497 12.7205 83.556C10.8913 84.6624 9.06213 83.1872 8.69627 87.6128C8.33041 92.0384 13.818 90.5632 13.818 94.6199C13.818 98.6767 9.79381 96.8327 7.96457 101.996C6.13534 107.159 9.06213 116.748 9.79381 124.124C10.5255 131.5 10.8913 139.982 11.623 147.358C12.3547 154.734 14.5497 153.996 17.8423 158.79C21.1348 163.585 24.0616 176.861 23.3299 175.386C22.5982 173.911 22.2324 174.649 21.5007 173.911C20.769 173.173 22.5982 172.067 20.4032 172.067C18.2081 172.067 19.6715 170.592 21.1348 169.486C22.5982 168.379 20.4032 167.273 19.6715 167.273C18.9398 167.273 18.574 166.166 18.574 164.322C18.2081 164.322 17.4764 162.847 17.4764 161.741C17.4764 160.634 17.8423 160.266 16.7448 160.634C15.6472 161.003 15.6472 160.266 15.2814 158.79C14.9156 157.315 14.9156 156.946 14.1839 157.315C13.4522 157.684 12.7205 156.946 12.3547 155.471C11.9888 153.996 13.0864 153.258 11.623 153.258C10.1596 153.258 10.1596 151.046 10.5255 148.095C10.8913 145.145 9.42797 145.514 8.69627 145.145C7.96457 144.776 8.69627 143.301 9.06213 142.563C9.42799 141.826 9.42797 139.982 8.69627 139.982C7.96457 139.982 7.23293 137.4 9.06213 137.031C10.8913 136.663 8.69627 135.925 8.69627 132.606C8.69627 131.334 8.96487 130.82 9.11095 130.65C8.91945 130.747 8.39542 130.892 7.23293 130.762C3.94038 130.393 6.86709 128.549 6.86709 126.705C6.86709 124.861 7.59877 124.492 5.76957 125.968C3.94036 127.443 5.76957 123.755 6.86709 118.592C7.96462 113.429 6.50125 117.854 5.03789 121.911C3.57454 125.968 2.84284 121.173 4.3062 118.592C5.76955 116.01 5.76957 113.429 4.3062 115.273C2.84282 117.116 0.281981 113.797 2.11117 112.691C3.94036 111.585 3.5745 110.847 1.37949 110.478C-0.815513 110.109 1.74533 107.897 2.11117 107.528C2.47701 107.159 3.5745 105.315 3.5745 102.733L3.57455 102.733C4.30616 101.258 4.30618 101.258 3.5745 99.7831C2.8428 98.3079 2.47701 96.8327 4.3062 97.5703C6.13538 98.3079 8.69627 97.2015 7.96457 96.8327C7.23288 96.4639 9.79379 96.0951 11.623 94.6199C13.4522 93.1447 10.1596 93.5135 8.69627 92.4072C7.2329 91.3008 6.86707 92.0384 5.76957 90.932C4.67206 89.8256 5.76955 88.3504 4.3062 87.6128C2.84284 86.8752 2.477 85.7688 2.84284 85.4C3.20868 85.0312 4.3062 85.0312 4.3062 83.1872C4.3062 81.3433 5.40371 81.7121 6.86707 81.7121C8.33043 81.7121 6.86707 79.4993 5.03786 78.7617C3.20864 78.0241 7.23291 77.2865 9.79379 76.9177C12.3547 76.5489 10.1596 75.0737 8.69627 75.0737C7.23291 75.0737 10.5254 73.5985 7.96457 71.7546C5.4037 69.9106 10.1596 67.6978 8.69627 68.0666C7.23291 68.4354 6.86707 68.8042 5.03786 66.5914C3.20864 64.3786 6.50123 64.0099 6.13539 62.9035C5.76955 61.7971 3.94034 62.5347 3.5745 61.0595C3.20866 59.5843 7.2329 57.7403 5.03786 57.0027C2.84282 56.2651 5.76954 54.79 7.96457 53.6836C10.1596 52.5772 9.42793 50.3644 7.96457 49.6268C6.50122 48.8892 8.33041 47.0452 10.5255 47.414C12.7205 47.7828 11.623 46.6764 10.8913 44.0949C10.1596 41.5133 13.4522 44.0949 15.6472 44.8325C17.8422 45.5701 18.5739 42.9885 18.5739 42.2509C18.5739 41.5133 16.3789 40.0381 20.769 40.0381C25.1591 40.0381 22.5982 38.5629 20.769 37.8253C18.9398 37.0877 20.4031 36.3502 22.964 36.3502C25.5249 36.3502 23.6957 34.1374 22.5982 31.187C21.5006 28.2366 24.0615 31.187 26.2566 31.187Z" fill="url(#g0)" stroke="url(#g1)"/><defs><linearGradient id="g0" x1="18.7921" y1="118.146" x2="31.8002" y2="25.6068" gradientUnits="userSpaceOnUse"><stop stop-color="#08345D"/><stop offset="1" stop-color="#78AFE3"/></linearGradient><linearGradient id="g1" x1="4.89016" y1="67.2521" x2="36.6511" y2="87.7662" gradientUnits="userSpaceOnUse"><stop stop-color="#83AEC8"/><stop offset="0.86321" stop-color="#B4DAFF"/></linearGradient></defs></svg>`;

const SVG_STRAND = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="478" viewBox="0 0 32 239" fill="none"><path d="M0.5 0.213257C6.08089 12.0466 21.1821 26.2133 21.1821 45.2133C21.1821 73.7133 0.5 104.713 0.5 134.713C0.5 172.213 35.9551 224.713 31.0307 238.213" stroke="url(#g0)"/><defs><linearGradient id="g0" x1="16" y1="0.213257" x2="16" y2="238.213" gradientUnits="userSpaceOnUse"><stop stop-color="#4076B6"/><stop offset="1" stop-color="#343434"/></linearGradient></defs></svg>`;

function svgURL(s) {
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
}

// ===== ml5 / 상태 =====
let handPose, faceMesh, video;
let hands = [], faces = [];
let imgOuter, imgBody, imgGlossy, imgHLa, imgHLb, imgHLc, imgFrill, imgStrand;
let bellBuf; // 종 합쳐놓은 버퍼

let bubbles = [];
let jx, jy, angle = 0, tt = 0;
let openAmount = 0.5; // 1=폄, 0=쥠

let handOptions = { maxHands: 1, flipHorizontal: true };
let faceOptions = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };
let fingerTips = [4, 8, 12, 16, 20];

// 다리 배치(피그마 군집 느낌)
let frillDefs = [
  { x: -0.26, s: 0.85, m: 1,  ph: 0.0 },
  { x: -0.15, s: 1.05, m: -1, ph: 1.1 },
  { x: -0.05, s: 0.95, m: 1,  ph: 2.0 },
  { x: 0.06,  s: 1.0,  m: -1, ph: 0.6 },
  { x: 0.16,  s: 0.9,  m: 1,  ph: 1.7 },
  { x: 0.26,  s: 0.8,  m: -1, ph: 2.6 }
];
let strandDefs = [
  { x: -0.2,  s: 1.0,  ph: 0.3 },
  { x: -0.07, s: 1.15, ph: 1.2 },
  { x: 0.05,  s: 1.1,  ph: 0.8 },
  { x: 0.2,   s: 0.95, ph: 2.1 }
];

function preload() {
  handPose = ml5.handPose(handOptions);
  faceMesh = ml5.faceMesh(faceOptions);
  imgOuter  = loadImage(svgURL(SVG_OUTER));
  imgBody   = loadImage(svgURL(SVG_BODY));
  imgGlossy = loadImage(svgURL(SVG_GLOSSY));
  imgHLa    = loadImage(svgURL(SVG_HLA));
  imgHLb    = loadImage(svgURL(SVG_HLB));
  imgHLc    = loadImage(svgURL(SVG_HLC));
  imgFrill  = loadImage(svgURL(SVG_FRILL));
  imgStrand = loadImage(svgURL(SVG_STRAND));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  jx = width / 2; jy = height / 2;

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  handPose.detectStart(video, gotHands);
  faceMesh.detectStart(video, gotFaces);

  // 종 + 하이라이트를 버퍼 하나에 합침 (좌표는 피그마 배치 기준 ×2)
  bellBuf = createGraphics(398, 214);
  bellBuf.imageMode(CORNER);
  bellBuf.image(imgOuter, 0, 0, 398, 214);
  bellBuf.image(imgBody, 17.45, 26.88, 364, 172);
  bellBuf.image(imgGlossy, 37.13, 50.1, 322, 98);
  bellBuf.image(imgHLb, 116.83, 77.58, 20, 52);
  bellBuf.image(imgHLa, 155.13, 60.1, 32, 84);
  bellBuf.push();
  bellBuf.translate(235.13, 89.1);
  bellBuf.rotate(radians(-20.41));
  bellBuf.imageMode(CENTER);
  bellBuf.image(imgHLc, 0, 0, 20, 50);
  bellBuf.pop();

  let cap = createP('손을 움직여 옮기고, 쥐었다 펴면 오므라들고, 입을 벌리면 거품이 나와요');
  cap.style('color', 'white');
  cap.style('font-family', 'sans-serif');
  cap.style('font-size', '18px');
  cap.style('text-align', 'center');
  cap.style('width', '100%');
  cap.position(0, windowHeight - 50);
}

function draw() {
  background(0);
  tt += 0.03;

  let jellyW = min(width, height) * 0.32;
  let bh = jellyW * 0.5377;

  // ---- 손: 위치 / 각도 / 벌린 정도 ----
  let targetX = width / 2, targetY = height / 2, targetAngle = 0;
  let targetOpen = 0.5 + 0.35 * sin(tt * 1.2); // 손 없을 때 저절로 숨쉼

  if (hands.length > 0) {
    let hand = hands[0];
    let wrist = hand.keypoints[0];
    let mcp = hand.keypoints[9];
    targetX = map((wrist.x + mcp.x) / 2, 0, 640, 0, width);
    targetY = map((wrist.y + mcp.y) / 2, 0, 480, 0, height);
    targetAngle = constrain(atan2(mcp.y - wrist.y, mcp.x - wrist.x) + HALF_PI, -PI / 3, PI / 3);
    targetOpen = handOpenness(hand);
  }

  jx = lerp(jx, targetX, 0.08);
  jy = lerp(jy, targetY, 0.08);
  angle = lerp(angle, targetAngle, 0.1);
  openAmount = lerp(openAmount, targetOpen, 0.2);
  let c = constrain(1 - openAmount, 0, 1); // 수축량 (1=완전히 오므림)

  // ---- 해파리 ----
  push();
  translate(jx, jy);
  rotate(angle);
  imageMode(CORNER);

  // 실 가닥(뒤)
  for (let d of strandDefs) {
    let sh = jellyW * 1.5 * d.s;
    let sw = sh * 0.134;
    let sway = sin(tt * 1.5 + d.ph) * 0.16 * (0.6 + 0.8 * c);
    push();
    translate(d.x * jellyW * (1 - 0.35 * c), -bh * 0.28);
    rotate(sway);
    image(imgStrand, -sw / 2, 0, sw, sh);
    pop();
  }
  // 프릴 다리
  for (let d of frillDefs) {
    let fh = jellyW * 1.05 * d.s;
    let fw = fh * 0.21;
    let sway = sin(tt * 2 + d.ph) * 0.12 * (0.6 + 0.8 * c);
    push();
    translate(d.x * jellyW * (1 - 0.35 * c), -bh * 0.30);
    rotate(sway);
    scale(d.m, 1);
    image(imgFrill, -fw / 2, 0, fw, fh);
    pop();
  }
  // 종(아랫부분만 오므라들게 가로 띠로 워프)
  drawBell(jellyW, bh, c);
  pop();

  // ---- 입 벌리면 거품 ----
  if (faces.length > 0) {
    let f = faces[0];
    let mr = dist(f.keypoints[13].x, f.keypoints[13].y, f.keypoints[14].x, f.keypoints[14].y) /
             dist(f.keypoints[78].x, f.keypoints[78].y, f.keypoints[308].x, f.keypoints[308].y);
    if (mr > 0.35 && random(1) < 0.5) {
      bubbles.push(new Bubble(jx + random(-jellyW * 0.18, jellyW * 0.18),
                              jy + bh * 0.3 + random(-10, 10)));
    }
  }
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
    if (bubbles[i].isDead()) bubbles.splice(i, 1);
  }
}

// 종을 가로 띠로 잘라, 아래쪽 띠일수록 더 안으로 좁힘 (= 하단만 오므라듦)
function drawBell(bw, bh, c) {
  let N = 80;
  let sw = bellBuf.width, sh = bellBuf.height;
  let bhEff = bh * (1 + 0.12 * c); // 오므리면 종이 살짝 길어짐
  for (let i = 0; i < N; i++) {
    let v0 = i / N, v1 = (i + 1) / N, vm = (v0 + v1) / 2;
	 let open = 1 - c;                          // 1=완전히 폄
    let pinch = 1 - c * 0.85 * pow(vm, 1.7);   // 오므림
    pinch += open * 0.35 * pow(vm, 1.7);       // 펼치면 아래로 갈수록 더 벌어짐
    let destW = bw * pinch;
    image(bellBuf,
      -destW / 2, -bhEff + v0 * bhEff, destW, (v1 - v0) * bhEff + 1,
      0, v0 * sh, sw, (v1 - v0) * sh);
  }
}

function handOpenness(hand) {
  let wrist = hand.keypoints[0];
  let palm = max(1, dist(wrist.x, wrist.y, hand.keypoints[9].x, hand.keypoints[9].y));
  let sum = 0;
  for (let i = 0; i < fingerTips.length; i++) {
    let t = hand.keypoints[fingerTips[i]];
    sum += dist(wrist.x, wrist.y, t.x, t.y);
  }
  return constrain(map((sum / fingerTips.length) / palm, 1.2, 2.3, 0, 1), 0, 1);
}

// ===== 거품 (피그마 거품 색감) =====
let bubbleColors = [[46, 74, 122], [63, 108, 176], [111, 168, 220], [173, 216, 240]];
class Bubble {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.target = random(6, 30); this.d = 0;
    this.dx = random(-1.2, 1.2); this.dy = random(0.5, 2.0);
    this.life = 255; this.c = random(bubbleColors);
  }
  update() {
    this.d = lerp(this.d, this.target, 0.25);
    this.x += this.dx; this.y += this.dy; this.dy += 0.03;
    this.life -= 3;
  }
  display() {
    noStroke();
    fill(this.c[0], this.c[1], this.c[2], this.life);
    ellipse(this.x, this.y, this.d);
  }
  isDead() { return this.life <= 0; }
}

function gotHands(r) { hands = r; }
function gotFaces(r) { faces = r; }
function windowResized() { resizeCanvas(windowWidth, windowHeight); }