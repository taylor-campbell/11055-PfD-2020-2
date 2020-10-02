/////////
// 8-Bit Colour Generator App
// Shane Ducksbury - u3113923
// Last modified 30 September 2020
// 
/////////

// Set the canvas width and height for setup
const canvasWidth = 500;
const canvasHeight = 500;

// set the scale size, this is also the pixel size of the rectangles
let scaleSize = 4;
let selectedFillColour;

// variables for use by the application
let useDevPortrait = true; // set to true so that the page always loads something
let useBlankCanvas;
let useImageURL;
let userImageURL;
let importedImage;


// Set the two arrays used to store the rectangle objects
// dev note: These aren't very creative names.
let arraySave = [];
let arrayCopy = [];

// run the setup and draw functions again when changing the mode
const rebuildP5 = () => {
    setup();
    draw();
};

// create a blank drawing canvas if the Draw Your Own button is selected
const createBlankCanvas = () => {
    // create array of rect based on scaleSize which fills the canvas to create the pixel art
    scaleSize = 8;
    for (let y = 0; y < canvasHeight / scaleSize; y++) {
        for (let x = 0; x < canvasWidth / scaleSize; x++){
            
            // Get all the constants
            const rectXPos = x * scaleSize;
            const rectYPos = y * scaleSize;
            const rectWidth = scaleSize;
            const rectHeight = scaleSize;
            const rectFill = [255, 255, 255];

            // generate a rectangle object for the array
            const rectangle = {
                xPos: rectXPos,
                yPos: rectYPos,
                width: rectWidth,
                height: rectHeight,
                fill: rectFill 
            }

            arraySave.push(rectangle);
        }
    }

    // perform a shallow copy to reset the array to white
    arrayCopy = [...arraySave];
};

// Create an 8 bit array of the URL of an image
const createImportedImage = () => {
    // create array of rect based on scaleSize which fills the canvas to create the pixel art
    for (let y = 0; y < importedImage.height / scaleSize; y++) {
        for (let x = 0; x < importedImage.width / scaleSize; x++){
            
            // Note the below works like this
            // (x + y * width) is the math algorithm to populate a screen from an array
            // the importImage function in p5 creates a flat array with each pixel turned into 
            // a red green blue alpha value. The array then populates 
            // [pixel 1 red, pixel 1 green, pixel 1 blue, pixel 1 alpha, pixel 2 red, pixel 2 green, pixel 2 blue, pixel 2 alpha]
            // until the end of the image
            // therefore to get the first index position for each pixel you must times each index position by four
            // Because we are then scaling for the '8-bit', we must * by the scale size
            // we only need to get the pixel values one pixel to populate a rectangle, and then we can skip over the rest to the next
            // set of pixels.
            
            let index = (x + y * importedImage.width) * 4 * scaleSize; 

            // get each of the pixels from the index of the pixel array
            let r = importedImage.pixels[index];
            let g = importedImage.pixels[index + 1];
            let b = importedImage.pixels[index + 2];

            // create local pixel array
            let pixelRGBArray = [r, g, b];
            // create the rgb difference variable to compare if the new difference is lower than the old one
            let savedRGBDifference = 1000;
            // save the index position for use in the fill
            let indexPosition;

            // for loop, to cycle through everything in the rgbArray
            for (let i = 0; i < rgbArray.length; i++) {
                // compare the two rgb colours in colourDistance function
                let rgbDifference = colourDistance(rgbArray[i], pixelRGBArray);
                // if RGB colour distance is smaller than the last one, then overwrite the old savedRGBDifference and indexPosition.
                if (rgbDifference < savedRGBDifference) {
                    savedRGBDifference = rgbDifference;
                    indexPosition = i;
                }
            }
            
            // Get all the constants
            const rectXPos = x * scaleSize;
            const rectYPos = y * scaleSize;
            const rectWidth = scaleSize;
            const rectHeight = scaleSize;
            const rectFill = rgbArray[indexPosition];

            

            // generate a rectangle object for the array
            const rectangle = {
                xPos: rectXPos,
                yPos: rectYPos,
                width: rectWidth,
                height: rectHeight,
                fill: rectFill
            }

            arraySave.push(rectangle);
        }
    }
}

// Writes multiple rectangle objects inside the draw function
const drawImageFromArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        const rectangle = array[i];
        if (rectangle.fill != null) {
            fill(rectangle.fill);
        }
        rect(rectangle.xPos, rectangle.yPos, rectangle.width, rectangle.height);
    }
};

// Draw the dev in p5 on initial page load and if the drawDev button is clicked
const drawDev = () => {
    useBlankCanvas = false;
    useImageURL = false;
    useDevPortrait = true;
    rebuildP5();
};

// Draw a blank canvas in p5 if the draw your own button is clicked
const drawBlankCanvas = () => {
    useDevPortrait = false;
    useImageURL = false;
    useBlankCanvas = true;
    createBlankCanvas();
    rebuildP5();
};

// Draw an image from a URL in p5 if the button is clicked

const drawImageFromURL = () => {
    useDevPortrait = false;
    useBlankCanvas = false;
    useImageURL = true;
    preload();
    rebuildP5();

    // redraw the image after 1sec, as the first loop is too quick
    setTimeout(redraw, 1000);
};

///////////
// functions to execute the actual p5 canvas
///////////


// preload the image if URL is populated
function preload() {
    // load the pixels of the imported image
    if (userImageURL != null) {
        importedImage = loadImage(`${userImageURL}`);
    }
}

// Set up the p5 canvas
function setup() {
    const drawCanvas = createCanvas(canvasWidth, canvasHeight);
    drawCanvas.parent("p5-canvas");    
}

// draw the p5 canvas based on the currently selected mode
function draw() {
    // set some background for if something goes wrong
    background(20);
    fill(80);

    // remove the stroke around the rectangles
    noStroke();
    // Stop the canvas from reloading
    noLoop();

    // create the imported image inline if inserted, as it won't create outside the draw function.
    if (useImageURL) {
        importedImage.loadPixels();
        createImportedImage();
        arrayCopy = [...arraySave];
    }

    // draw all of the rectangles from the generated arrays based on the selected mode

    if (useDevPortrait) {
        drawImageFromArray(meInAnArray);
    } else if (useBlankCanvas) {
        drawImageFromArray(arrayCopy);
    } else if (useImageURL) {
        drawImageFromArray(arrayCopy);
    }

}

///////
// Function to change the canvas based on mouse clicks or drags. For use with the draw your own mode.

function mouseDragged() {
    mouseDraw();
}

function mouseClicked() {
    mouseDraw();
}

const mouseDraw = () => {
    // Dev note: This does work, is incredibly inefficient though, especially at
    // small scale sizes.

    // only execute the change colour function if it is inside the canvas
    if (mouseX > 0 && mouseX < canvasWidth && mouseY > 0 && mouseY < canvasHeight){
        // if the selectedFillColour is undefined then don't do anything.
        if (!selectedFillColour){return;};
        // Generates the X and Y coordinates of the rectangle to change in the array
        let xCoordinate;
        let yCoordinate;
        for (let i = 0; i < arrayCopy.length; i++) {
            const rectangle = arrayCopy[i];
            let nextRectangle = arrayCopy[i + 1];
            
            // Stop the loop if the current iteration is the last.
            if ((i + 1) >= arrayCopy.length){
                xCoordinate = rectangle.xPos;
                break;
            }

            if (mouseX > rectangle.xPos && mouseX < nextRectangle.xPos) {
                xCoordinate = rectangle.xPos;
                break;
                }
            }

        for (let i = 0; i < arrayCopy.length; i++) {
            const rectangle = arrayCopy[i];
            if (xCoordinate === rectangle.xPos && mouseY > rectangle.yPos) {
                yCoordinate = rectangle.yPos;
            }
        }

        for (let i = 0; i < arrayCopy.length; i++) {
            const rectangle = arrayCopy[i];
            if (xCoordinate === rectangle.xPos && yCoordinate === rectangle.yPos) {
                rectangle.fill = selectedFillColour;
            }
        }

        // Redraw based on the new array.
        redraw();
    }   
}
