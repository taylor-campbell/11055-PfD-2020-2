//======================================================================
/*
Name:     Caleb Del Rosario
File:     u3190431_Project1Script.js
Date:     28/09/2020
Purpose:  JavaScript file used to draw the self-portrait using the
          p5 library
*/
//======================================================================

// Global Variables
let canvasWidth = 400
let canvasHeight = 400

// Set variables for eyes and pupils
let xLeftEye = 160;
let xRightEye = 240;
let yEye = 180;

let xLeftPupil = xLeftEye;
let xRightPupil = xRightEye;
let yPupil = yEye;

// Function setup executes once at program launch
function setup() {
    drawCanvas(canvasWidth, canvasHeight);
    drawFace(canvasHeight / 2, canvasHeight / 2, 220, 300);
    drawHair(150, 55, 170, 80, 230, 90, 300, 130, 290, 90, 260, 60, 210, 40, 170, 45, 145, 58, 165, 80, 130, 100, 100, 130, 110, 90, 120, 75, 130, 65);
    drawEyebrows(130, 145, 130, 130, 190, 145, 210, 145, 270, 130, 270, 145);
    drawNose(canvasHeight / 2, canvasHeight / 2);
    drawMouth(canvasHeight / 2, canvasHeight / 2);
}

// Function draw executes repeatedly after setup is run.
function draw() {
    drawEyes();
    // Track mouse position for moving pupils
    yPupil = map(mouseY, 0, height, 170, 190, true);
    xLeftPupil = map(mouseX, 0, width, 150, 170, true);
    xRightPupil = map(mouseX, 0, width, 230, 250, true);
}

function drawCanvas(width, height) {
    // Set Variables
    var bgColor = color('#ffffff');
    var greenColor = color('#71c404');
    
    // Draw Canvas
    createCanvas(width, height)
    background(bgColor);
    noStroke();

    // Fading ellipse background
    for (i = 600; i > 0; i -= 40) {
        fill(bgColor);
        bgColor = lerpColor(bgColor, color(greenColor), .2);
        ellipse(width/2, height/2, i);
    }
}

function drawFace(x, y, width, height) {
    fill('#ffcb9a');
    noStroke();
    ellipse(x, y, width, height);
} 

function drawHair(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10, x11, y11, x12, y12, x13, y13, x14, y14, x15, y15) {
    // Draw hair on top of head
    fill('#000000');
    beginShape();
    curveVertex(x1, y1);
    curveVertex(x2, y2); // Straight Line used in my regular haircut
    curveVertex(x3, y3);
    curveVertex(x4, y4);
    curveVertex(x5, y5);
    curveVertex(x6, y6);
    curveVertex(x7, y7);
    curveVertex(x8, y8);
    endShape(CLOSE);

    // Draw hair on left side of head
    fill('#000000');
    beginShape();
    curveVertex(x9, y9); 
    curveVertex(x10, y10); // Straight Line used in my regular haircut
    curveVertex(x11, y11);
    curveVertex(x12, y12);
    curveVertex(x13, y13);
    curveVertex(x14, y14);
    curveVertex(x15, y15);
    endShape(CLOSE)
} 

function drawEyes() {
    drawEyeballs(xLeftEye, xRightEye, yEye, 60);
    drawPupils(xLeftPupil, xRightPupil, yPupil, 25);

    function drawEyeballs(xLeftEyeball, xRightEyeball, yEyeball, eyeRadius) {
        noStroke();
        fill('#ffffff');
        ellipse(xLeftEyeball, yEyeball, eyeRadius);
        ellipse(xRightEyeball, yEyeball, eyeRadius);
    }

    function drawPupils(xPupilLeft, xPupilRight, yPupil, pupilRadius) {
        fill('#000000');
        ellipse(xPupilLeft, yPupil, pupilRadius);
        ellipse(xPupilRight, yPupil, pupilRadius);
    } 
}

function drawEyebrows(xLeft1, yLeft1, xLeft2, yLeft2, xLeft3, yLeft3, xRight1, yRight1, xRight2, yRight2, xRight3, yRight3) {
    fill('#000000');
    triangle(xLeft1, yLeft1, xLeft2, yLeft2, xLeft3, yLeft3); // Left eyebrow
    triangle(xRight1, yRight1, xRight2, yRight2, xRight3, yRight3); // Right eyebrow
}

function drawNose(xNose, yNose) {
    noStroke();
    fill('#fdbc85');
    beginShape();
    vertex(xNose, yNose + 10);
    vertex(xNose, yNose + 75);
    vertex(xNose + 20, yNose + 60);
    endShape(CLOSE);
}

function drawMouth(xMouth, yMouth) {
    noFill();
    stroke('#000000');
    strokeWeight(5);
    arc(xMouth - 10, yMouth + 75, 125, 50, 0.2, PI-.9);
}