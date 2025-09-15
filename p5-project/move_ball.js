let xPos;
let yPos;
////////////////////////////////////////////////////////////
//공이 왼쪽에서 오른쪽까지
/*
function setup() {
  createCanvas(500, 500);
  xPos = 0;
}

function draw() { 
  background(200);
  
  ellipse(xPos, 100, 50, 50);
  
  xPos = xPos + 1;
}
////////////////////////////////////////////////////////////
//공이 오른쪽에서 왼쪽까지
function setup() {
  createCanvas(500, 500);
  xPos = 500;
}

function draw() { 
  background(200);
  
  ellipse(xPos, 100, 50, 50);
  
  xPos = xPos - 1;
}
////////////////////////////////////////////////////////////
//공이 위에서 아래로
function setup() {
  createCanvas(500, 500);
  yPos = 0;
}

function draw() { 
  background(200);
  
  ellipse(100, yPos, 50, 50);
  
  yPos = yPos + 1;
}
*/
////////////////////////////////////////////////////////////
//두 개의 공을 다른 속도로 움직이기
function setup() {
  createCanvas(500, 500);
  xPos = 0;
  yPos = 0;
}

function draw() { 
  background(200);  
  ellipse(xPos, 100, 50, 50);
  ellipse(100, yPos, 50, 50);
  xPos = xPos + 1;
  yPos = yPos + 2;
}
////////////////////////////////////////////////////////////