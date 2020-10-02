/* This file contains the core logic for Project 1 Self Portrait
Olly Hills 29th of September 2020 */

// START Program

  // (A1.1) Create Canvas
  function setup() {
      createCanvas(400, 400);
    //SET random background colour
    background("#"+randomColor);
    }
    
  // CREATE Portrait Elements
    // See portraitElements.js

  // CREATE Variables
    // Base Index
    // this increase by 1 with each mouse click, until it is the same at the length of the Element array.
    itemsDrawn = 0;

    // Element Array
    // this is used each time the mouse is click. With each click it will call the next function and all previous functions in the array.
    itemstToBeDrawn = [head, ears, hat, beard, eyes, nose, mouth,];

    // Calculate random color code
    // this calculates a random number and converts it to a base 16 string. This results in a hexadecimal number that can use as a colour code if the "#" id placed before it.
    var randomColor = Math.floor(Math.random()*16777215).toString(16);



  // DRAW functions
  // this gives us an initial state of the canvas befor any measured interactin occures.
  function draw() {

    // this is text on the display to tell users what to do.
    if (itemsDrawn === 0) {
      fill(0)
      rect(50, 200, 300, 100, 16)
      textSize(24);
      textAlign(CENTER, CENTER);
      fill(255);
      text("Click anywhere to begin drawing my portrait" , 50, 200 , 300, 100);
    }
  // DRAW END
  }

  

  // Mouse Click EVENT Occurs
  // Click the mouse to draw each element of the portrait and change the background colour.
  function mouseClicked(){
    // Change Background.
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    background("#"+randomColor);

    // BEGIN Draw items loop.
    if (itemsDrawn < itemstToBeDrawn.length) {
      //  Draw new item and all previous items.
        for (let i = -1; i < itemsDrawn; i++) {
          itemstToBeDrawn[i+1]();
        }
      // Increase itemsDrawn by 1 and log itemsDrawn
      itemsDrawn++
      console.log("you have drawn " + itemsDrawn + " items");

    }else{
      // Draw all items
      for (let i = 0; i < itemsDrawn; i++) {
        itemstToBeDrawn[i]();
      }
      textSize(20);
      textAlign(CENTER, CENTER);
      fill(0);
      text("Thanks for drawing my face!" , 50, 115 , 300, 50);
      // Log process complete.
      console.log("Thanks for drawing my face!")
    }

  // End Mouse click actions
  }
// END Program