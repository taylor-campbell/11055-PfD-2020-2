function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background
  background(400);
  //triangle
  noStroke();
  fill(255, 188, 171);
  triangle(400, 400, 0, 0, 0, 400);
  
  //hair
  fill(38, 24, 5)
  rect(110, 100, 180, 250, 80, 80, 5, 5);
  noStroke();
  
  //face
  fill(214, 133, 99);
  ellipse(200,200,180,200);
  
  //bangs
  fill(38, 24, 5)
  rect(105, 100, 190, 100, 100, 100, 10, 10);
  
  //left eyebrow
  strokeWeight(6)
  stroke(38, 24, 5)
  line(150, 200, 180, 205);
  line(140, 205, 200, 185);
 
  //right eyebrow
  line(250, 200, 220, 205);
  line(260, 205, 250, 200);
  
  //lips
  noStroke();
  fill(242, 149, 126);
  ellipse(200,260,50,20);
  strokeWeight(2);
  stroke(38, 24, 5);
  line(230, 260, 170, 260);
   
}