function setup() {
  createCanvas(500, 500);
}

function draw() {
  // 밤하늘 배경
  background(20, 30, 60);
  
  // 별들 그리기
  fill(255, 255, 200);
  noStroke();
  
  // 큰 별들
  ellipse(80, 60, 3, 3);
  ellipse(150, 40, 2, 2);
  ellipse(220, 80, 2, 2);
  ellipse(280, 50, 3, 3);
  ellipse(350, 70, 2, 2);
  ellipse(420, 45, 2, 2);
  ellipse(380, 90, 2, 2);
  ellipse(120, 100, 2, 2);
  ellipse(320, 120, 2, 2);
  ellipse(450, 80, 3, 3);
  
  // 작은 별들
  ellipse(45, 85, 1, 1);
  ellipse(90, 30, 1, 1);
  ellipse(180, 65, 1, 1);
  ellipse(240, 35, 1, 1);
  ellipse(300, 95, 1, 1);
  ellipse(360, 25, 1, 1);
  ellipse(400, 110, 1, 1);
  ellipse(470, 60, 1, 1);
  ellipse(50, 120, 1, 1);
  ellipse(190, 110, 1, 1);
  ellipse(260, 120, 1, 1);
  ellipse(410, 30, 1, 1);
  
  // 달 그리기
  fill(255, 255, 220);
  noStroke();
  ellipse(400, 80, 60, 60);
  
  // 달의 크레이터
  fill(240, 240, 200);
  ellipse(390, 70, 8, 8);
  ellipse(405, 85, 6, 6);
  ellipse(410, 75, 4, 4);
  
  // 들판 그리기
  fill(20, 40, 20);
  noStroke();
  rect(0, 350, width, height - 350);
  
  // 나무 줄기 그리기
  fill(40, 25, 15);
  rect(245, 280, 10, 70);
  
  // 나무 가지들
  stroke(40, 25, 15);
  strokeWeight(3);
  line(250, 300, 235, 280);
  line(250, 310, 270, 290);
  line(250, 295, 225, 275);
  line(250, 305, 275, 285);
  
  // 나무 잎사귀
  fill(15, 25, 10);
  noStroke();
  ellipse(235, 280, 25, 25);
  ellipse(270, 290, 30, 30);
  ellipse(225, 275, 20, 20);
  ellipse(275, 285, 25, 25);
  ellipse(250, 270, 35, 35);
  ellipse(240, 265, 25, 25);
  ellipse(260, 275, 30, 30);
  
  // 나무 주변 풀들
  fill(25, 45, 25);
  ellipse(220, 340, 15, 8);
  ellipse(280, 345, 12, 6);
  ellipse(200, 355, 10, 5);
  ellipse(300, 350, 14, 7);
  ellipse(190, 365, 8, 4);
  ellipse(310, 360, 11, 6);
  
  // 추가 풀들
  fill(20, 35, 20);
  ellipse(100, 370, 12, 6);
  ellipse(150, 375, 10, 5);
  ellipse(350, 380, 14, 7);
  ellipse(400, 375, 11, 6);
  ellipse(50, 385, 9, 4);
  ellipse(450, 385, 10, 5);
}