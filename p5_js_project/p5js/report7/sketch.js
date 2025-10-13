let images = [];
let currentImageIndex = 0;

function preload(){
    images.push(loadImage('assets/image1.png'));
    images.push(loadImage('assets/image2.png'));
    images.push(loadImage('assets/image3.png'));
    images.push(loadImage('assets/image4.png'));
    images.push(loadImage('assets/image5.png'));
}

function setup(){
    createCanvas(1920, 1080);
    frameRate(5);
}

function draw(){
    background(220);
    image(images[currentImageIndex], 0, 0);

    currentImageIndex = (currentImageIndex + 1) % images.length;
}