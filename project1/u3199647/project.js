// Variables
const canvasWidth = 800;
const canvasHeight = 800;
const brown = "#8B4513";
const skinColour = "#FFDBAC"
const darkRed = "#8B0000";

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    if (mouseIsPressed) {
        background(darkRed);
    } else {
        background("lightblue");
    }
    
    drawBody();
    drawHead(canvasWidth, canvasHeight);
    drawHair();
    drawFace();
    drawEars();  
}

// Draw Head
function drawHead(cw, ch) {
    fill(skinColour);
    ellipse(cw/2, ch/2, 400, 600);
}

// Draw Hair
function drawHair() {
    fill(brown);
    triangle(225, 115, 300, 140, 250, 200);

    fill(brown);
    triangle(325, 50, 400, 100, 300, 140);

    fill(brown);
    triangle(475, 50, 400, 100, 500, 140);

    fill(brown);
    triangle(575, 115, 550, 200, 500, 140);

    fill(brown);
    arc(400, 200, 300, 200, PI, TWO_PI, CHORD);
}

// Draw Face
function drawFace() {
    var freckles = 10;
    drawEyes();
    drawBrows();
    drawMouth();
    drawNose();
    drawFreckles(freckles);
}

// Draw Eyes
function drawEyes() {
    fill("white");
    ellipse(300,300,100,70);
    ellipse(500,300,100,70);    

    fill(brown);
    ellipse(300,300,40,30); 
    ellipse(500,300,40,30); 

    fill("black");
    ellipse(300,300,10,10); 
    ellipse(500,300,10,10); 
}

//Draw Eyebrows
function drawBrows() {
    if (mouseIsPressed) {
       fill("black");
        quad(250, 225, 350, 250, 350, 265, 250, 240);

        fill("black");
        quad(550, 225, 450, 250, 450, 265, 550, 240);
    } else {
        fill("black");
        rect(250, 245, 100, 15);
    
        fill("black");
        rect(450, 245, 100, 15);  
    }
    
}

//Draw Mouth
function drawMouth() {
    if (mouseIsPressed) {
        fill("red");
        arc(400, 600, 200, 150, PI, TWO_PI, CHORD);

        fill(darkRed);
        arc(400, 550, 50, 50, 0, PI, CHORD);
    } else {
        fill("red");
        arc(400, 550, 200, 150, 0, PI, CHORD);

        fill(darkRed);
        arc(400, 600, 50, 50, PI, TWO_PI, CHORD);
    }
}

//Draw Nose
function drawNose() {
    fill(skinColour);
    triangle(425, 450, 375, 450, 400, 360);

    fill("black");
    arc(410, 450, 10, 10, PI, TWO_PI, CHORD);

    fill("black");
    arc(390, 450, 10, 10, PI, TWO_PI, CHORD);
}

// Draw Freckles
function drawFreckles(noOfFreckles) {
    var xcoords = [250, 275, 300, 325, 350, 450, 475, 500, 525, 550];
    var ycoords = [425, 450, 400, 500, 475, 425, 500, 475, 400, 450];
    for (let i = 0; i < noOfFreckles; i++) {
        for (let x = 0; x < 5; x++) {
            fill(brown);
            circle(xcoords[x], ycoords[x], 5);
        }
        for (let y = 5; y < 10; y++) {
            fill(brown);
            circle(xcoords[y], ycoords[y], 5);
        }
    }
}

// Draw Ears
function drawEars() {
    fill(skinColour);
    quad(204, 460, 190, 450, 175, 360, 201, 360);

    fill(skinColour);
    quad(596, 460, 610, 450, 625, 360, 599, 360);
}

// Draw Body
function drawBody() {
    fill("blue");
    quad(475, 678, 550, 800, 250, 800, 325, 678);
}