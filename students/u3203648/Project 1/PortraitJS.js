//the online version of this sketch
// https://editor.p5js.org/NextQueenLiz/sketches/ELJPCjCfS

//set colour variants 
var Haircolour;
var Collarcolour;
var Skincolour;
var Shirtcolour;
var Facecolour;
var Eyecolour;
var Eyecolour2;
var Lipcolour;

//canvas setup
function setup() {
  createCanvas(1000, 1000);
  //set colours for colour names
  Haircolour = '#3D270B'
  Skincolour = '#E8D6BF'
  Facecolour = '#F6E4CC'
  Shirtcolour = 192
  Collarcolour = 200
  Eyecolour = '#FFFDF7'
  Eyecolour2 = '#197D91'
  Lipcolour = '#FFB7B7'
}

//drawing
function draw() {
  background('#0DB689');

  //hair base
  noStroke()
  fill (Haircolour)
  beginShape();
  vertex(500,300);
  vertex(400,320);
  vertex(350,400);
  vertex(320,640);
  vertex(360,700);
  vertex(640,700);
  vertex(680,640);
  vertex(650,400);
  vertex(600,320);
  endShape(CLOSE);
    
  //shirt collar behind - left
  fill(Collarcolour)
  beginShape()
  curveVertex(435,760);
  curveVertex(430,780);
  curveVertex(380,740);
  curveVertex(450,710);
  endShape(CLOSE);
  
  //shirt collar behind - right
  beginShape()
  curveVertex(565,760);
  curveVertex(570,780);
  curveVertex(620,740);
  curveVertex(550,710);
  endShape(CLOSE);
  
  //neck
  fill (Skincolour)
  quad(420,640,580,640,560,800,440,800);
  quad(460,700,540,700,190,880,810,880);
  
  //body
  quad(150,950,850,950,760,780,240,780);
  
  //clothing
  fill(Shirtcolour)
  beginShape()
  vertex(490,950);
  vertex(400,770);
  vertex(240,780);
  vertex(163,870);
  vertex(158,870);
  vertex(145,900);
  vertex(240,950);
  endShape(CLOSE);
  
  beginShape()
  vertex(510,950);
  vertex(600,770);
  vertex(760,780);
  vertex(837,870);
  vertex(842,870);
  vertex(855,900);
  vertex(760,950);
  endShape(CLOSE);
  
  //shirt collar base - left
  fill(Collarcolour)
  beginShape()
  vertex(380,740);
  vertex(420,760);
  vertex(490,950);
  endShape(CLOSE);
  
   //shirt collar point - left
  beginShape()
  vertex(435,820);
  vertex(380,740);
  vertex(350,790);
  vertex(390,780);
  endShape(CLOSE);
  
  //shirt collar base - right
  beginShape()
  vertex(620,740);
  vertex(580,760);
  vertex(510,950);
  endShape(CLOSE);
  
  //shirt collar point - right
  beginShape()
  vertex(565,820);
  vertex(620,740);
  vertex(650,790);
  vertex(610,780);
  endShape(CLOSE);

  //face
  fill (Facecolour);
  ellipse(500,530, 250,370);
  
  //hair over face
  fill (Haircolour);
  beginShape();
  vertex(500,400);
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
  fill(Eyecolour);
  beginShape();
  vertex(465,525);
  vertex(460,510);
  vertex(420,505);
  vertex(400,520);
  vertex(430,529);
  endShape(CLOSE);
  
  beginShape();
  vertex(535,525);
  vertex(540,510);
  vertex(580,505);
  vertex(600,520);
  vertex(570,529);
  endShape(CLOSE);
  
  stroke(0)
  strokeWeight(2)
  line(540,510,580,505);
  line(580,505,595,515);
  line(420,505,405,515);
  line(460,510,420,505);
  
  //eye detail
  strokeWeight(1)
  fill(Eyecolour2);
  beginShape();
  curveVertex(440,509);
  curveVertex(455,510);
  curveVertex(453,520);
  curveVertex(440,525);
  curveVertex(428,520);
  curveVertex(428,508);
  endShape(CLOSE);
  
  beginShape();
  curveVertex(560,509);
  curveVertex(545,510);
  curveVertex(547,520);
  curveVertex(560,525);
  curveVertex(572,520);
  curveVertex(572,508);
  endShape(CLOSE);
  
  fill(0)
  ellipse(559,513,12);
  ellipse(441,513,12);
  
  //left eyebrow
  fill(Haircolour);
  beginShape();
  vertex(480,492);
  vertex(475,480);
  vertex(420,470);
  vertex(395,490);
  vertex(420,480);
  endShape(CLOSE);
  
  //right eyebrow
  beginShape();
  vertex(520,492);
  vertex(525,480);
  vertex(580,470);
  vertex(605,490);
  vertex(580,480);
  endShape(CLOSE);
  
  //nose
  stroke(140)
  strokeWeight(1)
  line(515,510,520,560);
  line(523,580,530,590);
  line(530,590,523,595);
  line(470,590,477,595);
  line(477,580,470,590);
  
  //glasses
 let RGlasses = map(mouseX, 0, width, 0, 255)
 let GGlasses = map(mouseY, 0, height, 0, 255);

  noFill();
  stroke(RGlasses, GGlasses, 100);
  strokeWeight(4);
  beginShape();
  curveVertex(520,520);
  curveVertex(521,521);
  curveVertex(532,548);
  vertex(570,558);
  vertex(605,535);
  vertex(600,493);
  vertex(540,495);
  endShape(CLOSE);
  
  line(393,505,380,500);
  curve(530,580,520,520,480,520,470,580)
  line(607,505,620,500);
  
  beginShape();
  curveVertex(480,520);
  curveVertex(479,521);
  curveVertex(468,548);
  vertex(430,558);
  vertex(395,535);
  vertex(400,493);
  vertex(460,495);
  endShape(CLOSE);
  
  //mouth
  noStroke();
  fill(Lipcolour);
  beginShape();
  vertex(550,650);
  vertex(542,648);
  vertex(520,635);
  vertex(500,638);
  vertex(480,635);
  vertex(458,648);
  vertex(450,650);
  curveVertex(500,665);
  endShape(CLOSE);
  
  noFill();
  stroke('#FF9898')
  curve(450,640,490,649,510,649,550,640);
}