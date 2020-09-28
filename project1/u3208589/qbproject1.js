//step up canvas
function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(100);
    hair();
    ear1();
    ear2();
    face();
    hairbang();  
    eye1();
    eye2();
    pupil2();
    pupil1();
    nose();
    mouth();
    neck();
    tshirt();
    glasses();
    teeth();
  }
  // drawing face
  function face(){
    let c = color(236, 188, 180);
   fill(c);
   noStroke();
   ellipse(300, 200, 100, 130);
   }
  //drawing hair bang 
  function hairbang(){
    let d = color (0);
    fill(d);
    noStroke();
    ellipse(300,150,80,50);
  }
  //drawing backhair
  function hair(){
    let d = color (0);
    fill(d);
    noStroke();
    rect(225.5, 120, 150,200,80,80,0,0);
  }
  //drawing left ear
  function ear1(){
   let c = color(236, 188, 180);
   fill(c);
   noStroke();
   ellipse(253, 210, 20);
   }
  //drawing right ear
  function ear2(){
   let c = color(236, 188, 180);
   fill(c);
   noStroke();
   ellipse(347, 210, 20);
   }
  // drawing left eye
  function eye1(){
   let e = color(255);
   fill(e);
   noStroke();
   ellipse(280, 210, 20,25);
  }
  // drawing left pupil 
  function pupil1() {
   let e = color(0);
   fill(e);
   noStroke();
   ellipse(280, 212.5, 10);
  }
  
  //drawing right eye 
  function eye2() {
   let e = color(255);
   fill(e);
   noStroke();
   ellipse(320, 210, 20,25);
  }
  
  // drawing right pupil
  function pupil2() {
   let e = color(0);
   fill(e);
   noStroke();
   ellipse(320, 212.5, 10);
  }
  //drawing nose
  function nose(){
   let c = color(236, 150, 180);
   fill(c);
   noStroke();
   ellipse(300, 230, 25, 10);
  }
  //drawing mouth
  function mouth(){
   let g = color (255,0,0);
   fill(g);
   noStroke();
   arc(300, 240, 30, 30, 0, PI, CHORD);
  }
  //drawing teeth 
  function teeth(){
    fill(255);
    noStroke();
    rect(285.5, 240, 29, 5);
  }
  //drawing neck 
  function neck(){
    fill(236, 188, 180);
    noStroke();
    rect(280, 258, 40, 50);
  }
  //drawing tshirt 
  function tshirt(){
    fill(160, 200, 100);
    noStroke();
    rect(225, 300, 150, 100, 20, 20,0,0);
  }
  //drawing classes 
  function glasses(){
  noFill();
  stroke(51);
  strokeWeight(4.0);
  ellipse(277, 210, 40, 40);
  ellipse(320, 210, 40, 40);
  }