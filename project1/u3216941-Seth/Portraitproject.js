
//the setup for the main drawing, creating a canvas, 
//background colour and what angle model to uses, which is set
function setup() {
    createCanvas(641, 904);
    angleMode(DEGREES);

  //Seting the variable of the cordinates of y so the shapes can move up and down,
    //for both Left side and right side.
    yLeftbrow = 336;    
    yRightbrow = 381;
  }
  
  function draw() {
    background("pink");
drawBody();
drawbackhair();
drawHead();
drawfronthair();
drawNose();
drawEyes();
drawMouth();


}
// Call drawHead()
// Call drawEyes()
// Call drawNose()
// Call drawMouth()
// Call drawhair()
// Call drawBody()

/*

var fuctionarray = [drawBody,drawbackhair,drawHead,drawfronthair,drawEyes,drawNose,drawMouth];
var nextFunction = 0;

function Nextstep() {
  fuctionarray[nextFunction]();
  nextFunction = nextFunction + 1;
}
*/

