let bgColor;
let isSunglasses = false;

function setup(){
    createCanvas(500, 500);
    bgColor = color(200); // 초기 회색 배경
}

function draw(){
    background(bgColor);

    // 검은색 원이 안경 영역과 충돌하는지 확인
    let distLeft = dist(mouseX, mouseY, 210, 250);
    let distRight = dist(mouseX, mouseY, 290, 250);

    // 안경 영역에 원이 닿으면 썬글라스로 변경
    if (distLeft < 35 || distRight < 35) {
        isSunglasses = true;
    } else {
        isSunglasses = false;
    }

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

    // 안경 (일반 안경 또는 썬글라스)
    stroke(0);
    strokeWeight(4);

    if (isSunglasses) {
        // 썬글라스 (검은색으로 채워진)
        fill(0);
    } else {
        // 일반 안경 (투명)
        noFill();
    }

    ellipse(210, 250, 70, 50); // 왼쪽 안경알
    ellipse(290, 250, 70, 50); // 오른쪽 안경알
    line(245, 250, 255, 250);  // 다리 연결

    // 눈 (마우스를 따라다니는 눈동자)
    fill(0);
    noStroke();

    // 왼쪽 눈동자
    let leftEyeX = 210;
    let leftEyeY = 250;
    let angleLeft = atan2(mouseY - leftEyeY, mouseX - leftEyeX);
    let maxDistance = 15; // 눈동자가 움직일 수 있는 최대 거리
    let pupilLeftX = leftEyeX + cos(angleLeft) * maxDistance;
    let pupilLeftY = leftEyeY + sin(angleLeft) * maxDistance;

    // 안경 범위 내로 제한 (타원형으로)
    pupilLeftX = constrain(pupilLeftX, 210 - 25, 210 + 25);
    pupilLeftY = constrain(pupilLeftY, 250 - 15, 250 + 15);

    ellipse(pupilLeftX, pupilLeftY, 10, 10);

    // 오른쪽 눈동자
    let rightEyeX = 290;
    let rightEyeY = 250;
    let angleRight = atan2(mouseY - rightEyeY, mouseX - rightEyeX);
    let pupilRightX = rightEyeX + cos(angleRight) * maxDistance;
    let pupilRightY = rightEyeY + sin(angleRight) * maxDistance;

    // 안경 범위 내로 제한 (타원형으로)
    pupilRightX = constrain(pupilRightX, 290 - 25, 290 + 25);
    pupilRightY = constrain(pupilRightY, 250 - 15, 250 + 15);

    ellipse(pupilRightX, pupilRightY, 10, 10);

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

    // 마우스를 따라다니는 검은색 원
    fill(0);
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
}

function keyPressed(){
    if (key === 'c' || key === 'C') {
        bgColor = color(0, 255, 255); // Cyan
    } else if (key === 'm' || key === 'M') {
        bgColor = color(255, 0, 255); // Magenta
    } else if (key === 'y' || key === 'Y') {
        bgColor = color(255, 255, 0); // Yellow
    } else if (key === 'k' || key === 'K') {
        bgColor = color(0, 0, 0); // Black
    } else if (key === 's' || key === 'S') {
        saveGif('mySketch', 10); // 10초 동안의 애니메이션을 GIF로 저장
    }
    return false; // 기본 브라우저 동작 방지
}