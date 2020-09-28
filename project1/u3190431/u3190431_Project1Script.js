// Set variables for moving pupils
let xLeftPupil = 160;
let xRightPupil = 240;
let yPupil = 180;

// Function setup executes once at program launch
function setup() {
  // Set Variables
  var bg = color('#ffffff');
  var green = color('#71c404');

  // Draw Canvas
  createCanvas(400, 400);
  background(bg);
  noStroke();

  // Fading ellipse background
  for (i = 600; i > 0; i -= 40) {
    fill(bg);
    bg = lerpColor(bg, color(green), .2);
    ellipse(width/2, height/2, i);
  }
}

// Function draw executes repeatedly after setup is run.
function draw () {
  // Set Variables
  var skin = color('#ffcb9a'); 
  var skinShadow = color('#fdbc85');
  var black = color('#000000');
  var white = color('#ffffff');

  // Draw Face
  fill(skin);
  noStroke();
  ellipse(width/2, height/2, 220, 300);

  // Draw Hair
  fill(black);
  beginShape();
  curveVertex(150, 55);
  curveVertex(170, 80); // Straight Line used in my regular haircut
  curveVertex(230, 90);
  curveVertex(300, 130);
  curveVertex(290, 90);
  curveVertex(260, 60);
  curveVertex(210, 40);
  curveVertex(170, 45);
  endShape(CLOSE);
  // Draw hair on left side of head
  fill(black);
  beginShape();
  curveVertex(145, 58); 
  curveVertex(165, 80); // Straight Line used in my regular haircut
  curveVertex(130, 100);
  curveVertex(100, 130);
  curveVertex(110, 90);
  curveVertex(120, 75);
  curveVertex(130, 65);
  endShape(CLOSE);

  // Draw Eye balls
  noStroke();
  fill(white);
  ellipse(160, 180, 60);
  ellipse(240, 180, 60);

  // Draw Pupils
  fill(black);
  ellipse(xLeftPupil, yPupil, 25);
  ellipse(xRightPupil, yPupil, 25);
  // Track mouse position for moving pupils
  yPupil = map(mouseY, 0, height, 170, 190, true);
  xLeftPupil = map(mouseX, 0, width, 150, 170, true);
  xRightPupil = map(mouseX, 0, width, 230, 250, true);

  // Draw Eyebrows
  triangle(130, 145, 130, 130, 190, 145); // Left eyebrow
  triangle(210, 145, 270, 130, 270, 145); // Right eyebrow

  // Draw Nose
  noStroke();
  fill(skinShadow);
  beginShape();
  vertex(width/2, height/2 + 10);
  vertex(width/2, height/2 + 75);
  vertex(width/2 + 20, height/2 + 60);
  endShape(CLOSE);
  
  // Draw Mouth
  noFill();
  stroke(black);
  strokeWeight(5);
  arc(width/2 - 10, height/2 + 75, 125, 50, 0.2, PI-.9);
}