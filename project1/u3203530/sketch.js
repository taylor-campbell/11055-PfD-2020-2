//variables for colouring
var faceColour = ('#FFE2C4'); //light beige
var offWhite = ('#F7F7F7'); // grey-white for eyes and teeth
var linerColour = ('#3B3B3B'); //liner colour for shape outlines
var shadeSkinTone = ('#F3BA8C'); //darker beige
var eyeColour = ('#55F1BB'); //default turqouise colour 
var hairColour = ('#F17B37'); //reddish-coppery ginger colour
var jacketColour = ('#0D2815'); //dark black green jacket colour
var eyeColourChange = 1

//setting up the canvas  
function setup() {
  createCanvas(600, 500); // creates the canvas a 600x500
}

//start drawing
function draw() {
  background('#F3FFBF'); // sets the background colour
  noStroke(0); // allows for a lineless drawing

  //setting up the eye colour change
switch (eyeColourChange) {
    case 1:
      eyeColour = ('#55F1BB'); //turquoise
      break;
    case 2:
      eyeColour = ('#238CE9'); //sapphire-blue
      break;
    case 3:
      eyeColour = ('#5D45EF'); //purple
      break;
    case 4:
      eyeColour = ('#FAE22E'); //pastle-yellow
      break;
    case 5:
      eyeColour = ('#FDB53F'); //amber
      break;
    case 6:
      eyeColour = ('#E0113A'); //red-pink
      break;
    case 7:
      eyeColour = ('#D89219'); //orange-brown
      break;
    case 8:
      eyeColour = ('#1EBD55'); //emerald-green
      break;
    case 9:
      eyeColour = ('#FF8BB0'); //light-pink
      break;
  }

//neck
  fill(shadeSkinTone); //fill in neck colour
  quad(370, 409, 300, 350, 250, 350, 250, 430); //create a quad neck shape

  //jacket back shape left side
  fill(jacketColour); //fill in jacket colour left side
  beginShape()
  vertex(100, 300);
  vertex(300, 200);
  vertex(275, 400);
  vertex(250, 430);
  vertex(160, 400);
  vertex(170, 350);
  endShape(CLOSE); //creates the left jacket shape

  //face circle 
  fill(faceColour); //fill in face colour
  circle(305, 245, 270); //creates face shape

  //eyebrows
  fill(hairColour); //fill in eyebrow colour
  beginShape()
  vertex(285, 195);
  vertex(330, 190);
  vertex(395, 215);
  vertex(310, 205);
  endShape(CLOSE); //creates right eyebrow
  beginShape()
  vertex(190, 215);
  vertex(250, 210);
  vertex(270, 195);
  vertex(230, 195);
  endShape(CLOSE); //creates left eyebrow

  //eye liner
  fill(linerColour); //fill in liner colour
  beginShape()
  vertex(298, 250);
  vertex(319, 213);
  vertex(390, 235);
  vertex(375, 250);
  endShape(CLOSE); //creates an eyeliner effect on right 
  beginShape()
  vertex(198, 250);
  vertex(190, 235);
  vertex(219, 213);
  vertex(263, 250);
  endShape(CLOSE); //creates an eyeliner effect on left eye

  //eye triangles acting as scleras
  fill(offWhite); //fill in sclera colour
  triangle(300, 250, 320, 220, 375, 250); //creates right eye sclera
  triangle(200, 250, 220, 220, 260, 250); // creates left eye sclera

  //eye ellipses for irises
  fill(eyeColour); //fill in iris colour
  ellipse(325, 249, 35, 50); //creates right iris shape
  ellipse(225, 249, 33, 46); //creates left iris shape

  //nose
  fill(shadeSkinTone); //fill in nose colour
  ellipse(270, 280, 35, 40); //creates nose shape 

  //mouth
  fill(linerColour); //fill in liner shape
  triangle(240, 330, 300, 340, 340, 300); //creates mouth outline
  fill(offWhite); //fill in teeth with off-white colour
  triangle(252, 330, 299, 335, 329, 307); //creates teeth shape

  //front jacket shape right side
  fill(jacketColour); //fill in jacket colour 
  beginShape()
  vertex(280, 430);
  vertex(350, 300);
  vertex(510, 260);
  vertex(420, 350);
  vertex(425, 400);
  endShape(CLOSE); //creates front jacket shape on the right side

  //hair
  //right hair section
  fill(hairColour); //fill in hair colour
  ellipse(430, 215, 70, 125); //right section of the hair

  //top hair section
  fill(hairColour);
  rotate(PI / 12.6); //rotates the ellipse shape
  ellipse(300, 40, 300, 120); //creates top hair shape

  //left hair section
  fill(hairColour);
  rotate(PI / 10.0); //rotates the ellipse shape
  ellipse(255, 60, 40, 100); //creates the left hair section 
}

//add a function so that when the mouse is clicked
//the eye colour changes to a different colour
function mouseClicked() {
  eyeColourChange++;
  if (eyeColourChange > 10){
    eyeColourChange = 1; //changes the eye colour to the next one
  }
}