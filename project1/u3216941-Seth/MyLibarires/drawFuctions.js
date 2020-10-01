/*
 Seth Arnould 
 The Program on the document are the functions used to created the portrait. 
 Note: Cordinating of the shapes help found using photoshop.
 -------------------------------------------------------------------------------- */


//decaring the loction for the eye for both eye on each side of face
//These values are important for the eye to move with the mouse
let xLeft = 273;
let xRight = 438;
let lefty = 395;
let righty = 432;
//create new variable called up, 
//variable used for eye brow moving up and down
var direction = "Up";

    function drawHead()
    {
        // fuction drawHead()
        drawEars();
        push();
            noStroke();
            fill(226,200,187);
            translate(317.14,456.22 );
            rotate(4.4);
            ellipse(0, 0,397, 584);
        pop();

        // ellipse(posleft, postop, width, height)
        // fill(colour)
        // Call drawEars

    }    
    function drawEars()
{
    push(); //save current changes 
        fill(226,200,187);
        translate(105.98 ,428.50 );
        rotate(-2.3);
        ellipse(0,0,82.81,138.25);
    pop(); //restore the change back to normal
}
function drawEyes(glasses,eyebrows,eyecolour)
{   
    //Call drawLefteye, drawRighteye, drawBrow, and drawGlasses
    drawLefteye(eyecolour);
    drawRighteye(eyecolour); 
    draweyeBrow(eyebrows);
    
//This section of code is for the eye ball / pupils 
//and the movement of eyes following the mouse
  
    fill(eyecolour);
    //The left and right eyeball using the values define at the top
    ellipse(xLeft, lefty,29);   
    ellipse(xRight, righty,29);
    
    fill(0);
    // The right and leftPupils
    ellipse(xLeft, lefty, 15);
    ellipse(xRight, righty, 15);
    
    //Creating map of how far left, right, up and down the that the shape
    //can go while following the map
   
    lefty = map(mouseY, 0, height, 393, 397, true);
    righty = map(mouseY, 0, height, 430, 435, true);
     //The first two our for where the eyes can go in the y direction (up and down) and
     //how far up and down the ellipse can go 
    xLeft = map(mouseX, 0, width, 268, 280, true);
    xRight = map(mouseX, 0, width, 435, 441, true);
    //The xleft and xright is for where the ellipse can go in the x axis (left to right),
    //how far it can move from the original cordnainates 
   
    //Call drawGlasses at botom so eye balls will be behied the glasses
    if(glasses){
        drawGlasses();
    }
}

//fuction to draw the left eye of the face 
function drawLefteye()
{
    //First Save and load section for the top eye lid

    push();
        fill("white");
        translate(264, 419);
        rotate(235); //set the rotation
        arc(0, 0, 70, 85, 0, 100, PI-0.5);
    pop();
    
    //Second Save and load state for the bottom eye lid 
    push();
         fill("white");
         translate(273, 367);
        rotate(49);
        arc(0, 0, 90, 75, 0, 93, PI-0.5);               
    pop();
}

function drawRighteye()
{
    push();
    fill("white");
    translate(427.7, 458 );
    rotate(235); //set the rotation
    arc(0, 0, 73, 87, 0, 100, PI-0.5);
pop();

//Second Save and load state for the bottom eye lid 
push();
    fill("white");
    translate(437, 405 );
    rotate(49);
    arc(0, 0, 90, 75, 0, 93, PI-0.5);               
pop();

}

function draweyeBrow(eyeBrowMovement)
{
    push();
    

    //Left eye brow
    push();
   
    noStroke();
      
    translate(270,yLeftbrow);
      scale(0.7);
    rotate(21)
    rect(0,0,85,17)
    rotate(-25);
    rect(-35,0,38,16);
    pop();
    
    push();
    noStroke();
  
    translate(410,yRightbrow);
    rotate(7.6)
    rect(0,0,70,14)
    rotate(0);
    rect(-10,3,14,10)
   
    pop();
    //if the direction has string called Up, 
    //the brow will move up
    if(direction == "Up")
    {
    //the brow will move at speed .5 corndinate of millsecond 
    yLeftbrow = yLeftbrow - 0.5;
    yRightbrow = yRightbrow - 0.5
    }
    //When the direction string is Down,
    //the brow will move down
    if (eyeBrowMovement && direction == "Down")
    {
        yLeftbrow = yLeftbrow + 0.5;
        yRightbrow = yRightbrow + 0.5;
    }
    
    //When the brow reach 320 and 365, the direction variable will change to down
    //and the brow will be able to move down
    if (yLeftbrow <= 320 && yRightbrow <= 365) 
    {
        direction = "Down";
    }
    //When the brow reach the original y cord, the direction string will change to up
    //and the brow will be able to move upwards
    if (yLeftbrow >= 336 && yRightbrow >= 381) 
    {
        direction = "Up";
    }
   
    
  
}
function drawGlasses()
{
    glassColour = color("white");
    //set the opacity of the fill colour
    //0 being fully transprate and 250 being solid colour
    glassColour.setAlpha(150);
    push();
        translate(230,340);
        //seting the glasses colour to what was set for glassescolour up above
        fill(glassColour);
        rotate(15);
        strokeWeight(7);
        rect(0,0,130,90,20);
        rect(175,0,130,90,20);
        fill(0);
        noStroke();
        rect(130,20,45,22,);
        rect(-25,5,28,24);
    
        rotate(-3.5);
        rect(-90,4,65,17);
    pop();
}
function drawNose()
{
    //Left section of nose
    push();  
    
        translate(333, 517);
        noFill();
        scale(-1,1);
        rotate(-15);
        arc(0, 0, 46, 39, 0, 93, HALF_PI);      
    pop();
  //middle section of nose
   push();
        translate(365, 530);
        noFill();
        rotate(45);
        arc(0, 0, 23, 24, 0, 93, HALF_PI+HALF_PI); 
   pop();
    //right section of nose
   push();
        translate(392,523);
        noFill();
        rotate(-21);
        arc(0, 0, 21, 19, 0, 93, HALF_PI); 
   pop();
   //nostrial      
   push();
        translate(335, 527); 
        rotate(16);
        fill("black");
        ellipse(0 ,0,35,12);
   pop();

   push();
        translate(388, 529); 
        rotate(-21);
        fill("black")
        ellipse(0 ,0,17,7);
   pop();
   push();
        noStroke();
        fill(206,167,147);
        ellipse(387,450,30,110);
   pop();
}

function drawMouth()
{
      
    line(273, 593, 390, 611);
    push();
    //check if the S key is press and Simile appears
    if ((keyIsPressed == true) && ((key == 's') || (key == 'S')))
    {
    //set fill colour of open month to white
   fill("white");
   //translate postion of x and y of month
    translate(340, 555);
    //arc roate 48 degress from its point
    rotate(48);
    arc(0, 0, 150, 150, 0, 100, HALF_PI+HALF_PI); 
    }
   pop();
   
}
function drawbackhair(haircolour)
//create function backhair
//This fuction is for shape that can go behind the head layer
{
    fill(haircolour);
    push();
   
    noStroke();
    ellipse(327,303,472,410);
    ellipse(126,396,136,275);
    ellipse(513,401,102,269);
    pop();

}
function drawfronthair(haircolour)
//create fuction fronthair
//this fuction is for the the shape/hair that needs to appear in front of the head layer.
{
    push();
      noStroke();
    push();
        translate(424,191);
        rotate(22);
        ellipse(0,0,237,94); 
    pop();

    push();
    
        translate(218,192);
        rotate(-40);
        ellipse(0,0,242,97);
    pop();
    ellipse(129,322,37,210);
    pop();
}

function drawBody()
{
    
push();
    noStroke();
    fill(210,174,156);
    rect(170,630,269,219);  
  
      
   push();
   noStroke();
   fill(210,174,156);
   translate(116,785);
   rotate(-17);
   rect(0,0,93,92)
  pop();

   push();
    noStroke();
    translate(428,715);
    rotate(30);
    rect(0,0,100,126)
   pop();
   //shadow on the neck 
   fill(195,152,130);
   ellipse(300,750,170,219);  
pop();
//Call shirt fuction, this is locate at the end of fuction so the shape 
//in the shirt fuction will appear infornt of this fuction/layer
shirt();
}

function shirt()
{
 push();
    fill(144,126,142);
    noStroke();
    //remove lines around the shape to make more solid looking
    rect(0,845,643,58);
    rect(0,770,150,94);
    
    push();
        translate(0,780);
        rotate(-13);
        rect(0,0,138,70);
    pop();

    rect(470,800,174,66);

    push();
        translate(487,740);
        rotate(15);
        rect(0,0,174,66);
    pop();
  pop();
}
