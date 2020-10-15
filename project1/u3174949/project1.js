// Project 1 for u3174949 (student)

// START drawing a self portrait using Visual Studio Code, P5 library, & resources from the internet.

// First createCanvas
function setup() {
    //run once
    createCanvas(400, 400);
  }
// Function draw to draw a self portrait  
  function draw() {
    // SET variables & colours for self portrait skin, hair, shirt, nose.
    var skinlight = color(255, 213, 188);
    var skinMed = color(249, 199, 169);
    var skinDark = color(200, 200, 169);
    var hair = color(100, 50, 30);
    var shirt = color(50, 50, 60);
    var noseRing = color(244, 189, 100);
    var black = color (0, 0, 0);
    
    //SET bacground (light grey colour)
    background(220);
    
    //Start filling colours into shapes such as rectangles, ellipses, curves & lines.
    noStroke ();
    fill(skinMed);
    rect(165, 200, 70, 100);
    

    // drawing the shirt
    fill(shirt);
    rect(115, 275, 170, 130);
    
    fill(shirt);
    ellipse(120, 395, 120, 240);
    
    fill(shirt);
    ellipse(280, 395, 120, 240);
    

    // 
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
   
   
    // Hair 
    fill(hair);
    stroke(20);
    strokeWeight(1); 
    // using lines...
    // top position (hair)  
    line(170,100, 190, 90);
    line(180,100, 190, 90);
    line(185,100, 190, 90);
    line(200,100, 200, 90);
    line(210,100, 200, 90);
    line(220,100, 200, 90);
    line(230,100, 200, 90);
    // right side (hair)
    line(140, 140, 150, 150);
    line(140, 130, 150, 140);
    line(150, 120, 160, 130);
    line(150, 110, 160, 120);
    line(160, 110, 170, 120);
    line(170, 110, 180, 120);
    // left side (hair)
    line(240, 110, 230, 120);
    line(240, 120, 230, 130); 
    line(250,130, 240, 140); 
    line(260, 140, 250, 150); 
  

    // eyes
    fill(black);
    ellipse(175, 173, 10, 12);
    ellipse(225, 173, 10, 12);
    
    // eyebrows and mouth
    stroke(black);
    strokeWeight(3);
    // right eyebrow
    line(182, 159, 160, 160);
    // left eyebrow
    line(213, 159, 233, 160);
    // mouth
    line(185, 222, 215, 222);
    

    
    // Glasses
     //Rims
    strokeWeight(4);
    //reflection for glasses
    fill(255, 100);
    stroke(0);
    ellipse(width / 1.79, 175, 30);
    ellipse(width / 2.3, 175, 30);
    //Bridge
    stroke(0); 
    curve(170, 190, 210, 172, 190, 172, 210, 200);  
    //Handles
    //Left
    stroke(0);
    curve(160, 157, 157, 175, 137, 155, 100, 140); 
    //Right
    stroke(0);
    curve(310, 120, 240, 175, 255, 150, 230,140); 
   
    
    
    
  
  }
// END  