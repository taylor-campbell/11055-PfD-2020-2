document.write ("Hello World2");
/* this is my JS code to draw a face. It will be called by the Main.html file.
*/
var eye1; // these are global variables set up for the follow eye movement function.
var eye2;

function setup() {
createCanvas(400, 400); //This is to create the initial workspace on which the face is drawn. Size can me modified.

/* this section is setting up the variables for the follow eye movment function. 
It is setting the location through x/y coords to be passed into the function. 
This would have been good to do OOP, but i couldnt get it to work correctly */

eye1 = {                        // variable setting for the left eye
    x: width / 2 - 36,          // this sets the horizontal location of the eyes in relation to the canvase size (400/2 - 36)
    y: height / 2.5,            // this sets the vertical location
    rad: 42                     // this is the radius of the eye circle
};


eye2 = {                        // variable setting for the right eye. This is the same as the left eye
    x: width / 2 + 36,
    y: height / 2.5,
    rad: 42
}
}
/* This is the main draw function. 
The eyes are drawn here and sub routines for drawing the rest of the face are called
*/

function draw() {               
    chooseBackgroundColour();
    drawFace();                 // this calls the sub routins for creating the rest of the face

 
/* The below is drawing the moving eyes. I would like to have done this in sub functions, however i could not make it work correctly. 
Given more time and experience using OOP, i may have been able to make it work correctly.    

*/
var ang = atan2(mouseY - eye1.y, mouseX - eye1.x);

fill(255);
ellipse(eye1.x, eye1.y, eye1.rad);
fill(0);
ellipse(eye1.x + (eye1.rad / 4) * cos(ang), eye1.y + (eye1.rad / 4) * sin(ang), eye1.rad / 4 );

ang = atan2(mouseY - eye2.y, mouseX - eye2.x);

fill(255);
ellipse(eye2.x, eye2.y, eye2.rad);
fill(0);
ellipse(eye2.x + (eye2.rad / 4) * cos(ang), eye2.y + (eye2.rad / 4) * sin(ang), eye2.rad / 4 );

}

/* This is the function that calls the individual elements of the face. This is a test */
function drawFace(){
    drawHead();
    drawMouth();    
    drawNose();
    drawEar();
      
}

function chooseBackgroundColour(){  //holder for user input to background colour that is randomised on mouseclick 
r = random(255); // random number between 0 - 255, for Red value set to variable r
g = random(255); // random numbner between 0 - 255, for Green value set to variable g
b = random(255); // random number between 0 - 255, for blue value set to variable b
a = random(255); // random number between 0 - 255, set to variable a  


/*function for changing the background colour to a random value when mouse is clicked (mouseIsPressed function) */

if (mouseIsPressed){
    background(r, g, b, a); // when the mouse is pressed, 4 random nombers, each between 0 amnd 255 are selected and entered to give a colour number
}else {
}

}


//This fucntion will draw the head as an elipsis
function drawHead(){
    push();
    fill(255, 255, 0);
    ellipse(width/2, height/2, 200, 250);
    pop();
}

// This function will draw 2 eyes and randomise the colour on mouseclick
function drawEyes(){ 
push();
    ellipseMode(RADIUS); //this draws the outside of left eye
    fill(255); //eye colour
    ellipse(width/2.5, height/2.5, 30, 30); //eye position
    ellipseMode(CENTER); //this draws the inside of the left eye
    fill(100); //inside eye colour
    ellipse(width/2.5, height/2.5, 20, 20); //inside eye position

    ellipseMode(RADIUS);
    fill(255);
    ellipse(width/1.7, height/2.5, 30, 30);
    ellipseMode(CENTER);
    fill(100);
    ellipse(width/1.7, height/2.5, 20, 20);            
pop();    
}


function drawNose(){
    push();
    fill(255, 255, 0);   
    arc(width/2, height/1.9, 20, 50, PI, 0); //simple arc drawing of a nose
    pop();
}

function drawMouth(){
push(); //this function removes style settings from other functions
fill('#e74545'); // this fills the lips a red colour
arc(width/1.8, height/1.6, 50, 20, PI, 0); //top lip half bubble 1
arc(width/2.3, height/1.6, 50, 20, PI, 0); //top lip half bubble 2

arc(width/2, height/1.6, 100, 40, 0 ,PI); // bottom lip radius
pop(); //this function removes style settings that are set in this function

}

function drawEar(){
push();
    fill(255, 255, 0);
    arc(width/4, height/2, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
pop();
}

/* this is my working code for attempting to make the follow eyes function work. 
I have kept this in to return to at a later date. It currently has been commented out.

function followEyes(){

    document.write("test");
    /* eye1 = {
        x: width / 2 - 16,
        y: height / 2,
        rad: 32
    };
    
    
    eye2 = {
        x: width / 2 + 16,
        y: height / 2,
        rad: 32
    } 

    var ang = atan2(mouseY - eye1.y, mouseX - eye1.x);

    fill(255);
    ellipse(eye1.x, aeye1.y, eye1.rad);
    fill(0);
    ellipse(eye1.x + (eye1.rad / 4) * cos(ang), eye1.y + (eye1.rad / 4) * sin(ang), eye1.rad / 4 );
    
    ang = atan2(mouseY - eye2.y, mouseX - eye2.x);
    
    fill(255);
    ellipse(eye2.x, eye2.y, eye2.rad);
    fill(0);
    ellipse(eye2.x + (eye2.rad / 4) * cos(ang), eye2.y + (eye2.rad / 4) * sin(ang), eye2.rad / 4 );
}
*/

