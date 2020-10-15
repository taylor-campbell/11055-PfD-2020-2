/* 
Project 1 - JavaScript

Creating a portrait using p5.js library
Showing an old then new version of myself 
*/

function setup() {
    //create canvas size 
    createCanvas(500,500);
    
}

function draw() { 
    
    drawABackground();
    drawAPortrait();
}

//Function drawABackground

function drawABackground() {
    
    background (152, 167, 250);

}

//Function drawAPortrait

function drawAPortrait() {

     //CALL drawHair
     drawHair();

    //CALL drawANeck
    drawANeck();

    //CALL drawAFace
    drawAFace();

    //CALL drawEyes
    drawEyes();

    //CALL drawEyebrows
    drawEyebrows();

    //CALL drawANose
    drawANose();

    //CALL drawAMouth
    drawAMouth();

    //CALL drawGlasses
    drawGlasses();

    //CALL drawFreckles
    drawFreckles();

    //CALL drawTurtleneck
    drawTurtleneck();

}

//Function drawHair

function drawHair () {

    //change hair style and colour by holding on hair
    if(mouseIsPressed) {
        fill(191, 176, 145); //fill blonde colour to change to
        noStroke(); //remove black outline
       
        //top of hair
        ellipse(250, 260, 380, 410); //create top of hair blonde
        
        //hair style
        ellipse(100, 265, 100, 150); //create waves in hair
        ellipse(110, 330, 100, 150); //create waves in hair
        ellipse(90, 390, 100, 150); //create waves in hair
        ellipse(80, 500, 100, 150); //create waves in hair
        ellipse(405, 265, 100, 150); //create waves in hair
        ellipse(400, 330, 100, 150); //create waves in hair
        ellipse(420, 390, 100, 150); //create waves in hair
        ellipse(430, 500, 100, 150); //create waves in hair
        
        //bottom of hair
        rect(60, 255, 380, 410); //create length 
        
    } else {
        //top of hair
        fill(64, 46, 17); //fill with same brown as eyebrows 
        noStroke(); //remove black outline
        ellipse(250, 260, 380, 410); //create top of hair

        //length of hair
        fill(64, 46, 17); //fill with same brown as eyebrows 
        noStroke (); //remove black outline
        rect(60, 255, 380, 410); //create length of hair 
    }

    print(mouseIsPressed)

}

//Function drawANeck

function drawANeck() {

    fill(224, 186, 139); //fill with slightly darker skin tone
    noStroke(); //remove black outline
    rect(192, 400, 110, 140)
}

//Function drawAFace

function drawAFace() {
    
    fill(235, 198, 152); //fill with skin tone
    noStroke (); //remove black outline
    ellipse(250, 285, 295, 340); //create ellipse to form longer than wide face shape
    
}

//Function drawEyes

function drawEyes() {

    //left eye
    fill(247, 243, 235); //fill with slight off white for sclera 
    noStroke(); //remove black outline
    ellipse(195, 255, 70, 40); //creating left eye

    //right eye
    fill(247, 243, 235); //fill with slight off white for sclera 
    noStroke(); //remove black outline
    ellipse(305, 255, 70, 40); //creating right eye

    //left pupil
    fill(0, 0, 0); //fill with black for the pupil
    strokeWeight(9); //increase stroke size 
    stroke (66, 45, 32); //stroke with brown to add detail
    ellipse(195, 255, 30, 27); //creating pupil

    //right pupil
    fill(0, 0, 0); //fill with black for the pupil
    strokeWeight(9); //increase stroke size 
    stroke (66, 45, 32); //stroke with brown to add detail
    ellipse(305, 255, 30, 27); //creating pupil

    //left detail
    fill(237, 233, 225); //fill with slight white for detail
    strokeWeight(2); //increase stroke size
    stroke(0, 0, 0); //stroke with black to add detail
    ellipse(200, 250, 15, 15); //stroke with black for extra detail

    //right detail
    fill(237, 233, 225); //fill with slight white for detail
    strokeWeight(2); //increase stroke size
    stroke(0, 0, 0); //stroke with black to add detail
    ellipse(309, 250, 15, 15); //stroke with black for extra detail
}

//Function drawEyebrows

function drawEyebrows() {

    //left eyebrow
    fill(64, 46, 17); //fill with brown for eyebrow
    noStroke(); //remove black outline 
    ellipse(195, 208, 70, 9 ); //create left eyebrow 

    //right eyebrow 
    fill(64, 46, 17); //fill with brown for eyebrow
    noStroke(); //remove black outline 
    ellipse(305, 208, 70, 9 ); //create left eyebrow

}

//Function drawANose

function drawANose() {

    noFill(); //remove fill to see more skin tone
    strokeWeight(5); //increase stroke size
     stroke(212, 172, 123); //show simply nose 
    arc(250, 332, 30, 25, 0, PI); //create nose highlighting tip of nose

}

//Function drawAMouth

function drawAMouth() {
   
    //left side of mouth 
    noStroke(); //remove black outline 
    fill(209, 160, 144); //fill with light pink for mouth
    triangle(245, 400, 245, 365, 208, 382); //create left side of mouth
   
    //right side of mouth 
    triangle(255, 400, 255, 365, 291, 382); //create right side of mouth
    
    //middle of mouth to make rounder
    ellipse(250, 382, 29, 37); //create ellipse to round off top and bottom of mouth
   
    //open in mouth
    stroke(122, 79, 65, 90); // stroke with darker pink to show inside of mouth with opacity a little lighter than 100%
    triangle(245,383,255,383,250,380); // create triangle for small gap on the mouth
}

//Function drawGlasses

function drawGlasses() {

    //change glasses from rectangluar to circle 
    if(mouseIsPressed) {

        //left glass
        noFill(); //no fill to see eyes
        strokeWeight(6); //increase stroke size
        stroke(171, 129, 109); //stroke colour to navy colour
        ellipse(188, 260, 100, 95); //create left glass of glasses

        //right glass
        noFill(); //no fill to see eyes
        strokeWeight(6); //increase stroke size
        stroke(171, 129, 109); //stroke colour to navy colour
        ellipse(312, 260, 100, 95); //create right glass of glasses

        //left arm 
        fill(171, 129, 109); //fill with slightly darker blue for depth 
        rect(126, 260, 7, 6); //create small left arm 

        //middle bridge 
        fill(171, 129, 109); //fill with slightly darker blue
        rect(243, 260, 14, 6); //create glasses bridge 

        //right arm
        fill(171, 129, 109); //fill with slightly darker blue for depth
        rect(365, 260, 7, 6); //create small right arm
    } else {
        //left glass
        noFill(); //no fill to see eyes
        strokeWeight(6); //increase stroke size
        stroke(3, 5, 8); //stroke colour to navy colour
        rect(135, 222, 105, 75, 20); //create left glass of glasses

        //right glass
        noFill(); //no fill to see eyes
        strokeWeight(6); //increase stroke size
        stroke(3, 5, 8); //stroke colour to navy colour
        rect(260, 222, 105, 75, 20); //create left glass of glasses

        //left arm 
        fill(3, 5, 8); //fill with slightly darker blue for depth 
        rect(126, 260, 7, 6); //create small left arm 

        //middle bridge 
        fill(3, 5, 8); //fill with slightly darker blue
        rect(243, 260, 14, 6); //create glasses bridge 

        //right arm
        fill(3, 5, 8); //fill with slightly darker blue for depth
        rect(365, 260, 7, 6); //create small right arm
        }

    }

//Function drawFreckles

function drawFreckles() {
    
    //freckle 1
    fill(191, 154, 109, 85); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(256, 335, 3, 3); //create small freckle

    //freckle 2
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline
    ellipse(240, 320, 4, 4); //create small freckle

    //freckle 3
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity 
    noStroke(); //remove black outline 
    ellipse(200 , 300, 4, 3); //create small freckle 

    //freckle 4
    fill(191, 154, 109, 85); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(326, 300, 3, 3); //create small freckle

    //freckle 5
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(320, 365, 4, 4); //create small freckle

    //freckle 6
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(294, 328, 5, 5); //create small freckle

    //freckle 7
    fill(191, 154, 109, 95); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(226, 306, 3, 3); //create small freckle

    //freckle 8
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(300, 320, 3, 3); //create small freckle

    //freckle 9
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(230, 303, 5, 4); //create small freckle

    //freckle 10
    fill(191, 154, 109, 85); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(194, 350, 4, 4); //create small freckle

    //freckle 11
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(157, 365, 3, 3); //create small freckle

    //freckle 12 
    fill(191, 154, 109, 95); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(155, 325, 5, 5); //create small freckle

    //freckle 13
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(264, 298, 4, 3); //create small freckle

    //freckle 14
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(340, 335, 3, 4); //create small freckle

    //freckle 15
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(160, 335, 3, 3); //create small freckle

    //freckle 16
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(175, 345, 3, 3); //create small freckle

    //freckle 17 
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(307, 360, 3, 3); //create small freckle

    //freckle 18 
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(320, 335, 3, 3); //create small freckle

    //freckle 19 
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(348, 315, 4, 5); //create small freckle

    //freckle 20
    fill(191, 154, 109, 85); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(160, 288, 3, 3); //create small freckle

    //freckle 21 
    fill(191, 154, 109, 95); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(130, 295, 4, 3); //create small freckle

    //freckle 22
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(180, 285, 3, 3); //create small freckle

    //freckle 23
    fill(191, 154, 109, 85); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(268, 322, 3, 4); //create small freckle

    //freckle 24
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(370, 335, 3, 3); //create small freckle

    //freckle 25
    fill(191, 154, 109, 95); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(373, 305, 4, 5); //create small freckle

    //freckle 26
    fill(191, 154, 109, 85); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(227, 326, 3, 3); //create small freckle

    //freckle 27
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(255, 282, 4, 5); //create small freckle

    //freckle 28
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(145, 315, 3, 3); //create small freckle

    //freckle 28
    fill(191, 154, 109, 90); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(193, 320, 4, 3); //create small freckle

    //freckle 29
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(320, 290, 3, 3); //create small freckle
    
    //freckle 30 
    fill(191, 154, 109, 80); //fill with slightly darker skin tone with slightly lighter opacity
    noStroke(); //remove black outline 
    ellipse(296, 298, 3, 3); //create small freckle
}

//Function drawTurtleneck

function drawTurtleneck() {

    fill(35, 64, 47); //fill with dark green
    noStroke(); //remove black outline
    rect(187, 475, 120, 140); //create small turtleneck

}