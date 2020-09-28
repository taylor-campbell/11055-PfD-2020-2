var x = 600; // Width of Canvas
var y = 1000; // Height of Canvas


// Createing a Canvas
function setup() {
    createCanvas(x, y);
}

// Drawing  elements of potrait
function draw() {
    background(34, 115, 20);

    // Oval Face
    face();
}


function face() {
    fill(255,0,0);
    circle(300, 300, 200);

}

