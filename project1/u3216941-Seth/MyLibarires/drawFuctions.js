/**
 Seth Arnould 
 The Program on the document are the functions used to created the portrait. 
 Note: Cordinating of the shapes help found using photoshop.
* */

let xLeft = 273;
let xRight = 438;
let lefty = 395;
let righty = 432;

    function drawHead()
    {
        // fuction drawHead()
        drawEars();
        push();
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
function drawEyes()
{   
    drawLefteye();
    drawRighteye(); 
//------------------------------------
    noStroke();
    fill(56,16,28);
    ellipse(273,395,29); //left   
    ellipse(438 ,432 ,29);

    // Pupils
    fill(0);
    ellipse(xLeft, lefty, 15);
    ellipse(xRight, righty, 15);
    
    lefty = map(mouseY, 0, height, 390, 400, true);
    righty = map(mouseY, 0, height, 428, 442, true);
    xLeft = map(mouseX, 0, width, 268, 280, true);
    xRight = map(mouseX, 0, width, 435, 441, true);
    
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
}
function drawMouth()
{
    line(273, 593, 395, 611);
 
}
function drawbackhair()
//create function backhair
//This fuction is for shape that can go behind the head layer
{
    fill("black");
    ellipse(327,303,472,410);
    ellipse(126,396,136,275);
    ellipse(513,401,102,269);

}
function drawfronthair()
//create fuction fronthair
//this fuction is for the the shape/hair that needs to appear in front of the head layer.
{
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
