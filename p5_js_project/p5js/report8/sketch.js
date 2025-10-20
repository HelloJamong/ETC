//공 
let xPos, xDir; //공의 x축 위치와 진행 방향
let yPos, yDir; //공의 y축 위치와 진행 방향
let diam;
let speed; //공의 속도

//패드
let padX;
let padWidth;

function variableInitialization(){
    speed = 4;
    xPos = width / 2; //공을 화면 중앙에서 출발
    xDir = speed;
    yPos = height / 2;
    yDir = speed;
    diam = 50;

    padWidth = 200;
}

function ballDrawingMovement(){
    //공 생성과 움직임
    fill(255, 255, 0);
    ellipse(xPos, yPos, diam, diam);
    xPos += xDir;
    yPos += yDir;
}

function padDrawingMovement(){
    //패드 움직임
    padX = mouseX - padWidth / 2;
    fill(0, 255, 0);
    rect(padX, height - 30, padWidth, 30);
}

function ballBouncing(){
    //공 튕기기
    if(xPos - diam/2 < 0) xDir = xDir * -1;
    if(xPos + diam/2 > width) xDir = xDir * -1;

    if(yPos - diam / 2 < 0) yDir = yDir * -1;
    if(yPos + diam / 2 > height) yDir = yDir * -1;

    //공이 패드에 닿으면 튕기기
    if(xPos > padX && xPos < padX + padWidth && yPos > height - 30 - diam / 2){
        yDir = yDir * -1;
    }
}

function setup(){
    createCanvas(600, 600);
    variableInitialization();
}

function draw(){
    background(128);

    ballDrawingMovement();
    padDrawingMovement();

    ballBouncing();
}