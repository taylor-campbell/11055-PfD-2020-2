// for left and right eye values
let leftEye, rightEye;

// for red, green, and blue color values
let r, g, b;

//runs once
function setup() {
  createCanvas(520, 600);
  //leftEye and rightEye values
  leftEye = new Eye(210, 260, 20, 20);
  rightEye = new Eye(310, 260, 20, 20);
  
  
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);

}

//runs on loop
function draw() {
  background(255);

  //Hair
  noStroke()
  fill(214, 177, 77);
  arc(260, 320, 325, 500, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

  //Face 
  noStroke()
  fill(247, 221, 212);
  ellipse(260, 255, 200, 260);

  //Ears
  //left ear
  arc(150, 265, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  //right ear
  arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN)
  
  //Earings
  stroke(0,0,0);
  strokeWeight(1);
  fill(84, 201, 240);
  ellipse(150, 288, 13, 13);
  ellipse(371, 288, 13, 13);

  //Bangs
  noStroke()
  fill(214, 177, 77);
  //left bang
  arc(300, 150, 150, 100, 0, PI + QUARTER_PI, CHORD);
  //right bang
  arc(180, 120, 140, 148, 0, 0.75 * Math.PI);

  //Eyebrows
  stroke(214, 177, 77);
  strokeWeight(3);
  noFill();
  //left eyebrow
  arc(210, 235, 45, 15, PI, TWO_PI, OPEN);
  //right eyebrow
  arc(310, 235, 45, 15, PI, TWO_PI, OPEN);

  //Eyes
  noStroke()
  fill(32, 19, 19);
  //left eye (black part)
  ellipse(210, 260, 40, 40);
  //right eye (black part)
  ellipse(310, 260, 40, 40);
  
  //Eye movement
  //Updates eye variables on mouse cursor position
  leftEye.update(mouseX, mouseY);
  rightEye.update(mouseX, mouseY);
  //displays left and right eye variables
  leftEye.display();
  rightEye.display();

  //Nose
  fill(235, 208, 141)
  triangle(260, 270, 270, 300, 250, 300);

  //Mouth
  fill(255, 102, 102);
  arc(260, 325, 49, 35, 0, PI);

  //Jeans
  stroke(0,0,0);
  strokeWeight(2);
  fill(7, 68, 166);
  //left leg
  rect(220, 570, 80, 90);
  //right leg
  rect(300, 570, 80, 90);

  //Jumper
  fill(r, g, b);
  rectMode(CENTER)
  rect(260, 470, 205, 150, 20);

  Humorous();

  //Hood
  fill(r, g, b);
  strokeWeight(2);
  stroke(0);
  triangle(135, 435, 170, 360, 330, 470);
  triangle(360, 380, 390, 460, 200, 435);
  fill(255)
  ellipse(300, 432, 15, 15);
  ellipse(220, 432, 15, 15);
  rect(300, 460, 8, 65, 20);
  rect(220, 460, 8, 65, 20);

  Forearms();

  //Neck
  noStroke();
  fill(247, 221, 212);
  rect(260, 380, 50, 60, 20);

  //Jumper pocket
  fill(r, g, b);
  strokeWeight(2);
  stroke(0);
  rect(263, 515, 90, 43);

}

function Forearms() {
  RightForearm();
  LeftForearm();
}

function Humorous() {
  LeftHumorous();
  RightHumorous();
}

function LeftHumorous() {
  fill(r, g, b);
  strokeWeight(2);
  stroke(0);
  //starts new drawing state
  push();
  translate(width / 2, height / 2);
  rotate(170);
  rect(-45, 175, 30, 90);
  pop(); // returns to original state
}

function LeftForearm() {
  fill(r, g, b);
  strokeWeight(2);
  stroke(0);
  push();
  translate(width / 2, height / 2);
  rotate(90);
  rect(210, -20, 30, 115);
  pop();
}

function RightHumorous() {
  fill(r, g, b);
  strokeWeight(2);
  stroke(0);
  push();
  translate(width / 2, height / 2);
  rotate(50);
  rect(60, 180, 30, 90);
  pop();
}

function RightForearm() {
  fill(r, g, b);
  strokeWeight(2);
  stroke(0);
  push();
  translate(width / 2, height / 2);
  rotate(20);
  rect(220, 5, 30, 98);
  pop();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  //updates function with varaibles mx and my
  this.update = function(mx, my) {
    // sets this.angle to compute angle to arctangent angle of mouse y - this.y and mouse x - this.x position
  this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(73, 143, 9);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(255);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the jumper
  let d = dist(mouseX, mouseY, 260, 470);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}