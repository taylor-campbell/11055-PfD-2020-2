/**
 Seth Arnould 
 The Program on the document are the functions used to created the portrait. 
 Note: Cordinating of the shapes help found using photoshop.
* */




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
    fill(56,16,28);
        ellipse(273,395,29,26);
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
fill(56,16,28);
    ellipse(438.50 ,432.50 ,29,27);
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
function drawhair()
{


}
function drawBody()
{
    
    

}