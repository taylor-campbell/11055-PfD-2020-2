const cWidth = 600;
const cHeight = 500;
const skinColour = "#e0ba72";
// SET constant variable skinColour, makes sure skin colour is consistent

function setup() {
    createCanvas(cWidth, cHeight);
}

function draw() {
    
// DO

drawPortait();
// CALL drawPortait function

// LOOP

}

function drawPortait() {
    drawBackground();
    drawHead();
    drawClothes();
    
//     CALL drawHead function

// CALL drawClothes function

// CALL drawBackground function
}

function drawHead() {   
//     SET variables hairWidth, hairHeight, hairColour, hairLeftpos, hairToppos, neckWidth, neckHeight, neckLeftpos, neckToppos, 
    var hairWidth = cWidth/2;
    var hairHeight = 120;
    var hairColour = "#331d01"
    var hairLeftpos = cWidth/2; // so hair stays in the midle of the canvas
    var hairToppos = 75;
    var neckWidth = 60;
    var neckHeight = 200;
    var neckLeftpos = (cWidth/2) - (neckWidth/2); // leftpos on a rectangle determines where the leftmost edge starts, compared to an ellipse where leftpos determines the center of the ellipse
    var neckToppos = cHeight-neckHeight;

    drawRect(neckWidth, neckHeight, neckLeftpos, neckToppos, skinColour);

    drawFace(hairWidth, hairToppos + hairHeight, hairLeftpos);
    
    drawEllipse(hairWidth, hairHeight, hairLeftpos, hairToppos, hairColour);
    
    

// CALL drawEllipse(hairWidth, hairHeight, hairColour, hairLeftpos, hairToppos) function

// CALL drawRect(neckWidth, neckHeight, skinColour, neckLeftpos, neckToppos) function, I put neck above face so face will always be above a layer of the neck and cover it

// CALL drawFace function


}

function drawFace(width, top, left) {

    // SET variables faceWidth, faceHeight, skinColour, faceLeftpos, faceToppos
    // This function uses the top pos and width from the hair to figure out where it should be placed and is more reusable this way as whereever the hair goes, the face follows
    var faceHeight = 300;

     // CALL drawEllipse( faceWidth, faceHeight, skinColour, faceLeftpos, faceToppos) function

    drawEllipse(width, faceHeight, left, top, skinColour);

    // CALL drawEyes function
    
    drawEyes(top, left);
    drawNose(top, left);
    drawMouth(top, left);

    // CALL drawNose function
    // CALL drawMouth function 
}

function drawEyes(top, left) {

// SET variables eyeWidth, eyeHeight, eyeColour, eyeLeftpos, eyeToppos,pupilWidth, pupilHeight, pupilColour, pupilLeftpos, pupilToppos, 

var eyeWidth = 70;
var eyeHeight = 30;
var eyeToppos = top;
var pupilWidth = 25;
var pupilHeight = 15;
var leftEyeLeftPos = left - 50;
var rightEyeLeftPos = left + 50;
var eyelidColour = "#c9a767"
var pupilColour = "#331d01"


if (mouseIsPressed) {
    drawEllipse(eyeWidth, eyeHeight, leftEyeLeftPos, eyeToppos, eyelidColour);
    drawEllipse(eyeWidth, eyeHeight, rightEyeLeftPos, eyeToppos, eyelidColour); // When the mouse clicks on it, eyes will look like they're closing by making them look like eyelids
  } else {
    drawEllipse(eyeWidth, eyeHeight, leftEyeLeftPos, eyeToppos, 255); // Otherwise just keep drawing open eyes. Whites of the eyes get drawn first, then the actual pupils.
    drawEllipse(pupilWidth, pupilHeight, leftEyeLeftPos, eyeToppos, pupilColour);
    drawEllipse(eyeWidth, eyeHeight, rightEyeLeftPos, eyeToppos, 255);
    drawEllipse(pupilWidth, pupilHeight, rightEyeLeftPos, eyeToppos, pupilColour);
  }
// IF mouseIsPressed == true THEN

// CALL drawEllipse( eyeWidth, eyeHeight, skinColour, eyeLeftpos, eyeToppos) function

// ELSE

// CALL drawEllipse( eyeWidth, eyeHeight, eyeColour, eyeLeftpos, eyeToppos) function
// CALL drawEllipse(pupilWidth, pupilHeight, pupilColour, pupilLeftpos, pupilToppos) function

}

function drawNose(top, left) {
//     SET variables bridgeWidth, bridgeHeight, noseColour, bridgeLeftpos, bridgeToppos, tipWidth, tipHeight, tipLeftpos, tipToppos

    var bridgeWidth = 10;
    var bridgeHeight = 50;
    var tipWidth = 20;
    var tipHeight = 10;
    var tipToppos = top + bridgeHeight; // this is to make sure the nose tip goes just under where the bridge ends so they stay together more or less
    var noseColour = 0;

    drawRect(bridgeWidth, bridgeHeight, left, top, noseColour);
    drawRect(tipWidth, tipHeight, left - tipWidth/2, tipToppos, noseColour);

// CALL drawRect(bridgeWidth, bridgeHeight, noseColour, bridgeLeftpos, bridgeToppos) function

// CALL drawRect(tipWidth, tipHeight, noseColour tipLeftpos, tipToppos) function
}

function drawMouth(top, left) {
//     SET variables lipWidth, lipHeight, topColour, botColour, lipLeftpos, topToppos, botToppos

    var lipWidth = 70;
    var lipHeight = 10;
    var topColour = "#a38148"; // make top lip slightly darker than the bottom
    var botColour = "#c9a05b";
    var topToppos = top + 90;
    var botToppos = topToppos + lipHeight;

    drawEllipse(lipWidth, lipHeight, left, topToppos, topColour);
    drawEllipse(lipWidth, lipHeight, left, botToppos, botColour);

// CALL drawEllipse( lipWidth, lipHeight, topColour, lipLeftpos, topToppos ) function

// CALL drawEllipse( lipWidth, lipHeight, botColour, lipLeftpos, botToppos ) function
}

function drawClothes() {
//     SET variables shirtColour

    var shirtColour;

// IF mouseIsPressed == true THEN
// shirtColour = darkblue

if (mouseIsPressed) {
    shirtColour = "#063352";
  } else {
    shirtColour = "#00b7ff";
  }
// ELSE
// shirtColour = teal

drawShirt(shirtColour);

// CALL drawShirt(shirtColour)
}

function drawShirt(colour) {
//     Accept variable shirtColour
// SET variables collarWidth,  collarHeight, collar1Leftpos, collar2Leftpos, collarToppos,sleeveWidth, sleeveHeight, leftSleeveLeftpos, sleeveToppos, rightSleeveLeftpos, chestWidth, chestHeight, chestLeftpos, chestToppos

    var collarWidth = 100;
    var collarHeight = 30;
    var collar1Leftpos = (cWidth/2) - 100;
    var collar2Leftpos = (cWidth/2);
    var collarToppos = cHeight - 100; // puts the collars near the bottom
    var sleeveWidth = 300;
    var sleeveHeight = 50;
    var leftSleeveLeftpos = collar1Leftpos - sleeveWidth; // to put the sleeves right at the end of the collar
    var rightSleeveLeftpos = collar2Leftpos + (sleeveWidth/2);
    var chestWidth = (collarWidth * 2) + 50;
    var chestHeight = 300;
    var chestToppos = collarToppos + 20;
    var chestLeftpos = (cWidth/2) - (chestWidth/2);

    angleMode(DEGREES); // changing the angle from radians to degrees
    translate(collar1Leftpos, collarToppos); // moves the point of origin from 0,0 of the canvas to x = collar1LeftPos, y = collarToppos
    rotate(10); 
    drawRect(collarWidth, collarHeight, 0, 0, colour);  

    translate(collarWidth, 0); // moves 
    rotate(-20); 
    drawRect(collarWidth, collarHeight, 0, 0, colour);

    translate(collarWidth, 0)
    rotate(20);
    drawRect(sleeveWidth, sleeveHeight, 0, 0, colour);

    rotate(-10);
    drawRect(sleeveWidth, sleeveHeight, 0 - (collarWidth * 2) - sleeveWidth, 0, colour);

    
    translate(0 - (collarWidth * 2) - collar1Leftpos, 0 - collarToppos); // resetting the origin back to the original
    drawRect(chestWidth, chestHeight, chestLeftpos, chestToppos, colour); 

    

// CALL drawRect( collarWidth,  collarHeight, collar1Leftpos, collarToppos, shirtColour)

// CALL drawRect(collarWidth,  collarHeight, collar2Leftpos, collarToppos, shirtColour)

// CALL drawRect(sleeveWidth, sleeveHeight, leftSleeveLeftpos, sleeveToppos, shirtColour)

// CALL drawRect(sleeveWidth, sleeveHeight, rightSleeveLeftpos, sleeveToppos, shirtColour)

// CALL drawRect(chestWidth, chestHeight, chestLeftpos, chestToppost, shirtColour)
}


function drawBackground() {
    //     SET variables ellipseColour, backColour, ellipseWidth, ellipseHeight, ellipseLeftpos, ellipseToppos
    
        var ellipseColour;
        var backColour;
        var ellipseWidth = 100;
        var ellipseHeight = 100;
        var ellipseLeftpos = 25;
        var ellipseToppos = 25;
    
    // IF mouseIsPressed == true THEN
    // ellipseColour = white
    // backColour = black
    
    if (mouseIsPressed) {
        ellipseColour = 230;
        backColour = 0;
      } else {
        ellipseColour = "#e3cb17";
        backColour = "#178be3";
      }
    
    // ELSE
    // ellipseColour = yellow
    // backColour = blue
    
    background(backColour);
    drawEllipse(ellipseWidth, ellipseHeight, ellipseLeftpos, ellipseToppos, ellipseColour);
    
    // CALL drawEllipse(ellipseWidth, ellipseHeight, ellipseLeftpos, ellipseToppos, ellipseColour)
    
    // CALL background(backColour)
    }

function drawEllipse(width, height, left, top, colour) {
    
//     Accept variables leftpos, toppos, width, height, colour 

    fill(colour);
    ellipse(left, top, width, height);

// CALL fill(colour)

// CALL ellipse(leftpos, toppos, width, height)


}

function drawRect(width, height, left, top, colour,) {
    
    //     Accept variables leftpos, toppos, width, height, colour 
    
        fill(colour);
        rect(left, top, width, height);
    
    // CALL fill(colour)
    
    // CALL rect(leftpos, toppos, width, height)
    
    
 }