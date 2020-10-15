//creating canvas
function setup() {
  createCanvas(600, 600);
}
//creating a background  
function draw() {
  background(255);

  //Drawing a Face 
  noStroke()
  fill(247, 221, 212);
  ellipse(280, 260, 220, 290);

  //Drawing Eyes
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(215, 240, 28, 25); //left eye
  ellipse(315, 240, 28, 25); //right eye

  //Dreawing Eyeballs
  noStroke()
  fill(255)
  ellipse(205, 240, 8, 8); //left eyeball
  ellipse(305, 241, 8, 8); //right eyeball

  //Drawing a Nose
  fill(247, 221, 155)
  triangle(270, 250, 270, 300, 240, 300);

  //Drawing a Mouth
  fill(255, 102, 102);
  arc(270, 335, 40, 25, 0, PI);

}