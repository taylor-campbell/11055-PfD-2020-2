/* 
    This document contains the javascript that will sit inside the html file for Project 1.
    It also utilises the p5 library.

    It will create a background that changes colour and a hiker which follows the mouse and
    changes which way it 'faces' depending on what direction they are moving.

    Functions created for this script are at the bottom.
    Constants and Variables are at the top.

    Created by CLaire McAuliffe 
    Date Created: 31/08/20
*/



// Firstly, create all the variables and constants needed within the script
const   c_trunk         ='#623F21';     // Tree Trunk Colour
const   c_tree          ='#09552B';     // Tree Colour
const   c_ground        ='#000000';     // Ground Colour
const   c_hiker         ='#000000';     // Hiker Colour
        c_sky           ='';            // Sky Colour
        c_sun           ='';            // Sun Colour
        c_mountain      ='';            // Mountain Colour
        c_msnow         ='';            // Snow on the Mountains Colour
        c_tsnow         ='';            // Snow on the Tree Colour
        currentSeason   ='summer';      // Current Season
        x               = 0;            // The current x-coordiante of the 'Hiker'
        y               = 0;            // The current y-coordiante of the 'Hiker'


function setup() {
    var cnv = createCanvas(1255, 962);      // Draw Canas
    var x_cnv = (windowWidth - width) / 2;  
    cnv.position(x_cnv);                    // Position Canvas in the center of the screen

    noStroke();                             // Set the stroke as none
    selectSeason('summer');                 // Use selectSeason function to set the starting season as summer
    rectMode(CENTER);                       // Change the location the rectangles are draw from
}
function draw() {
    
    // Set the background to whatever colour is currently defined in the variable c_sky (sky colour)
    background(c_sky);

    // Create a circle for the sun
    fill(c_sun);
    ellipse(1150,100,150);
    
    // Create two triangle for the background mountains (top-x, top-y, left-x, left-y, right-x, right-y)
    fill(c_mountain);
    triangle(738,24,295,962,1181,962);              // Right
    triangle(123,110,-320,1048,566,1048);           // Left

    // Create three triangles for the tree leaves (top-x, top-y, left-x, left-y, right-x, right-y)
    fill(c_tree);
    triangle(239,540,169,636,309,636);              // Top
    triangle(239,580,149,696,329,696);              // Middle
    triangle(239,640,129,756,349,756);              // Bottom

    // Create tree trunk (topleft(x,y) topright(x,y) bottomright(x,y) bottomleft(x,y))
    fill(c_trunk);
    quad(231,756,247,756,247,832,231,832);

    // Create triangles for snow on the mountain (top-x, top-y, left-x, left-y, right-x, right-y)
    fill(c_msnow);
    triangle(738,24,667,175,809,175);               // Right
    triangle(123,110,52,261,194,261);               // Left

    // Create a triangle for snow on the tree (top-x, top-y, left-x, left-y, right-x, right-y)
    fill(c_tsnow);
    triangle(239,540,184,617,294,617);

    // Create two triangles for the foreground (top-x, top-y, left-x, left-y, right-x, right-y)
    fill(c_ground);
    triangle(1255,500,448,962,1255,962);            // Left
    triangle(1255,620,-568,962,1255,962);           // Right

    // Create hiker using 'dir', 'x' and 'y' variables, so they face the direction they are moving
    drawHiker(); 
   
    // Change the values of 'x' and 'y' so the hiker follows the mouse
    if (mouseX > x+1 && x < 1300){          // Check if the mouse is on the right of the hiker
        x+=3;                               // If so move 3 pixels towards the right
        
    } else if (mouseX < x-1 && x > -50) {   // Check if the mouse is on the left of the hiker
        x-=3;                               // If so move 3 pixels towards the left
    }

    // Make the hiker stay on a specific y position relative to 'x'
    if (x < 960) {
        y=(-0.18*x)+775;        // Moves at angle 'y = 0.18x' along the first triangle of ground
    } else {
        y=(-0.60*x+1180);       // Moves at angle 'y = 0.60x' along the second triangle of ground
    }

    
 } 

// Use changeSeason and p5 library function 'mouseClicked' to change 
// the 'season' when the mouse is clicked
function mouseClicked() {
    changeSeason();
}


                    /* CREATE FUNCTIONS */

 // Create a function which simplifies drawing a rotated ellipse
function drawRotatedEllipse(x_coord, y_coord,degrees,width,height){
    push();
            translate(x_coord,y_coord);
            rotate(radians(degrees));
            fill(c_hiker);
            noStroke();
            ellipse(0,0,width,height);
    pop();
}
// Create a function which simplifies drawing a rotated rectangle
function drawRotatedRect(x_coord, y_coord,degrees,width,height,corners){
    push();
            translate(x_coord,y_coord);
            rotate(radians(degrees));
            fill(c_hiker);
            noStroke();
            rect(0,0,width,height,corners);
    pop();
}

// Create a function that draws the hiker using shapes that are located relative to the 'dir','x' and 'y' variables
function drawHiker(){
    if (mouseX > x-2) {         // Direction hiker is facing relative to mouse position
        dir = 1
    } else {
        dir = -1
    }                    

    circle(x+(3*dir),y-44,30);                          // Head

    ellipse(x,y,30,60);                                 // Body

    drawRotatedEllipse(x+18*dir,y-9,43*dir,52,8);       // Bottom Arm
    drawRotatedEllipse(x+23*dir,y-23,10*dir,52,8);      // Top Arm

    drawRotatedEllipse(x-9,y+49,106,100,10);            // Left Leg
    drawRotatedEllipse(x+11,y+37,64,100,10);            // Right Leg

    drawRotatedRect(x-25*dir,y-5,10*dir,30,60,10);      // Pack

    drawRotatedRect(x+30*dir,y+20,15*dir,2,85,0);       // Top Arm Pole
    drawRotatedRect(x+20*dir,y+47,20*dir,2,85,0);       // Bottom Arm Pole

}

//Create a function that sets the colour pallet for each 'season'
function selectSeason(season){
    currentSeason = season;             // Changes the currentSeason variable to whatever the input season is

    if (season === 'summer'){           // 'If, else' statment checks what 'season' it is currently and uses the opposite season colours
            c_sky       ='#62B7D6';     
            c_sun       ='#FFE23C';
            c_mountain  ='#A3CF67';
            c_msnow     ='#A3CF67';
            c_tsnow     ='#09552B';
    } else {
            c_sky       ='#90C3D9';
            c_sun       ='#FFD98E';
            c_mountain  ='#9A7B63';
            c_msnow     ='#FFFFFF';
            c_tsnow     ='#FFFFFF';
    }
}

// Create a function to change the 'season' to whatever is not the 'currentSeason'
function changeSeason() {
    if (currentSeason === 'summer') {      
        selectSeason('winter');
    } else {
        selectSeason('summer');
    }
}




