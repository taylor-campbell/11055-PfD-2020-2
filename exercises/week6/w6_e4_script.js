/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// P5


/* Goto https://p5js.org/get-started/

Do the examples on this page and have an explore on their further examples

You should now have the tools to start creating your self portrait for project 1

*/
let x = 0 

function setup() {
    createCanvas(1255, 555);
    line(15,25,70,90);
  }
  
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } 
    else {
        fill(255)
    }
    square(mouseX-35,mouseY-35,75); 

}


