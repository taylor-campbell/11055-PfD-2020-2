var x = 800; // Width of Canvas
var y = 800; // Height of Canvas


// A0 - Creating a Canvas
function setup() {
    createCanvas(x, y);
}

// Start drawing
function draw() {

    // Draw background
    drawBackground();

    //Draw portrait
    drawPortrait();
}





// A1- Function to draw a background
function drawBackground() {

    background(25, 255, 250);

};

// A2 - Function to draw a portrait
function drawPortrait() {

    // A3 - Draw body
    drawBody();
    // A4 - Draw face
    drawFace();
    // A5 - Draw tshirt
    drawTshirt();
    // A6 - Draw jacket
    drawJacket();
    // A7 - Draw hair
    drawHair();
    // A8 - Draw eyes
    drawEyes();
    // A9 - Draw nose
    drawNose();
    // A10 - Draw mouth
    drawMouth();

};

// A3 - Function to draw body
function drawBody() {

    beginShape();
    vertex(0, 770);
    vertex(260, 690);
    vertex(300, 660);
    vertex(294, 458);
    vertex(500, 460);
    vertex(500, 660);
    vertex(540, 690);
    vertex(798, 770);
    endShape(CLOSE);

}

// A4 - Function to draw face
function drawFace() {

    beginShape();
    vertex(400, 0);
    vertex(220, 70);
    vertex(160, 200);
    vertex(230, 520);
    vertex(300, 600);
    vertex(370, 640);
    vertex(420, 640);
    vertex(500, 600);
    vertex(570, 520);
    vertex(640, 200);
    vertex(556, 70);
    endShape(CLOSE);

}







