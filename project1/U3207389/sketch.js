/*U3207389 Rebecca Drew
Self Portrait .js file*/

//defult js setup 
function setup() {
    createCanvas(600, 800);
    background('white');
}

//PROGRAM
//DRAW Self Portrait

function draw() {
    fill('#d40fa2');
    noStroke();
    textSize(18);
    textFont('Helvetica');
    text('Click to blink', 20, 30);
    //Call Draw shadow 
    shadow();
    //Call Draw features
    features();
}


//FUNCTIONS
//Draw shadow
function shadow() {
    //Call draw color1
    color1();
    //Call draw color2
    color2();
}

//Draw features
function features() {
    //Call draw nose
    nose();
    //Call draw eyes
    eyes();
    //Call draw lips
    lips();
    //Call draw chin
    chin();
}


//Draw color1
function color1() {
    fill('#4287f5');
    noStroke();
    //Call draw shape1
    shape1();
    //Call draw shape3
    shape3();
}

//Draw color2
function color2() {
    fill('#d40fa2');
    noStroke();
    //Call draw shape2
    shape2();
    //Call draw shape4
    shape4();
}


//shape functions
//Draw shape1
function shape1() {
    beginShape();
    curveVertex(133, 273);
    curveVertex(176, 237);
    curveVertex(285, 317);
    curveVertex(238, 478);
    curveVertex(203, 486);
    endShape(CLOSE);
}

//Draw shape2
function shape2() {
    beginShape();
    curveVertex(279, 62);
    curveVertex(498, 184);
    curveVertex(464, 275);
    curveVertex(349, 282);
    curveVertex(464, 286);
    curveVertex(519, 322);
    curveVertex(415, 570);
    curveVertex(261, 599);
    curveVertex(310, 548);
    curveVertex(304, 524);
    curveVertex(360, 508);
    curveVertex(237, 508);
    curveVertex(237, 496);
    curveVertex(301, 490);
    curveVertex(310, 496);
    curveVertex(319, 487);
    curveVertex(344, 495);
    curveVertex(344, 451);
    curveVertex(324, 303);
    endShape(CLOSE);
}

//Draw shape3
function shape3() {
    beginShape();
    curveVertex(415, 570);
    curveVertex(382, 755);
    curveVertex(0, 788);
    curveVertex(0, 743);
    curveVertex(188, 724);
    curveVertex(200, 589);
    curveVertex(310, 617);
    endShape(CLOSE);
}

//Draw shape4
function shape4() {
    beginShape();
    curveVertex(197, 745);
    curveVertex(600, 774);
    curveVertex(600, 800);
    curveVertex(593, 800);
    curveVertex(193, 752);
    endShape(CLOSE);
}

//Draw features
//Draw nose
function nose() {
    //Call draw noseR
    noseR();
    //Call draw noseL
    noseL();
}

//Draw eyes
function eyes() {
    if (mouseIsPressed) {
        eyeLClosed();
        eyeRClosed();
    } else {
        //Call draw eyeR
        eyeR();
        //Call draw eyeL
        eyeL();
        //Call draw pupil
        pupil(x = 400, y = 280);
        //Call draw pupil
        pupil(x = 205, y = 280);
    }
}

//Draw chin
function chin() {
    //Call faceArc
    faceArc(x1 = 247, y1 = 599, x2 = 282, y2 = 565, x3 = 340, y3 = 555, x4 = 383, y4 = 590);
}

//Draw noseR
function noseR() {
    //call draw nostril
    nostril(x = 269, y = 444);
}

//Draw noseL
function noseL() {
    //Call faceArc
    faceArc(x1 = 612, y1 = 98, x2 = 357, y2 = 227, x3 = 344, y3 = 442, x4 = 485, y4 = 576);
    //Call draw nostril
    nostril(x = 356, y = 444);
}

//Draw eyeR
function eyeR() {
    //Call draw eyelid
    eyelid(a1 = 295, b1 = 460, a2 = 349, b2 = 281, a3 = 454, b3 = 278, a4 = 537, b4 = 457);
    //Call draw eyelid
    eyelid(a1 = 168, b1 = 78, a2 = 349, b2 = 281, a3 = 454, b3 = 278, a4 = 528, b4 = 154);
    //Call draw eyelash
    eyelash(x1 = 161, y1 = 258, x2 = 166, y2 = 269);
    //Call draw eyelash
    eyelash(x1 = 182, y1 = 261, x2 = 179, y2 = 248);
    //Call draw eyelash
    eyelash(x1 = 201, y1 = 256, x2 = 201, y2 = 245);
    //Call draw eyelash
    eyelash(x1 = 220, y1 = 257, x2 = 223, y2 = 245);
    //Call draw eyelash
    eyelash(x1 = 240, y1 = 263, x2 = 243, y2 = 253);
    //Call draw eyelash
    eyelash(x1 = 254, y1 = 274, x2 = 261, y2 = 263);
    //Call draw eyelash
    eyelash(x1 = 361, y1 = 290, x2 = 359, y2 = 296)
    //Call draw eyelash
    eyelash(x1 = 378, y1 = 298, x2 = 376, y2 = 305)
    //Call draw eyelash
    eyelash(x1 = 401, y1 = 303, x2 = 401, y2 = 310)
    //Call draw eyelash
    eyelash(x1 = 420, y1 = 298, x2 = 422, y2 = 305)
    //Call draw eyelash
    eyelash(x1 = 436, y1 = 290, x2 = 440, y2 = 295)
}

//Draw eyeL
function eyeL() {
    //Call draw eyelid
    eyelid(a1 = 100, b1 = 460, a2 = 154, b2 = 281, a3 = 259, b3 = 278, a4 = 342, b4 = 457);
    //Call draw eyelid
    eyelid(a1 = -27, b1 = 78, a2 = 154, b2 = 281, a3 = 259, b3 = 278, a4 = 333, b4 = 154);
    //Call draw eyelash
    eyelash(x1 = 359, y1 = 272, x2 = 353, y2 = 263);
    //Call draw eyelash
    eyelash(x1 = 374, y1 = 263, x2 = 370, y2 = 253);
    //Call draw eyelash
    eyelash(x1 = 394, y1 = 258, x2 = 394, y2 = 245);
    //Call draw eyelash
    eyelash(x1 = 413, y1 = 256, x2 = 415, y2 = 245);
    //Call draw eyelash
    eyelash(x1 = 431, y1 = 261, x2 = 434, y2 = 250);
    //Call draw eyelash
    eyelash(x1 = 448, y1 = 272, x2 = 452, y2 = 258);
    //Call draw eyelash
    eyelash(x1 = 174, y1 = 293, x2 = 170, y2 = 298)
    //Call draw eyelash
    eyelash(x1 = 191, y1 = 300, x2 = 189, y2 = 307)
    //Call draw eyelash
    eyelash(x1 = 212, y1 = 301, x2 = 212, y2 = 308)
    //Call draw eyelash
    eyelash(x1 = 229, y1 = 296, x2 = 231, y2 = 303)
    //Call draw eyelash
    eyelash(x1 = 240, y1 = 290, x2 = 244, y2 = 296)
}

//Draw eyeRClosed
function eyeRClosed() {
    //Call draw eyelid
    eyelid(a1 = 168, b1 = 78, a2 = 349, b2 = 281, a3 = 454, b3 = 278, a4 = 528, b4 = 154);
    //Call draw eyelash
    eyelash(x1 = 361, y1 = 290, x2 = 359, y2 = 296)
    //Call draw eyelash
    eyelash(x1 = 378, y1 = 298, x2 = 376, y2 = 305)
    //Call draw eyelash
    eyelash(x1 = 401, y1 = 303, x2 = 401, y2 = 310)
    //Call draw eyelash
    eyelash(x1 = 420, y1 = 298, x2 = 422, y2 = 305)
    //Call draw eyelash
    eyelash(x1 = 436, y1 = 290, x2 = 440, y2 = 295)
}

//Draw eyeLClosed
function eyeLClosed() {
    //Call draw eyelid
    eyelid(a1 = -27, b1 = 78, a2 = 154, b2 = 281, a3 = 259, b3 = 278, a4 = 333, b4 = 154);
    //Call draw eyelash
    eyelash(x1 = 174, y1 = 293, x2 = 170, y2 = 298)
    //Call draw eyelash
    eyelash(x1 = 191, y1 = 300, x2 = 189, y2 = 307)
    //Call draw eyelash
    eyelash(x1 = 212, y1 = 301, x2 = 212, y2 = 308)
    //Call draw eyelash
    eyelash(x1 = 229, y1 = 296, x2 = 231, y2 = 303)
    //Call draw eyelash
    eyelash(x1 = 240, y1 = 290, x2 = 244, y2 = 296)
}


//Features functions==
//draw faceArc
function faceArc(x1, y1, x2, y2, x3, y3, x4, y4) {
    noFill();
    stroke('black');
    strokeWeight(4);
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
}

//draw nostril
function nostril() {
    fill('black');
    ellipse(x, y, 19, 4);
}

//Draw lips
function lips() {
    fill('black');
    curve(179, 398, 260, 508, 360, 508, 441, 398);
}

//Draw pupil
function pupil() {
    fill('#69823b');
    stroke('black');
    ellipse(x, y, 42);
    fill('black');
    ellipse(x, y, 21)
}

//Draw eyelid
function eyelid(a1, b1, a2, b2, a3, b3, a4, b4, ) {
    fill('white');
    stroke('black');
    strokeWeight(3);
    curve(a1, b1, a2, b2, a3, b3, a4, b4);
}

//Draw eyelash
function eyelash() {
    stroke('black');
    strokeWeight(3);
    line(x1, y1, x2, y2)
}
