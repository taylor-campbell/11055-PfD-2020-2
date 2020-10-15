function drawFace(xpos, ypos, diameter) {
    circle(xpos, ypos, diameter);  
}

function drawEar(xpos, ypos, diameter) {
    circle(xpos, ypos, diameter);  
  
}

function drawSmilyFace(xpos, ypos, width, height, start, stop) {
  arc(xpos, ypos, width, height, start, stop); 
}

function drawEye(xpos, ypos, diameter) {
  circle(xpos, ypos, diameter); 
  
}

function setup() {
  createCanvas(600, 400);
  

  
  
  
}

function draw() {
  background(220);
  drawFace(200, 200, 200); 
  drawEar(90, 190, 25); 
  drawEar(310, 190, 25); 
  drawSmilyFace(200, 240, 90, 30, PI * 0, PI * 1); 
  drawEye(170, 190, 20); 
  drawEye(230, 190, 20); 

}