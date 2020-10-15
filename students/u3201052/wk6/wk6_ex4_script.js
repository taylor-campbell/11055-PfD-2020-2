/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// P5


/* Goto https://p5js.org/get-started/ play around with the interaction examples on this website

Do the examples on this page and have an explore on their further examples

You should now have the tools to start creating your self portrait for project 1

*/

function setup() {
    createCanvas(400, 600);
}
  
function draw() { //this makes a permanent loop, a do loop
    background("pink"); //220 is a colour code for grayscale colour
    ellipse(80,70,100,70); 
    fill("blue");
    ellipse(160,70,100,70);
  }

function draw() { //you can use this to make things move in your portrait, e.g. making eyes open and close
    if (mouseIsPressed) {
      fill(0); //0 is black
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

