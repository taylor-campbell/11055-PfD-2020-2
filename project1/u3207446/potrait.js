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
    fill(255, 229, 204);
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
    stroke(229, 206, 183);
    strokeWeight(4);
    curveVertex(399, 0);
    curveVertex(220, 70);
    curveVertex(160, 200);
    curveVertex(230, 520);
    curveVertex(300, 600);
    curveVertex(370, 640);
    curveVertex(420, 640);
    curveVertex(500, 600);
    curveVertex(570, 520);
    curveVertex(640, 200);
    curveVertex(556, 70);
    endShape(CLOSE);

}

// A5 - Function to draw tshirt
function drawTshirt() {

    // Tshirt white part
    beginShape();
    fill(255, 255, 255);
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
    stroke(128, 128, 128);
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

    // Jacket left shoulder
    strokeWeight(2);
    stroke(47, 79, 79);
    fill(63, 130, 164);
    beginShape();
    vertex(0, 760);
    vertex(260, 680);
    vertex(210, 730);
    vertex(220, 799);
    vertex(0, 799);
    endShape(CLOSE);

    // Jacket right shoulder
    beginShape();
    vertex(799, 760);
    vertex(580, 680);
    vertex(600, 720);
    vertex(600, 799);
    vertex(799, 799);
    endShape(CLOSE);


    // Jacket left collar
    beginShape();
    curveVertex(300, 600);
    vertex(140, 750);
    vertex(180, 798);
    vertex(250, 798);
    vertex(240, 720);
    vertex(300, 660);
    endShape(CLOSE);

    //Jacket right collar
    beginShape();
    curveVertex(500, 600);
    vertex(670, 750);
    vertex(620, 798);
    vertex(550, 798);
    vertex(570, 720);
    vertex(500, 660);
    endShape(CLOSE);

}

// A7 - Function to draw hair
function drawHair() {

    beginShape();
    curveVertex(205, 440);
    curveVertex(198, 260);
    curveVertex(260, 130);
    curveVertex(408, 200);  // Tip of front hair
    curveVertex(550, 130);
    curveVertex(606, 254);
    curveVertex(598, 428);
    curveVertex(652, 274);
    curveVertex(656, 174);
    curveVertex(616, 84);
    curveVertex(562, 34);
    curveVertex(508, 10);
    curveVertex(400, 2);
    curveVertex(302, 2);
    curveVertex(240, 28);
    curveVertex(200, 72);
    curveVertex(146, 162);
    curveVertex(142, 284);
    endShape(CLOSE);


}

// A8 - Function to draw eyes
function drawEyes() {

    drawLeftEye();
    drawRightEye();

    noFill();
    strokeWeight(5);
    ellipse(310, 300, 100, 50);
    ellipse(500, 300, 100, 50);


}

// A8.1 - Function to draw left eye
function drawLeftEye() {

}

// A8.2 - Function to draw right eye
function drawRightEye() {

}



// A9 - Function to draw nose
function drawNose() {

    noFill();
    strokeWeight(2);
    beginShape();
    curveVertex(388, 369);
    curveVertex(388, 369);
    curveVertex(379, 440);
    curveVertex(365, 469);
    curveVertex(375, 489);
    curveVertex(382, 493);
    curveVertex(382, 493);
    endShape();


    beginShape();
    curveVertex(410, 367);
    curveVertex(410, 367);
    curveVertex(420, 441);
    curveVertex(440, 464);
    curveVertex(440, 479);
    curveVertex(432, 491);
    curveVertex(426, 496);
    curveVertex(426, 496);
    endShape();

    beginShape();
    curveVertex(373, 480);
    curveVertex(386, 489);
    curveVertex(397, 499);
    curveVertex(412, 500);
    curveVertex(425, 488);
    curveVertex(434, 483);
    endShape();

}

// A10 - Function to draw mouth
function drawMouth() {

}







