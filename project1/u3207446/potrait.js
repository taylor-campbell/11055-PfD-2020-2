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
    vertex(399, 0);
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

// A5 - Function to draw tshirt
function drawTshirt() {

    // Tshirt white part
    beginShape();
    vertex(130, 799);
    vertex(250, 700);
    vertex(400, 760);
    vertex(560, 700);
    vertex(682, 799);
    endShape(CLOSE);

    // Tshirt border
    fill(220, 220, 220);
    
    beginShape();
    strokeWeight(4);
    stroke(128,128,128);
    vertex(230, 700);
    vertex(400, 780);
    vertex(560, 700);
    vertex(560, 680);
    vertex(400, 760);
    vertex(230, 680);
    endShape(CLOSE);

}

// A6 - Function to draw jacket
function drawJacket() {

    // Jacket left part
    strokeWeight(2);
    stroke(47,79,79);
    fill(63, 130, 164);
    beginShape();
    vertex(0, 760);
    vertex(260, 680);
    vertex(210, 730);
    vertex(220, 799);
    vertex(0, 799);
    endShape(CLOSE);

    // Jacket right part
    beginShape();
    vertex(799, 760);
    vertex(580, 680);
    vertex(600, 720);
    vertex(600, 799);
    vertex(799, 799);
    endShape(CLOSE);


    // Jacket left collar
    beginShape();
    vertex(300, 600);
    vertex(140, 750);
    vertex(180, 798);
    vertex(250, 798);
    vertex(240, 720);
    vertex(300, 660);
    endShape(CLOSE);

    //Jacket right collar
    beginShape();
    vertex(500, 600);
    vertex(670, 750);
    vertex(620, 798);
    vertex(550, 798);
    vertex(570, 720);
    vertex(500, 660);
    endShape(CLOSE);

}








