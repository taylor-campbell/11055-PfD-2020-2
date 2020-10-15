/* Javascript file for u3075794 - Programming for design 24/9/2020 - used by u3075794Project1.html */

const { OPAQUE } = require("./p5");

//References to 'left' and 'right' are relative to screen position not real world position of eyes and whatnot.


function setup() { //loads all created functions in the appropriate order for layering.
    createCanvas(1000, 700);
    background(225,0,0);
        
    drawHead(500,350);
    drawEyes(400,300);
    drawEyebrows(340,235);
    drawNose(500,270);
    drawGlasses(250,250);
    drawMouth(500,500);
    drawBeanie(500,200);
  }
  
  function draw() {    

    stroke('Sienna'); // Draws a brown stroke at the location of the cursor when the mouse is clicked to allow the user to draw my beard 
    strokeWeight(12);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

    let s = 'DRAW MY BEARD'; // Creates text over the beanie to instruct the user 
    stroke('Purple');
    fill('Black');
    textSize(26);
    text(s, 400, 130, 500, 155); 
  }


function drawMouth(x,y) { //Draws mouth and tongue
    
    //Draws mouth hole
    strokeWeight(1);
    fill('Black');
    ellipse(x,y,150,50); 

    //Draws tongue
    fill('DarkRed'); 
    ellipse(x,y+12,75,25); 


}


function drawBeanie(x,y) { //Draws a beanie with a pompom
    fill('Purple');
    arc(x, y, 480, 300, 3.15, 0, PIE);
    fill('white');
    star(x, y-150, 40, 50, 40);
}

function drawHead(x,y) { //Draws a neck then a head

    
    fill('PeachPuff');
    strokeWeight(1); 
    rect(x-125, y+125, 250, 250); //Draws neck
    ellipse(x, y, 525, 600); // Draws main head
    
}

function drawEyes(x,y) { //Draws left eye first then draws right eye at an offset to the left
         
    // Draws left eye white
    fill('White');
    ellipse(x,y,75,50);    
    
    //Draws left eye iris
    fill('SaddleBrown');
    ellipse(x,y,45,50); 
    
    // Draws left eye pupil
    fill('Black');
    ellipse(x,y,25,25); 

    // Draws right eye white
    fill('White');
    ellipse(x+200,y,75,50);
    
    //Draws right eye iris
    fill('SaddleBrown');
    ellipse(x+200,y,45,50); 
    
    // Draws left eye pupil
    fill('Black');
    ellipse(x+200,y,25,25);
    
  }

function drawNose(x,y) { //Draws a bridge, two nostrils and the point of the nose with a shiny spot on the end. 
  
    stroke(255, 173, 102);
    strokeWeight(5); 

    line(x -35, y, x-35, y+85); //Draws bridge of nose
    line(x +25, y, x+25, y+85);

    fill('PeachPuff');
    ellipse(x+25, y+105, 45,20); //Draws nostrils
    ellipse(x-35, y+105, 45,20);

    ellipse(x-5,y+105, 90,60);//Draws point of the nose

    
    stroke(255, 241, 230); // Draws shiny spot on point of nose
    fill(255, 241, 230);
    ellipse(x-20,y+95, 5,5);

}

function drawEyebrows(x,y) { //Draws eyebrows using multiple lines drawn at an angle then offset from the previously drawn line

    
    stroke('Sienna');
    strokeWeight(5); 

    for (let a = 0; a < 20 ; a++) { // Draws left eyebrow
        let b = a *6;
        line(x+b, y, x+5+b, y+25);
    }
    x= x+200; //offsets x for right eyebrow

    for (let a = 0; a < 20 ; a++) { // draws right eyebrow
        let b = a *6;
        line(x+b, y, x-5+b, y+25);
    }

}

function drawGlasses(x,y) { //Draws glasses with frames and opaque lenses. 

    //Draws Lenses
    fill(173,216,230,100);    
    rect(x+90, y, 110, 90); 
    rect(x+290, y, 110, 90); 

    // Draws glasses crossbar and frames.
    stroke('Black');
    strokeWeight(15); 
    line(x, y, x+500, y); //Draws crossbar
    
    line(x+90, y, x+90, y+90); // Draws left frame
    line(x+200, y, x+200, y+90);
    line(x+90, y+90, x+200, y+90);

    x = x +200; // offsets x position for right frame
    line(x+90, y, x+90, y+90); // Draws right frame
    line(x+200, y, x+200, y+90);
    line(x+90, y+90, x+200, y+90);
}

function star(x, y, radius1, radius2, npoints) { // This function is used to create the star for the beanie (copied from p5 references)
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }