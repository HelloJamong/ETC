let bricks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup(){
    createCanvas(500, 200);

    for(let i = 0; i < 10; i++){
        bricks[i] = 1;
    }
}

function draw(){
    background(0);

    for(let i = 0; i < 10; i++){
        if(bricks[i] === 1) fill(255);
        else fill(0);

        rect(i*50, 0, 50, 200);
    }
}

function mousePressed(){
    let loc = int(mouseX / 50);

    if(bricks[loc] === 1){
        bricks[loc] = 0;
    } else if(bricks[loc] === 0){
        bricks[loc] = 1;
    }
}