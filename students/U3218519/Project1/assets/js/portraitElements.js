/* This file contains all drawn elements to be displayed on the canvas
Olly Hills 29th of September 2020 */


  // Head
  var head = function(){
    beginShape()
      fill("#ffddbb");
      strokeWeight(4);
      strokeJoin(ROUND);
      // Bottom half of head shape
      bezier(50, 200, 100, 450, 300, 450, 350, 200);
      // Top half of head shape
      bezier(50, 200, 0, -50, 400, -50, 350, 200);    
    endShape()
  }

  // Eyes
  var eyes = function(){
    var eyesObject = {
      centerLine: 200,
      height: 190,
      size: 15,
      colour: "black",
      quantity: 2,
      centerSpacing: 65,
      eyeDrawing: function(){
        fill(eyesObject.colour);
        // Left eye
        ellipse((this.centerLine - this.centerSpacing), this.height, this.size);
        // Right eye
        ellipse((this.centerLine + this.centerSpacing), this.height, this.size);
      }, 
  };
    eyesObject.eyeDrawing()
  }

  // Nose
  var nose = function(){
    // Bridge and right nostrile
    beginShape()
      noFill();
      vertex(210, 200);
      quadraticVertex(210, 230, 225, 240);
      quadraticVertex(235, 250, 225, 260);
    endShape();

    // Left nostril
    beginShape()
      vertex(175, 240);
      quadraticVertex(165, 250, 175, 260);
    endShape()

    // Nose point
    beginShape()
      vertex(185, 255);
      quadraticVertex(200, 265, 215, 255)
    endShape()
  }

  // Mouth Drawing
  var mouth = function(){
    // Mouth shape
    beginShape()
      fill(0)
      vertex(150, 300);
      vertex(250, 300);
      quadraticVertex(200, 380, 150, 300);
    endShape()

    // Teeth
    beginShape()
      fill(255)
      vertex(150, 300);
      vertex(250, 300);
      vertex(239, 310);
      quadraticVertex(200, 315, 161, 310);
      vertex(150, 300);
    endShape()

    // Tongue
    beginShape()
      fill("red")
      vertex(175, 330);
      quadraticVertex(200, 320, 225, 330);
      quadraticVertex(200, 353, 175, 330);
    endShape()


  };

  // Ears
  var ears = function(){
    beginShape()
      fill("#ffddbb");
      // Left Ear
      bezier(50, 160, 10, 160, 45, 270, 70, 250);
      // Right Ear
      bezier(350, 160, 390, 160, 355, 270, 330, 250);
    endShape()
  }
  
  // Hat Drawing
  var hat = function(){
    // Top Section
    beginShape()
      fill("red")
      vertex(50, 120)
      quadraticVertex(70, 35, 150, 18)
      quadraticVertex(200, -10, 250, 18)
      quadraticVertex(330,35, 350,120)
      vertex(50,120)
    endShape(CLOSE);

    // Head Band
    beginShape()
      vertex(50, 160)
      vertex(350, 160)
      quadraticVertex(355,160, 355, 155)
      vertex(355, 125)
      quadraticVertex(355, 120, 350, 120)
      vertex(50, 120)
      quadraticVertex(45, 120, 45, 125)
      vertex(45, 155)
      quadraticVertex(45, 160, 50, 160 )
    endShape(CLOSE)
  }

  // Beard Drawing
  var beard = function(){

    beginShape();
      fill("brown");
      vertex(50, 160);
      quadraticVertex(100, 250, 65, 260);
      quadraticVertex(70, 320, 110, 340);
      quadraticVertex(110, 400, 200 ,390);
      quadraticVertex(290, 400, 290 ,340);
      quadraticVertex(330, 320, 335 ,260);
      quadraticVertex(300, 250, 350 ,160);
      vertex(340, 160);
      quadraticVertex(290, 220, 290, 250);
      quadraticVertex(290, 280, 260, 280);
      vertex(140,280)
      quadraticVertex(110, 280, 110, 250);
      quadraticVertex(110, 220, 60, 160);
      vertex(60, 160);
    endShape(CLOSE);
  }