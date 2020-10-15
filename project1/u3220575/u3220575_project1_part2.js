// this is the file for the waveform background

let time = 0; // time variable
var canvas;

//this is made to fit the window of the browser
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  noStroke();
  fill("#ff0000");
  canvas.style('z-index','-2')
}

//this is made to be sure that there is no issue resizing the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10, 10);

  // x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 100) {
    for (let y = 0; y <= height; y = y + 9) {
      // starting point of each circle (mouse position)
      const xAngle = map(mouseX, 10, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 10, height, -4 * PI, 4 * PI, true);
      //where is the particle
      const angle = xAngle * (x / width) + yAngle * (y / height);

      //particules' movements
      const myX = x + 20 * cos(2 * PI * time + angle);
      const myY = y + 20 * sin(2 * PI * time + angle);

      // draw particle
      ellipse(myX, myY, 20); 
    }
  }

  time = time + 0.009; // update time
}
