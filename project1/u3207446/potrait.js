var canvasWidth = 800; // Width of Canvas
var canvasHeight = 800; // Height of Canvas


// A0 Create Canvas
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {

    // A1 Draw background
    drawBackground();

    // A2 Draw Portrait
    drawPortrait();

}


// Function - A1 Draw background
function drawBackground() {

    var rValue = map(mouseX, 0, canvasWidth, 0, 255);
    var gValue = map(mouseY, 0, canvasHeight, 0, 255);
    background(rValue, gValue, 255-rValue);

};

// Function - A2 Draw Portrait
function drawPortrait() {

    // A2.1 Draw Body
    drawBody();
    // A2.2 Draw Face
    drawFace();
    // A2.3 Draw Tshirt
    drawTshirt();
    // A2.4 Draw Jacket
    drawJacket();
    // A2.5 Draw Hair
    drawHair();
    // A2.6 Draw Eyes
    drawEyes();
    // A2.7 Draw Nose
    drawNose();
    // A2.8 Draw Mouth
    drawMouth();

};

// Function - A2.1 Draw Body
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

// Function - A2.2 Draw Face
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

// Function - A2.3 Draw Tshirt
function drawTshirt() {

    // A2.3.1 Draw Tshirt Whitepart
    fill(255, 255, 255);
    beginShape();
    vertex(130, 799);
    vertex(250, 700);
    vertex(400, 760);
    vertex(560, 700);
    vertex(682, 799);
    endShape(CLOSE);

    // A2.3.2 Draw Tshirt Border
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

// Function - A2.4 Draw Jacket
function drawJacket() {

    // A2.4.1 Draw Jacket Left Shoulder
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

    // A2.4.2 Draw Jacket Right Shoulder
    beginShape();
    vertex(799, 760);
    vertex(580, 680);
    vertex(600, 720);
    vertex(600, 799);
    vertex(799, 799);
    endShape(CLOSE);


    // A2.4.3 Draw Jacket Left Collar
    beginShape();
    curveVertex(300, 600);
    vertex(140, 750);
    vertex(180, 798);
    vertex(250, 798);
    vertex(240, 720);
    vertex(300, 660);
    endShape(CLOSE);

    // A2.4.4 Draw Jacket Right Collar
    beginShape();
    curveVertex(500, 600);
    vertex(670, 750);
    vertex(620, 798);
    vertex(550, 798);
    vertex(570, 720);
    vertex(500, 660);
    endShape(CLOSE);

}

// Function - A2.5 Draw Hair
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

// Function - A2.6 Draw Eyes
function drawEyes() {

    // A2.6.1 Draw Eye Outline
    fill(255,255,255);
    strokeWeight(2);
    ellipse(310, 300, 80, 50); // Left eye layout
    ellipse(500, 300, 80, 50); // Right eye layout

    // A2.6.2 Draw Eye parts
    drawEye(312,300); // Left eye
    drawEye(500,300); // Right eye


}

// Function - A2.6.2 Draw Eye parts
function drawEye(x, y) {
    
    // A2.6.2.1 Draw Iris
    noStroke();
    fill(87, 107, 168, 200);
    circle(x, y, 48);

    // A2.6.2.1 Draw Pupil
    fill(0,100);
    circle (x, y, 20);
}



// Function - A2.7 Draw Nose
function drawNose() {

    noFill();
    stroke(47, 79, 79);
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

// Function - A2.8 Draw Mouth
function drawMouth() {

    strokeWeight(4);
    beginShape();
    curveVertex(345, 543);
    curveVertex(345, 543);
    curveVertex(369, 545);
    curveVertex(390, 544);
    curveVertex(406, 547);
    curveVertex(431, 544);
    curveVertex(455, 542);
    curveVertex(468, 539);
    curveVertex(468, 539);
    endShape();

    fill(229, 206, 183);
    stroke(229, 206, 183);
    strokeWeight(1);
    arc(405, 555, 30, 30, 0, PI, OPEN);

}







