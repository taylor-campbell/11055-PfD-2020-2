

function setup() {
    createCanvas(400, 400);
    stroke(255);
    frameRate(30);
    let y = 100;
    let x = 100;
}

function draw() {
    background(0);
    if (y < 0) {
        y = height;
    }
    circle(x, y, width / 10);
    //drawEye(x, y);
}

// function drawEye(x, y, size) {
//     fill(240, 240, 240);
//     circlex(x, y + 50, width / 10)

// }