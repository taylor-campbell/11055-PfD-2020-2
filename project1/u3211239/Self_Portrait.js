/*  Programming for Design
    Project 1 - Self Portrait
    Keir Herbert (u3211239)
    September 2020
*/

//  Declare the constants and variables.

// This constant refers to the size of the original pixel matrix.

const matrix = 200;

//  The scale factor adjusts the size of the plot relative to the original pixel matrix.

var scale_factor = 5;

/*  Set up an appropriately sized canvas on which to plot the image.
    Reduce the framerate down from the default in order to keep the CPU usage sensible.
    Set the text size for the slider control labels.
    Turn off the stroke so that we can't see the circle outlines.
*/
function setup() {
    createCanvas(matrix * scale_factor, matrix * scale_factor);
    frameRate(5);
    textSize(15);
    noStroke();

/*  Create the four slider controls. Three are for the colour channels and the fourth allows
    for adjustment of the maximum circle diameter fed into the randomiser.
    Set the respective widths of each slider control and position them on the left side of the
    screen.
*/
    r_slider = createSlider(0, 255, 63);
    r_slider.style('width', '100px');
    r_slider.position(6, 210);
    g_slider = createSlider(0, 255, 81);
    g_slider.style('width', '100px');
    g_slider.position(6, 240);
    b_slider = createSlider(0, 255, 181);
    b_slider.style('width', '100px');
    b_slider.position(6, 270);
    d_slider = createSlider(2, 48, 10);
    d_slider.style('width', '100px');
    d_slider.position(6, 300);
}

/*  This is the main draw function loop which runs until our Sun collapses into itself, or until you
    close the web page ... whichever comes first.
*/
function draw() {

//  The screen is cleared before each new plot cycle is commenced.

    clear();

//  Grab the values from the colour channel slider controls in case they've been adjusted.

    var r = r_slider.value();
    var g = g_slider.value();
    var b = b_slider.value();
    
/*  Set the fill colour to black so that the slider control labels are always legible and then display
    the slider control labels.
*/
    fill(0, 0, 0);
    text(' red', (r_slider.x + r_slider.width), 17);
    text(' green', (g_slider.x + g_slider.width), 47);
    text(' blue', (b_slider.x + b_slider.width), 77);
    text(' diameter', (d_slider.x + d_slider.width), 107);

//  Return the fill colour to the values specified by the slider controls ready for the circle plot.    

    fill(r, g, b);

/*  This code reads the array that was populated in "Coordinates.js".
    It goes row by row and retrieves the x and y values before applying the scale_factor multiplier
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
        diameter = Math.floor(Math.random() * d_slider.value()) + 2;

//  Voila, a circle. 1 down, 10,059 to go before doing it all again!

        circle(x, y, diameter);
    }
    
}