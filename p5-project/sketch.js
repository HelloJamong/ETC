let xPos;

function setup() {
  createCanvas(500, 500);
  xPos = 0;
}

function draw() { 
  background(200);
  
  ellipse(xPos, 100, 50, 50);
  
  xPos = xPos + 1;
}