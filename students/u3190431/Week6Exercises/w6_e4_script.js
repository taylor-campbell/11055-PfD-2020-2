/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// P5


/* Goto https://p5js.org/get-started/

Do the examples on this page and have an explore on their further examples

You should now have the tools to start creating your self portrait for project 1

*/

/*
function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background("red");
    ellipse(50,50,100,80);
    fill("blue");
    ellipse(150,50,100,80);
  }
*/
function setup() {
    createCanvas(400, 400);
  }
  
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}