function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    var skinlight = color(255, 213, 188);
    var skinMed = color(249, 199, 169);
    var skinDark = color(200, 200, 169);
    var hair = color(100, 50, 30);
    var shirt = color(50, 50, 60);
    var noseRing = color(244, 189, 100);
    var black = color (0, 0, 0);
    
    background(220);
    
    noStroke ();
    fill(skinMed);
    rect(165, 200, 70, 100);
    
    fill(shirt);
    rect(115, 275, 170, 130);
    
    fill(shirt);
    ellipse(120, 395, 120, 240);
    
    fill(shirt);
    ellipse(280, 395, 120, 240);
    
    fill(skinMed);
    ellipse(199, 275, 70, 60);
    
    fill(skinDark);
    ellipse(199, 210, 80, 100);
    
    
    fill(skinMed);
    ellipse(199, 170, 120, 160);
    
    ellipse(138, 173, 20, 40);
    ellipse(260, 173, 20, 40);
    
    noFill();
    stroke(noseRing);
    strokeWeight(3);
    ellipse(199, 202, 12, 12);
    
    noStroke();
    fill(skinlight);
    ellipse(199, 195, 20, 15);
    
    fill(hair);
    //quad(255, 180, 225, 115, 251, 100, 257, 150);
   // ellipse(240, 108, 25, 30);
    //ellipse(190, 100, 100, 45);
    //quad(145, 180, 155, 115, 141, 100, 137, 150);
    //quad(145, 160, 165, 135, 220, 110, 157, 100);
    stroke(20);
    strokeWeight(1); 
  
    line(170,100, 190, 90);
    line(180,100, 190, 90);
    line(185,100, 190, 90);
    line(200,100, 200, 90);
    line(210,100, 200, 90);
    line(220,100, 200, 90);
    line(230,100, 200, 90);
    
  
    line(140, 140, 150, 150);
    line(140, 130, 150, 140);
    line(150, 120, 160, 130);
    line(150, 110, 160, 120);
    line(160, 110, 170, 120);
    line(170, 110, 180, 120);
    
    
    line(240, 110, 230, 120);
    line(240, 120, 230, 130); 
    line(250,130, 240, 140); 
    line(260, 140, 250, 150); 
  
    
    fill(black);
    ellipse(175, 173, 10, 12);
    ellipse(225, 173, 10, 12);
    stroke(black);
    strokeWeight(3);
    line(182, 159, 160, 160);
    line(213, 159, 233, 160);
    line(185, 222, 215, 222);
    
     //Glasses
  
  
     //Rims
    strokeWeight(4);
    fill(255, 100);
    stroke(0);
    ellipse(width / 1.79, 175, 30);
    ellipse(width / 2.3, 175, 30);
    //Bridge
    stroke(0); 
    curve(170, 190, 210, 172, 190, 172, 210, 200);  
    
    //curve(130, 200, 185, 160, 210, 160, 200, 180);
    //Handles
    //Left
    stroke(0);
    curve(160, 157, 157, 175, 137, 155, 100, 140); 
    
    //curve(150, 157, 102, 157, 95, 140, 100, 140);
    //Right
    stroke(0);
    curve(310, 120, 240, 175, 255, 150, 230,140); 
    //curve(350, 157, 290, 157, 303, 143, 300, 100);
    
    // beard 
    
  
  }
  