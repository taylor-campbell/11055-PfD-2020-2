//P5 standard run once function 
function setup() {
    createCanvas(400, 600);
}
  
//P5 standard looping function
function draw() { 
   
    //Call draw house function [numbers of walls, type of roof, number windows, number of doors, overall colour of house]

    drawHouse(1,0,2,0,'purple');
    

}


// START Draw House Function
// Accept [number of walls, type of roof, number of windows, number of doors, overall colour of house]
// Call draw house function
// Call draw walls function
// Call draw ceiling function
// Call draw openings function
// END

function drawHouse(walls, roof, windows, doors, overallcolour) {

    // holder for walls
    var wallleft = 50
    var walltop = 100
    var wallwidth = 300
    var wallheight = 200
    var wallcolour = 'purple'
    for(let i = 0; i < walls;i++) {
    drawWalls(wallleft, walltop, wallwidth, wallheight, wallcolour);
    }

    // holder for roof


    // holder openings
    drawOpenings(wallleft, walltop);


}

// DRAW Walls

function drawWalls(posleft, postop, width, height, colour) {
    drawWindows(posleft, postop, width, height, colour);
}

// START Draw House Function
// Call Draw Doors[1] Function
// Call Draw Windows[100, 150, 20, 100, Grey] Function
// Call Draw Windows[100, 150, 200, 100, Grey] Function
// Call Draw Windows[200, 250, 200, 100, Blue] Function

function drawOpenings(windows, doors, wallposleft, wallpostop){

    //all windows are standard size and colour
    //width = 50, height = 30, colour = grey
    const wwidth = 50
    const wheight = 30
    const wcolour = 'grey';

    //left window
    for(let i=1;i < window;i++) {
    drawWindows(wallposleft + 60, wallpostop + 40, wwidth, wheight, wcolour)
    }
    // holder for window 3
    // right window


    //holder for door

}

// Start draw windows 
// Variables: Height, Width, Posleft, PosTop, Colour
// Call P5 fill function for colour first [colour]
// Call P5 rectangle drawing function [height, width, posleft, postop]

function drawWindows(posleft, postop, width, height, colour) {

    fill(colour);
    rect(posleft, postop, width, height);

}