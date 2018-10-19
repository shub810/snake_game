const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let startX = 300;
let startY = 200;
const snakeWidth = 20;
const snakeHeight = 20;

const fruitRadius = 10;
let fruitX = 20;
let fruitY = 20;
myRandom('width');
myRandom('height');

function drawSnake() {
    ctx.beginPath();
    ctx.rect(startX,startY,snakeWidth,snakeHeight);
    ctx.fillStyle = "#e97777";
    ctx.fill();
    ctx.closePath();
}

function moveSnake(e) { 
    // down
    if (e.keyCode === 40) {
        if (startY + 20 <= canvas.height-snakeHeight) {
            startY += 20;
        }
    } // up
    else if (e.keyCode === 38) {
        if (startY - 20 >= 0) {
            startY -= 20;
        }
    } 
    // right
    else if (e.keyCode === 39) {
        if (startX + 20 <= canvas.width-snakeWidth) {
            startX += 20;
        }
    }
    else if (e.keyCode == 37) {
        if (startX - 20 >= 0) {
            startX -= 20;
        }
    }
}

function addSnake() {

}

function myRandom(type) {
    switch (type) {
        case 'width':
            fruitX = Math.floor(Math.random()*600);
        case 'height':
            fruitY =  Math.floor(Math.random()*400);
    }
}

function randomFruit() {
    ctx.beginPath();
    ctx.arc(fruitX,fruitY,fruitRadius,0,2*Math.PI);
    ctx.fillStyle = '#4cad4c';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawSnake();
    randomFruit();
}

document.addEventListener('keydown', moveSnake)

setInterval(draw, 10);