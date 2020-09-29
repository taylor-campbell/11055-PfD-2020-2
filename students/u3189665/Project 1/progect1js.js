let y = 100;
let x = 100;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  // createCanvas must be the first statement
  createCanvas(400, 400);
  stroke(255); // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  let x = width / 2;
  background(0); // Set the background to black
  y = y - 2;
  if (y < 0) {
    y = height;
  }
  circle(x, y, width / 10);
}