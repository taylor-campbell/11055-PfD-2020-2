/*  Programming for Design
    Project 1 - Self Portrait
    Keir Herbert (u3211239)
    September 2020
*/

//  Declare the constants, variables, and set up important environmental factors.

//  This constant refers to the size of the original pixel matrix from which coordinates were sourced.

const matrix = 200;

/*  The scale_factor variable adjusts the size of the canvas relative to the original pixel matrix.

    Examine the screen resolution and determine the scale_factor. This is necessary because on small,
    high pixel density screens like those found on laptops, newer versions of Windows apply scaling by
    default which has the unfortunate effect of making a drawing canvas run off the screen.
    The scale_factor variable will conpensate for this and also ensure that the program is still
    useable on genuinely low resolution displays.
*/
if (screen.height < 720) {          // Catch anything super low-res.
    scale_factor = 2;
}
else if (screen.height < 900) {     // Displays that have been subject to Windows scaling.
    scale_factor = 3;
}
else if (screen.height < 1080) {    // Less than full HD.
    scale_factor = 4;
}
else if (screen.height < 1440) {    // Less than QHD.
    scale_factor = 5;
}
else {
    scale_factor = 6;               // For QHD, 4K, and beyond.
}

//  Set up an appropriately sized canvas on which to plot the image and place it in position.

function setup() {
    canvas = createCanvas(matrix * scale_factor, matrix * scale_factor);
    canvas.position(150, 75, 'fixed');
    textSize(15);                   // Set the text size for the slider control labels.
    noStroke();                     // Turn off the stroke so that we don't see the circle outlines.

/*  Create the five slider controls. Three are for the colour channels, a fourth allows for
    adjustment of the maximum circle diameter fed into the randomiser, and the fifth controls the
    frame rate (how many times the image is drawn each second).
    Set the respective widths of each slider control and position them on the left side of the
    screen.
*/
    red_sldr = createSlider(0, 255, 63);
    red_sldr.style('width', '140px');
    red_sldr.position(6, 210);
    green_sldr = createSlider(0, 255, 81);
    green_sldr.style('width', '140px');
    green_sldr.position(6, 240);
    blue_sldr = createSlider(0, 255, 181);
    blue_sldr.style('width', '140px');
    blue_sldr.position(6, 270);
    diameter_sldr = createSlider(2, 48, 8);
    diameter_sldr.style('width', '140px');
    diameter_sldr.position(6, 300);
    framerate_sldr = createSlider(1, 24, 5);
    framerate_sldr.style('width', '140px');
    framerate_sldr.position(6, 330);
}

/*  This is the main draw function loop which runs until our Sun collapses into itself, or until you
    close the web page ... whichever comes first.
*/
function draw() {

//  The screen is cleared before each new plot cycle is commenced.

    clear();

//  Set the frame rate according to the slider control value.

    frameRate(framerate_sldr.value());

/*  Set the fill colour to black so that the slider control labels are always legible and then display
    the slider control labels.
*/
    fill(0, 0, 0);
    text(' red', 0, 145);
    text(' green', 0, 175);
    text(' blue', 0, 205);
    text(' circle diameter', 0, 235);
    text(' frame rate', 0, 265);

//  Revert the fill colour to the values specified by the slider controls.    

    fill(red_sldr.value(), green_sldr.value(), blue_sldr.value());

/*  This code reads the array that was dimensioned in "Coordinates.js".
    It goes row by row and retrieves the x and y values before applying the scale_factor multiplier,
    in order to space them out proportionally. Finally, they're passed to the circle function to be
    drawn on the canvas.
*/
    for (let row = 0; row < coordinates.length; row++) {
        x = (coordinates[row] [0]) * scale_factor;
        y = (coordinates[row] [1]) * scale_factor;

/*  The diameter of the circle is random-ish. It uses the diameter value from the slider control as a
    maximum and has a hard-coded minimum value of 2. Inside that limited range it chooses 'randomly'.
    The variation in circle diameter creates the interesting motion effect.
*/
        diameter = Math.floor(Math.random() * diameter_sldr.value()) + 2;

//  Voila, a circle. 1 down, 10059 to go before doing it all over again!

        circle(x, y, diameter);
    }
    
}