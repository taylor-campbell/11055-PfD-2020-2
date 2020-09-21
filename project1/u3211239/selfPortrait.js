/*  Programming for Design
    Project 1 - Self Portrait
    Keir Herbert (u3211239)
    September 2020
*/

//  Declare the constants, variables, and set up important environmental factors.

//  This constant refers to the size of the original pixel matrix from which coordinates were sourced.
const matrix = 200;

//  This constant dictates how much clearance the mouse cursor should be afforded by the drawing.
const mouseClearance = 25;

/*  The scaleFactor variable adjusts the size of the canvas relative to the original pixel matrix.

    Examine the screen resolution and determine the scaleFactor. This is necessary because on small,
    high pixel density screens like those found on laptops, newer versions of Windows apply scaling by
    default which has the unfortunate effect of making a drawing canvas run off the screen.
    The scaleFactor variable will conpensate for this and also ensure that the program is still
    useable on genuinely low resolution displays.
*/
if (screen.height < 720) {          // Catch anything super low-res.
    scaleFactor = 2;
}
else if (screen.height < 900) {     // Displays that have been subject to Windows scaling.
    scaleFactor = 3;
}
else if (screen.height < 1080) {    // Less than full HD.
    scaleFactor = 4;
}
else if (screen.height < 1440) {    // Less than QHD.
    scaleFactor = 5;
}
else {
    scaleFactor = 6;               // For QHD, 4K, and beyond.
}

//  Set up an appropriately sized canvas on which to plot the image and place it in position.
function setup() {
    canvas = createCanvas(matrix * scaleFactor, matrix * scaleFactor);
    canvas.position(150, 75, 'fixed');

// Turn off the stroke so that we don't see the circle outlines.
    noStroke();

/*  Create the slider controls. Three are for the colour channels, a fourth allows for adjustment of
    the maximum circle diameter, a fifth slider controls the maximum triangle height, and the sixth
    adjusts the frame rate (how many times the image is drawn each second).
    Set the respective widths of each slider control and position them on the left side of the
    screen.
*/
    redSlider = createSlider(0, 255, 63);
    redSlider.style('width', '140px');
    redSlider.position(8, 255);
    greenSlider = createSlider(0, 255, 81);
    greenSlider.style('width', '140px');
    greenSlider.position(8, 292);
    blueSlider = createSlider(0, 255, 181);
    blueSlider.style('width', '140px');
    blueSlider.position(8, 329);
    heightSlider = createSlider(1, 48, 12);
    heightSlider.style('width', '140px');
    heightSlider.position(8, 366);
    diameterSlider = createSlider(2, 48, 8);
    diameterSlider.style('width', '140px');
    diameterSlider.position(8, 366);
    framerateSlider = createSlider(1, 24, 5);
    framerateSlider.style('width', '140px');
    framerateSlider.position(8, 403);

//  Create and position the radio buttons which allow selection of the shape geometry.
    shapeSelector = createRadio();
    shapeSelector.option(0, ' triangular');
    shapeSelector.option(1, ' circular');
    shapeSelector.position(24, 440);
    shapeSelector.style('width', '100px');
    shapeSelector.selected('0');
}

/*  This is the main draw function loop which runs until our Sun collapses into itself, or until you
    close the web page ... whichever comes first.
*/
function draw() {

//  The screen is cleared before each new plot cycle is commenced.
    clear();

//  Set the frame rate according to the slider control value.
    frameRate(framerateSlider.value());

//  Set the fill colour to the values specified by the slider controls.    
    fill(redSlider.value(), greenSlider.value(), blueSlider.value());

/*  This code reads the array that was dimensioned in "Coordinates.js".
    It goes row by row and retrieves the x and y values before applying the scaleFactor multiplier,
    in order to space them out proportionally. Finally, they're passed to the circle function to be
    drawn on the canvas.
*/
    for (let row = 0; row < coordinates.length; row++) {
        x = (coordinates[row] [0]) * scaleFactor;
        y = (coordinates[row] [1]) * scaleFactor;

/*  The diameter of the circle is random-ish. It uses the diameter value from the slider control as a
    maximum and has a hard-coded minimum value of 2. Inside that limited range it chooses 'randomly'.
    The variation in circle diameter creates the interesting motion effect.
*/
        diameter = Math.floor(Math.random() * diameterSlider.value()) + 2;
        height = Math.floor(Math.random() * heightSlider.value()) + 2;

//  Call my calculateDistance function to see if the mouse cursor is close to the drawing action.
        distance = calculateDistance(x, y, mouseX, mouseY);

        if (distance > mouseClearance) {
            switch(shapeSelector.value()) {
                case '0':
                    diameterSlider.hide();
                    heightSlider.show()
                    createTriangle(x, y, height);
                    break;
                case '1':
                    heightSlider.hide();
                    diameterSlider.show();
                    circle(x, y, diameter);
                    break;
            }
        }
        else {
//            createTriangle(x, y, height);
//            circle(x, y, diameter);
        }
    }
}