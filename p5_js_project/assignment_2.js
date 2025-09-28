function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(200); // 회색 배경

    // 귀
    fill(255, 220, 180);
    ellipse(150, 250, 30, 40);
    ellipse(350, 250, 30, 40);

    // 얼굴
    fill(255, 220, 180);
    ellipse(250, 255, 200, 210);


    //머리
    fill(50);
    rect(180, 150, 140, 50);
    quad(140, 235, 180, 200, 180, 150, 160, 200);
    quad(320, 150, 320, 200, 360, 235, 340, 200);

    fill(255, 220, 180);
    rect(200, 200, 100, 10);

    // 안경
    noFill();
    stroke(0);
    strokeWeight(4);
    ellipse(210, 250, 70, 50); // 왼쪽 안경알
    ellipse(290, 250, 70, 50); // 오른쪽 안경알
    line(245, 250, 255, 250);  // 다리 연결

    // 눈
    fill(0);
    noStroke();
    ellipse(210, 250, 10, 10);
    ellipse(290, 250, 10, 10);

    // 코
    stroke(0);
    strokeWeight(2);
    line(250, 260, 250, 280);

    // 입
    noFill();
    strokeWeight(4);
    arc(250, 300, 60, 30, 0, PI);

    // 목
    fill(255, 220, 180);
    noStroke();
    rect(225, 340, 50, 100);

    // 몸통
    fill(100, 150, 200);
    rect(180, 360, 140, 200, 20);
}