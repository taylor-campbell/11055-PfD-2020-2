
//onst for the sizes

//const fro the drawwing width and heigh
//variable for the eye level
//variable for eye wwth
//const colour


function setup() {
    createCanvas(641, 904);
    background("pink");
    angleMode(DEGREES);
  }
  
  function draw() {
drawBody();
drawbackhair();
drawHead();
drawfronthair();
drawEyes();
drawNose();
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

