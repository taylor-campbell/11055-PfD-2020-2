//the online version of this sketch
// https://editor.p5js.org/NextQueenLiz/sketches/ELJPCjCfS

var Haircolour;
var Skincolour;
var Facecolour;


function setup() {
  createCanvas(1000, 1000);
  //set colour variants here
  Haircolour = '#3D270B'
  Skincolour = '#E8D6BF'
  Facecolour = '#F6E4CC'
}

function draw() {
  background('#0DB689');
  
  fill (Haircolour)
  noStroke()
  //hair
  beginShape();
  //top vertex
  vertex(500,300);
  //upper shape vertex left
  vertex(400,320);
  //mid shape vertex left
  vertex(350,400);
  //lower shape vertex left
  vertex(320,640);
  //bottom corners
  vertex(360,700);
  vertex(640,700);
  vertex(680,640);
  //mid shape vertex right
  vertex(650,400);
  //upper shape vertex right
  vertex(600,320);
  endShape(CLOSE);
    
  //neck
  fill (Skincolour)
  quad(420,640,580,640,560,800,440,800);
  quad (460,700,540,700,150,900,850,900);
  
  //ears
  
  //earrings
  
  //body
  fill(Skincolour)
  quad(150,900,850,900,760,780,240,780);
  
  //clothing
  
  //face
  fill (Facecolour);
  ellipse(500,530,250,370);
  
  //hair over face
  fill (Haircolour);
  beginShape();
  //point
  vertex(500,400);
  //shape
  vertex(410,350);
  vertex(360,635);
  vertex(470,740);
  vertex(370,720);
  vertex(360,700);
  vertex(320,640);
  vertex(400,330);
  vertex(600,330);
  vertex(680,640);
  vertex(640,700);
  vertex(630,720);
  vertex(530,740);
  vertex(640,635);
  vertex(590,350);
  endShape(CLOSE);
  
  //hair bun
  fill(Haircolour);
  beginShape();
  vertex(450,285);
  vertex(455,260);
  vertex(470,255);
  vertex(530,255);
  vertex(545,260);
  vertex(550,285);
  vertex(520,320);
  vertex(480,320);
  endShape(CLOSE);
  
  //eye base
  
  //eyebrows
  
  //eye detail
  
  //glasses
  
  //nose
  
  //mouth
  
}