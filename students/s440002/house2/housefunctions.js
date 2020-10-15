// Function drawAHouse
function drawAHouse(cw, ch) {

    var wallscount = 8;
    // CALL drawWalls
    drawWalls(cw, ch, wallscount);
    // CALL drawRoof
    drawRoof();
    // CALL drawOpenings
    drawOpenings();

}

// function drawWalls
function drawWalls(cw, ch, numofwalls) {

    wheight = (ch-200)/numofwalls;

    for(let i = 1; i < numofwalls+1;i++){
        fill(50 + 20*i);
        rect(100, ch-wheight*i, cw-200, wheight);
    }

}

// function drawRoof
function drawRoof() {

}

// Function drawOpenings
// SET variables width, height, colour
// ? Leftpos & toppos ?
// CALL drawWindows (leftpos, toppos, width, height, colour)
// CALL drawDoors

function drawOpenings() {

}

