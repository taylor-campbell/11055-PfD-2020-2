// P5 standard run once function
function setup() {
    createCanvas(400, 600);
}
  
// P5 standard looping function
function draw() {

    //Call Draw House Function(numbers of walls, type of roof, number windows, number of doors, overall colour)

    drawHouse(2,0,3,0,'blue');

    //background('green');
    //rect(mouseX, mouseY, 200, 400);
    
    

}

// START Draw House Function
// Accept (numbers of walls, type of roof, number windows, number of doors, overall colour)
// Call Draw Walls Function
// Call Draw Roof Function
// Call Draw Openings Function

function drawHouse(walls, roof, windows, doors, overallcolour) {

    // holder for walls
    var wallleft = 50;
    var walltop = 100;
    var wallwidth = 300;
    var wallheight = 200;
    var wallcolour = overallcolour;
    for(let i = 1; i < walls+1;i++) {
        drawWalls(wallleft+50*i, walltop+50*i, wallwidth, wallheight, wallcolour);
    }

    // holder for roof


    // holder openings
    drawOpenings(windows, doors, wallleft, walltop);


}

// DRAW Walls

function drawWalls(posleft, postop, width, height, colour) {
    drawWindows(posleft, postop, width, height, colour);
}


// START Draw Openings Function
// Call Draw Windows(100, 150, 20, 100, Blue) Function
// Call Draw Windows(100, 150, 200, 100, Red) Function
// Call Draw Doors(1) Function

function drawOpenings(windows, doors, wallposleft, wallpostop) {

    // all windows are standard size and colour
    // width = 50, height, 30, colour = red
    const wwidth = 50;
    const wheight = 30;
    const wcolour = 'red';
    
    //left window
    for (let i=1;i < windows + 1 ;i++) {
        drawWindows(wallposleft + 60*i, wallpostop + 40, wwidth, wheight, wcolour);
    }
    // holder for window 2
    // right window


    // holder for door

}


// Start draw windows
// Variables: Height, Width, PosLeft, PosTop, Colour
// Call P5 fill function for colour first (colour)
// Call P5 rectangle drawing function (Height, Width, PosLeft, PosTop)

function drawWindows(posleft, postop, width, height, colour) {

    fill(colour);
    rect(posleft, postop, width, height);

}