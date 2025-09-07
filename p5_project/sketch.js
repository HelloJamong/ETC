function setup() {
  // 캔버스(스케치북)를 생성합니다.
  createCanvas(800, 600);
}

function draw() {
  background(220);
  //다중 원 그리기
  ellipse(300, 300, 500, 500);
  ellipse(300, 300, 400, 400);
  ellipse(300, 300, 300, 300);
  ellipse(300, 300, 200, 200);
  ellipse(300, 300, 100, 100);
}