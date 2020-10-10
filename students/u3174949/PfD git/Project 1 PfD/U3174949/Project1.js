const canvaswidth = 600;
const canvasheight = 600;

function setup() {
    //run once
    createCanvas (canvaswidth, canvasheight);
    background('teal');

}

function draw() {
    var xpos = 244, ypos = 344, diameter = 100; 
    drawASelfPortrait(xpos, ypos, diameter);

}

