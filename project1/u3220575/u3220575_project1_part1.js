// This is the self-portrait drawing

let canvas1 = new p5(( sketch ) => {

    //constants for gradient
      const Y_AXIS = 1;
      const X_AXIS = 2;
      let a1, a2;
    
    //instance mode => able to to add up multiple canvas
    //function setup
    //position function = center the canvas in the middle of the window
    sketch.setup = () => {
      var x = (sketch.windowWidth - sketch.width) / 2;
      var y = (sketch.windowHeight - sketch.height) / 2;
      let canvas1 = sketch.createCanvas(400,400); 
      canvas1.position(x,y);
      
    }
      //colours for gradient = red in the middle and dark grey outside
      b1 = sketch.color("#2B2D2F");
      b2 = sketch.color("#ff0000");
    
    
    //draw function
    sketch.draw = () => {
    //gradient background
    
      sketch.setGradient(0, 0, sketch.width / 2, sketch.height, b1, b2, X_AXIS);
      sketch.setGradient(sketch.width / 2, 0, sketch.width / 2, sketch.height, b2, b1, X_AXIS);
      sketch.rectMode(sketch.CENTER);
      
      
    //hair top part 
      sketch.noStroke();
      sketch.fill(255);
      sketch.ellipse(170,170,140,200);
      sketch.ellipse(228,170,140,200);
    
      //hair middle part
      sketch.quad(101,165,299,165,350,300,50,300);

      //hair tips 
    sketch.beginShape(sketch.TRIANGLES);
            //from the right to the left
            //triangle 1
            sketch.vertex(292, 264);
            sketch.vertex(335, 264);
            sketch.vertex(378, 370);
            //triangle 2
            sketch.vertex(240, 200);
            sketch.vertex(320, 264);
            sketch.vertex(342, 365);
            //triangle 3
            sketch.vertex(161, 211);
            sketch.vertex(321, 245);
            sketch.vertex(286, 361)
            //triangle 4
            sketch.vertex(197, 271);
            sketch.vertex(286, 264);
            sketch.vertex(202, 369);
            //triangle 5
            sketch.vertex(138, 266);
            sketch.vertex(196, 268);
            sketch.vertex(133, 358);
            //triangle 6
            sketch.vertex(104, 268);
            sketch.vertex(175, 260);
            sketch.vertex(99, 349);
            //triangle 7
            sketch.vertex(74, 273);
            sketch.vertex(119, 272);
            sketch.vertex(78, 358);
            //triangle 8
            sketch.vertex(63, 272);
            sketch.vertex(108, 271);
            sketch.vertex(25, 355);
    sketch.endShape();
     
    //sweatshirt hood
      sketch.fill("#169479");
      sketch.ellipse(190, 350, 185, 80);
      
    //neck + shoulders
      sketch.stroke("#ce8359");
      sketch.strokeWeight(1);
      sketch.fill("#f6cdb6");
      sketch.quad(169,250,240,270,235,370,155,350);
      sketch.ellipse(185,440,330,230);
    
                //ears
                    //left ear
                sketch.stroke("#ce8359");
                sketch.strokeWeight(1);
                sketch.fill("#f6cdb6");
                sketch.ellipse(120,200, 30, 45);
                //inside 
                sketch.fill("#ce8359");
                sketch.noStroke();
                sketch.ellipse(125, 200, 10, 20);
                
                    //right ear
                sketch.stroke("#ce8359");
                sketch.fill("#f6cdb6");
                sketch.ellipse(280,200, 30, 45);  
                //inside
                sketch.fill("#ce8359");
                sketch.noStroke();
                sketch.ellipse(274,200, 10, 20);
                
                //face
                sketch.fill("#f6cdb6");
                sketch.stroke("#ce8359");
                sketch.strokeWeight(1);
                sketch.ellipse(200, 202, 145, 200);
      
      
      
    //eyes
      //left eye
        //exterior eye
      sketch.stroke("black");
      sketch.strokeWeight(3);
      sketch.noFill();
      sketch.triangle(173,180,187,191,170,193);
      sketch.ellipse(165,186, 30, 15);
        //interior eye
      sketch.noStroke();
      sketch.fill("white");
      sketch.triangle(175,180,187,191,170,193);
      sketch.noStroke();
      sketch.ellipse(165,186, 30, 15);
      
      //right eye
        //exterior eye
      sketch.stroke("black");
      sketch.strokeWeight(3);
      sketch.noFill();
      sketch.triangle(224,181,212,191,235,193);
      sketch.ellipse(235,186, 30, 15);
        //interior eye
      sketch.noStroke();
      sketch.fill("white");
      sketch.triangle(224,181,212,191,235,193);
      sketch.noStroke();
      sketch.ellipse(235,186, 30, 15);
      
       //pupils colour animation => when the mouse is pressed, the white pupils become red
      sketch.stroke("black");
      sketch.strokeWeight(0.5);
      sketch.fill("#50908a");
       //left eye
      sketch.ellipse(171+((sketch.mouseX-400)/(300/3)), 188+(sketch.mouseY-500)/(500/2), 15, 14);
      //right eye
      sketch.ellipse(235+((sketch.mouseX-400)/(300/3)), 188+((sketch.mouseY-500)/(500/2)), 15, 14);
      //pupils + animation change of colours
      sketch.noStroke();
          if(sketch.mouseIsPressed) {
      sketch.fill("#ff2828");
          } else {
      sketch.fill("white");
        }
    
      //left pupil
      sketch.ellipse(169+((sketch.mouseX-200)/(200/2)), 188+((sketch.mouseY-500)/(500/2)), 5, 5);
      //right pupil
      sketch.ellipse(232+((sketch.mouseX-200)/(200/2)), 188+((sketch.mouseY-500)/(500/2)), 5, 5);
      
    
      
    //necklace
      sketch.noStroke();
      sketch.fill("black");
      sketch.quad(161,310,240,310,240,315,160,315);
      
      
            //bangs part 1
            sketch.noStroke();
            sketch.fill(255);
            
        sketch.beginShape();
            //from right to left
            //triangle
            sketch.vertex(123, 155);
            sketch.vertex(190, 80);
            sketch.vertex(293, 157);
            sketch.endShape();
            
            //bangs part 2
            sketch.fill("#f6cdb6");
            sketch.noStroke();
            sketch.beginShape();
            //first triangle middle
            sketch.vertex(195, 159);
            sketch.vertex(200, 120);
            sketch.vertex(210, 159);
            //2nd triangle right
            sketch.vertex(240, 159);
            sketch.vertex(215, 122);
            sketch.vertex(215, 154);
         sketch.endShape();
      
      
      //clothes
      //front sweatshirt
      sketch.fill("#1dbeaa");
      sketch.stroke("#1dbeaa");
      sketch.strokeWeight(2);

      //collar skin part
      //left part
      sketch.ellipse(185,440,330,230);
      sketch.noStroke();
      sketch.fill("#f6cdb6");
      //right part
      sketch.ellipse(195, 335, 90, 30);

      //front hood
      sketch.fill("#169479");
        //right
        sketch.ellipse(150, 344, 100, 31);
        //left
        sketch.ellipse(236, 344, 90, 30);
        //middle
        sketch.rect(200, 340, 130, 30, 20);

      //lace
      sketch.fill("white");
        //left
        sketch.ellipse(160, 345, 12, 12);
        //right
        sketch.ellipse(230, 345, 12, 12);
        //left
        sketch.rect(160, 370, 10, 55, 20);
        //right
        sketch.rect(230, 370, 10, 55, 20);
     
        
      
                //nose shadow
            sketch.fill("#ce8359");
            sketch.noStroke();
        sketch.beginShape();
            sketch.vertex(200, 230);
            sketch.vertex(200, 210);
            sketch.vertex(215, 230);
        sketch.endShape();
            
            //nose light
            sketch.fill("#f8b38d")
        sketch.beginShape();
            sketch.vertex(185, 230);
            sketch.vertex(200, 210);
            sketch.vertex(200, 230);
        sketch.endShape();
      
      //cheeks
      sketch.fill("#ffb0b0");
      //left cheek
      sketch.ellipse(160,220, 35, 25);
      //right cheek
      sketch.ellipse(240,220, 35, 25);
      
      //lips
      //lower lips colour
      sketch.noStroke();
      sketch.fill("#c25151");
      sketch.ellipse(200, 260, 40, 15);

      //lower lips cover-up
      sketch.fill("#f6cdb6")

      //right
      sketch.ellipse(210,252, 40, 15);
      //left
      sketch.ellipse(190,252, 40, 15);
      
      //upper lips
      //left side
      sketch.fill("#f18888");
    sketch.beginShape();
        sketch.vertex(180, 259);
        sketch.vertex(200, 259);
        sketch.vertex(195, 252);
    sketch.endShape();
      
        //upperlips
        //right side
    sketch.beginShape();
        sketch.vertex(220, 259);
        sketch.vertex(200, 259);
        sketch.vertex(205, 252);
    sketch.endShape();
        
      //eyebrows animation => right eyebrow raise with mouseY
      let topx1 = 155 //black part 
      let bottomx1 = 165 //black part
      let topx2 = 158 //vitiligo part
      let bottomx2 = 168 //vitiligo part
      
      //to restrain the brow, don't let it fo everywhere on the canvas
      let x1 = sketch.constrain(sketch.mouseY - 200, topx1, bottomx1); //black part
      let x2 = sketch.constrain(sketch.mouseY - 200, topx2, bottomx2);//vitiligo part

      //black part
      sketch.fill("black");
      sketch.rect(170, 165,40,4); //left
      sketch.rect(230, x1,40,4); //right
      //vitiligo part
      sketch.fill("white");
      sketch.rect(170,168,40,2); //left
      sketch.rect(230, x2,40,2); //right
      
     
    };
    
    //setgradient function has to be kept separated from draw function
      sketch.setGradient = function(x, y, w, h, c1, c2, axis) {
      sketch.noFill();
         if (axis === X_AXIS) {
        // Left to right gradient
        for (let i = x; i <= x + w; i++) {
          let inter = sketch.map(i, x, x + w, 0, 1);
          let c = sketch.lerpColor(c1, c2, inter);
          sketch.stroke(c);
          sketch.line(i, y, i, y + h);
        }
      }
    }
    });