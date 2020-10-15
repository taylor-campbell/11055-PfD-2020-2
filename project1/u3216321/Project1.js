//Project 1
  //Using P5 Library to create a self-portrait

  //create variables
    //centre of x and y axis
    var mid = 450;
    //distance from mid. Used for all eye shapes and eyebrows
    var eyespace = 100;
    //the opacity of each mouth. Always opposite each other
    var mouth = 255;
    var mouth2 = 0;
    //slider for eyebrows y position
    let slider;
      //variables for mouseX and mouseY functions
      x = width;
      y = height;

  //setup canvas
  function setup() {
    createCanvas(900, 900);
    //Slider(min value, max value, starting value)
    slider = createSlider(0, 70, 0);
    //position rectangle from center
    rectMode(CENTER);
      //default stroke and strokeWeight
      strokeWeight(4);
      stroke(17, 40, 70);
  }

  function draw() {
    //draw backgrounds
      //black background
      background(0);
      //blue background
      background(50, 200, 250, (255 - mouseY/4));
    //draw hair (back)
      strokeWeight(0);
      fill(85, 55, 35, 255);
      rect(mid, 500, 475, 140);
    //shirt
      fill(80, 80, 180);
      rect(mid, 820, 500, 200);
      rect(mid, 900, 660, 200);
      //rounded corners
      ellipse(mid-250, 800, 160);
      ellipse(mid+250, 800, 160);
      //arm lines
        strokeWeight(4);
        stroke(17, 40, 70);
        line(mid-220, 840, mid-220, 900);
        line(mid+220, 840, mid+220, 900);
    //draw neck
      fill(245, 226, 207);
      //base
      ellipse(mid, 780, 250, 100);
      //neck (outline)
      rect(mid, 690, 170, 200);
      //neck (no outline). Overlaps bottom of neck (outline)
      strokeWeight(0);
      rect(mid, 700, 166, 200);
    //draw ears
      strokeWeight(4);
      ellipse(mid-250, 410, 100, 150);
      ellipse(mid+250, 410, 100, 150);
    //draw head
      ellipse(mid, 400, 500);
    //draw eyes
      //eye whites
      strokeWeight(0);
      fill(255);
      ellipse(mid-eyespace, 400, 120);
      ellipse(mid+eyespace, 400, 120);
      //pupils
      fill(0, 185, 150);
      strokeWeight(4);
      ellipse((mid-eyespace)+random(-1, 1), 400+random(-3, 3), 80);
      ellipse((mid+eyespace)+random(-1, 1), 400+random(-3, 3), 80);
      //highlights
      fill(255);
      strokeWeight(0);
      ellipse((mid-eyespace)-33, 400, 40, 25);
      ellipse((mid+eyespace)-33, 400, 40, 25);
    //draw eyelids
      strokeWeight(0);
      fill(245, 226, 207);
      rect(mid, 270+(mouseY/7), 350, 125);
    //draw eye outlines
      strokeWeight(4);  
      fill(0, 0, 0, 0);
      ellipse(mid-eyespace, 400, 120);
      ellipse(mid+eyespace, 400, 120);
    //draw eyebrows
      strokeWeight(0);  
      fill(85, 55, 35, 255);
      rect(mid-eyespace, 280+slider.value(), 120, 35);
      rect(mid+eyespace, 280+slider.value(), 120, 35);
    //draw mouths
      //mouth1
      strokeWeight(6);
      stroke(17, 40, 70, mouth);
      line(mid-50, 575, mid+50, 550);
      //mouth2
      strokeWeight(0);
      fill(30, 0, 0, mouth2);
      ellipse(mid, 575, 35, 60);
    //draw nose
      strokeWeight(0);
      stroke(17, 40, 70);
      fill(0, 0, 0, 30);
      triangle(mid+15, mid+50, mid-15, mid+50, mid, mid-30);
    //draw hair (front)
      //top
        fill(100, 70, 50);
        rect(mid, 200, 550, 80);
        rect(mid, 200, 450, 200);
        //circles for rounded corners
        ellipse(225, 150, 100);
        ellipse(675, 150, 100);
      //sides
        fill(100, 70, 50);
        ellipse(180, 300, 150, 300);
        ellipse(685, 295, 170, 370);
      //fringe
        triangle(mid+30, 300, 650, 300, 660, 472)
    //draw Z's
      stroke(255, 255, 255, mouseY-600);
      strokeWeight(10);
      //Z1
        line(600, 30+(random(-1, 1))+50, 650, 30+(random(-1, 1))+40);
        line(600, 80+(random(-1, 1))+50, 650, 30+(random(-1, 1))+40);
        line(600, 80+(random(-1, 1))+50, 650, 80+(random(-1, 1))+40);
      //Z2
        line(600+90, 30+(random(-1, 1))+30+10, 650+80, 30+(random(-1, 1))+20+10);
        line(600+90, 80+(random(-1, 1))+30, 650+80, 30+(random(-1, 1))+20+10);
        line(600+90, 80+(random(-1, 1))+30, 650+80, 80+(random(-1, 1))+20);
      //Z3
        line(600+170, 30+(random(-1, 1))+10+20, 650+150, 30+(random(-1, 1))+20);
        line(600+170, 80+(random(-1, 1))+10, 650+150, 30+(random(-1, 1))+20);
        line(600+170, 80+(random(-1, 1))+10, 650+150, 80+(random(-1, 1)));
  }

  function mousePressed() {
  //allow clicking within area of head shape only
    //dist(x position of mouse, y position of mouse, x, y)
    //(d < radius)
    let d = dist(mouseX, mouseY, mid, 400);
    if (d < 250) {
      //swap mouth1 to mouth2
      if (mouth2 == 0) {
        mouth = 0;
        mouth2 = 255;
      }
      //swap mouth2 to mouth1
      else {
        mouth = 255;
        mouth2 = 0;
      }
    }
  }

