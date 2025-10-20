//ball
let xPos, xDir;
let yPos, yDir;
let diam;
let speed;

//pad를 위한 변수
let padX;
let padWidth;

//공색상 변경
let ballColor;
let colors = [
    [255, 0, 0],     // 빨강
    [255, 127, 0],   // 주황
    [255, 255, 0],   // 노랑
    [0, 255, 0],     // 초록
    [0, 0, 255],     // 파랑
    [128, 0, 128]    // 보라
];

function setup(){
    createCanvas(600, 600);
    speed = 4;
    xPos = width / 2;
    xDir = speed;
    yPos = height / 2;
    yDir = speed;
    diam = 50;

    padWidth = 200;
    ballColor = colors[2];
}

function draw(){
    background(128);

    fill(255, 255, 0);
    ellipse(xPos, yPos, diam, diam);
    xPos = xPos + xDir;
    yPos = yPos + yDir;

    //pad를 마우스 위치에 그리자
    padX = mouseX - padWidth/2;
    fill(0, 255, 0);
    rect(padX, height - 30, padWidth, 30);

    //ball bouncing
    if (xPos - diam/2 < 0) xDir *= -1;
    if (xPos + diam/2 > width) xDir *= -1;

    if (yPos - diam/2 < 0) yDir *= -1;
    if (yPos + diam/2 > height) yDir *= -1;
    
    if ( xPos > padX && xPos < padX + padWidth && yPos > height - 30 - diam/2){
         yDir *= -1;
    }
}