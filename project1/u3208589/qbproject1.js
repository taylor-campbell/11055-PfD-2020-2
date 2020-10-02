function setup() {
  createCanvas(600, 400);
}

//draw background and apply noStroke for all shapes 
function draw() {
  background(100);
  noStroke();
  hair();
  ears();
  face();
  hairbang();  
  eye();
  pupils();
  nose();
  mouth();
  neck();
  tshirt();
  glasses();
  teeth();
}

// create variables and functions 
var x = 300;
var y = 200;
var diameter = 20;
//draw face
function face(){
 let c = color(236, 188, 180);
 fill(c);
 ellipse(x, y, 100, 130);
 }
//draw hair 
xhairbang =x;
yhairbang = y - 50;
xbackhair = x -74.5;
ybackhair = y - 80;
function hairbang(){
  let d = color (0);
  fill(d);
  ellipse(xhairbang,yhairbang,80,50);
}
function hair(){
  let d = color (0);
  fill(d);
  rect(xbackhair, ybackhair, 150,200,80,80,0,0);
}
//draw ears
var xleftear =  x - 47;
var yleftear = y +10;

xrightear = x + 47;
yrightear = yleftear;
function ears(){
 let c = color(236, 188, 180);
 fill(c);
 ellipse(xleftear, yleftear, diameter);
ellipse(xrightear, yrightear, diameter);
 }
//draw eyes and pupils 
var xlefteye =  x - 20;
var ylefteye = y + 10;
var xrighteye = x + 20;
yrighteye = ylefteye;
xleftpupil = xlefteye;
xrightpupil = xrighteye;
yleftpupil = y + 12.5;
yrightpupil = yleftpupil;
pupildiameter= diameter/2;

function eye(){
 let e = color(255);
 fill(e);
 ellipse(xlefteye, ylefteye, diameter,25);
 ellipse(xrighteye, yrighteye, diameter,25);
}
function pupils() {
 let e = color(0);
 fill(e);
ellipse(xleftpupil, yleftpupil, pupildiameter);
ellipse(xrightpupil, yrightpupil, pupildiameter);
}
// draw nose
xnose = x;
ynose = y + 30;
diameternose = diameter + 5;
function nose(){
 let c = color(236, 150, 180);
 fill(c);
 ellipse(xnose, ynose, diameternose, 10);
}
// draw mouth
xmouth = x;
ymouth = y + 40;
function mouth(){
 let g = color (255,0,0);
 fill(g);
 arc(xmouth, ymouth, 30, 30, 0, PI, CHORD);
}
//draw teeth 
xteeth = x-14.5;
yteeth = y + 40;
function teeth(){
  fill(255);
  noStroke();
  rect(xteeth, yteeth, 29, 5);
}
//draw neck
xneck= x -20;
yneck= y + 58;
function neck(){
  fill(236, 188, 180);
  rect(xneck, yneck, 40, 50);
}
//draw tshirt
xtshirt = x - 75;
ytshirt = y + 100;
function tshirt(){
  fill(160, 200, 100);
  rect(xtshirt, ytshirt, 150, 100, 20, 20,0,0);
}
//draw glasses 
xleftglass=x-23;
yleftglass=y+10;
xrightglass=x+20;
yrightglass=yleftglass;
diameterglasses= diameter*2;
function glasses(){
noFill();
stroke(51);
strokeWeight(4.0);
ellipse(xleftglass, yleftglass, diameterglasses);
ellipse(xrightglass, yrightglass, diameterglasses);
}