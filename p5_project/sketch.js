function setup() {
  // 캔버스(스케치북)를 생성합니다.
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(0); // 검은색으로 채우기 설정
  ellipse(100, 200, 100, 100);

  fill(200); // 밝은 회색으로 채우기 설정
  ellipse(300, 200, 100, 100);
}