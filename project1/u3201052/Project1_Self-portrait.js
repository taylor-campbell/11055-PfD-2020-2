//11055 Programming For Design
//Project 1
//Zanya Nadelle Bendebel (u3201052)
//September 2020

//SELF-PORTRAIT

//P5 standard run once function 
function setup() {
    // CALL Canvas(width = 400, height = 500)
    createCanvas(400, 500);
}

function draw() {
    background(199,255,215);//#C7FFD7 color background
    strokeWeight(0);//no lines/strokes across all portrait pieces

    // Function drawHead

    // SET variables width, height, colour
    
    // ?leftpos & toppos?
    
    // CALL drawHair(back) function (leftpos, toppos, width, height, colour)
    // Accept variables: leftpos, toppos, width, height, colour
    // CALL (fillcolour = dark brown)
    fill(15, 10, 3)
    // CALL rect(leftpos = 50, toppos = 196, width = 275, height = 20)
    rect(50, 196, 300, 275, 20)
    // CALL (fillcolour = dark brown)
    fill(15, 10, 3);
    // CALL ellipse(leftpos = 200, toppos = 230, width = 302, height = 300)
    ellipse(200, 230, 302, 300);
    

    // CALL drawNeck
    // CALL (fillcolour = skin colour)
    fill(217, 168, 113)
    // CALL rect(leftpos = 175, toppos = 350, width = 55, height = 55)
    rect(175, 350, 55, 55)//rectangle neck
    // CALL (fillcolour = neck shadow colour)
    fill(168, 128, 81)
    // CALL rect(leftpos = 275, toppos = 350, width = 55, height = 25)
    rect(175, 350, 55, 25)


    // CALL drawFaceShape

    // CALL (fillcolour = skin colour)
    let c = color(217, 168, 113);
    fill(c);
    noStroke();//no lines
    //CALL ellipse(leftpos = 200, toppos = 250, width = 240, height = 230)
    ellipse(200, 250, 240, 230)


    // CALL drawEyes

    //Right eye
    // CALL (fillcolour = white)
    fill(255)
    //CALL arc(leftpos = 265, toppos = 265, width = 80, height = 80, stop = 0, [mode] = PI)
    arc(265, 265, 80, 80, 0, PI);//eye (semicircle)
    // CALL (fillcolour = brown)
    fill(133, 93, 24)//brown coloured eye
    //CALL arc(leftpos = 265, toppos = 265, width = 70, height = 70, stop = 0, [mode] = PI)
    arc(265, 265, 70, 70, 0, PI);//semicircle eye shape 
    // CALL (fillcolour = black)
    fill(0)
    //CALL arc(leftpos = 265, toppos = 265, width = 40, height = 50, stop = 0, [mode] = PI)
    arc(265, 265, 40, 50, 0, PI)//pupil (semicircle)
    // CALL (fillcolour = white)
    fill(255)
    //CALL arc(leftpos = 285, toppos = 265, width = 20, height = 20, stop = 0, [mode] = PI)
    arc(285, 265, 20, 20, 0, PI)//light reflecting eye (semicircle)

    //Left eye
    // CALL (fillcolour = white)
    fill(255)
    //CALL arc(leftpos = 140, toppos = 265, width = 80, height = 80, stop = 0, [mode] = PI)
    arc(140, 265, 80, 80, 0, PI);//eye (semicircle)
    // CALL (fillcolour = brown)
    fill(133, 93, 24)//brown coloured eye
    //CALL arc(leftpos = 140, toppos = 265, width = 70, height = 70, stop = 0, [mode] = PI)
    arc(140, 265, 70, 70, 0, PI);//semicircle eye shape 
    // CALL (fillcolour = black)
    fill(0)
    //CALL arc(leftpos = 140, toppos = 265, width = 40, height = 50, stop = 0, [mode] = PI)
    arc(140, 265, 40, 50, 0, PI)//pupil (semicircle)
    // CALL (fillcolour = white)
    fill(255)
    //CALL arc(leftpos = 160, toppos = 265, width = 20, height = 20, stop = 0, [mode] = PI)
    arc(160, 265, 20, 20, 0, PI)//light reflecting eye (semicircle)


    // CALL drawMouth

    //smile
    // CALL (fillcolour = white)
    fill(255)
    //CALL arc(leftpos = 200, toppos = 325, width = 40, height = 13, stop = 0, [mode] = PI)
    arc(200, 325, 40, 13, 0, PI)//teeth


    // CALL drawEyebrows
    
    //Right eyebrow
    // CALL (fillcolour = dark brown)
    fill(15, 10, 3);
    // CALL rect(leftpos = 220, toppos = 250, width = 75, height = 10)
	rect(220, 250, 75, 10);//rectangle eyebrow

    //Left eyebrow
    // CALL (fillcolour = dark brown)
    fill(15, 10, 3)
    // CALL rect(leftpos = 15, toppos = 250, width = 75, height = 10)
	rect(110, 250, 75, 10);//rectangle eyebrow


    // CALL drawHair(front)
    
    //Fringe
    // CALL (fillcolour = dark brown)
    fill(15, 10, 3)//dark brown hair colour
    // CALL rect(leftpos = 70, toppos = 140, width = 260, height = 20, detail = 20)
    rect(70, 140, 260, 105, 20);
    // CALL (fillcolour = dark brown)
    fill(15, 10, 3)//dark brown hair colour
    //CALL arc(leftpos = 20, toppos = 140, width = 120, height = 20)
    ellipse(200, 140, 120, 20);//semicircle shape (fringe) to cover empty spot on head 
    

    // Function drawBody
    // SET variables width, height, colour
    // ?leftpos & toppos?


    // CALL drawUpperbody function (leftpos, toppos, width, height, colour)
    // CALL (fillcolour = purple)
    fill(212, 182, 252)
    // CALL rect(leftpos = 70, toppos = 410, width = 260, height = 120, detail = 40)
    rect(70, 410, 260, 120, 40);//clothing
    // CALL (fillcolour = purple)
    fill(202, 140, 222)
    // CALL rect(leftpos = 161, toppos = 387, width = 80, height = 40, detail = 10)
    rect(161, 387, 80, 40, 10)//sweater collar

    // CALL drawLeftarm function
    // CALL (fillcolour = skin colour)
    fill(217, 168, 113)
    // CALL rect(leftpos = 30, toppos = 460, width = 50, height = 70)
    rect(30, 460, 50, 70)//left arm
    
    // CALL drawRightarm function
    // CALL (fillcolour = skin colour)
    fill(217, 168, 113)
    // CALL rect(leftpos = 315, toppos = 460, width = 50, height = 70)
    rect(315, 460, 50, 70)//right arm

    // CALL drawLeftshoulder function
    // CALL (fillcolour = purple)
    fill(202, 140, 222)
    // CALL rect(top-left = 30, top-right = 15, bottom-right = 10, bottom-left = 8)
    //a rectangle with rounded corners having the following radii: top-left = 30, top-right = 15, bottom-right = 10, bottom-left = 8.
    rect(20, 400, 75, 65, 30, 15, 10, 8);//Left sleeve
    // circle(60, 430, 90)//Left sleeve

    // CALL drawRightshoulder function
    // CALL (fillcolour = purple)
    fill(202, 140, 222)
    // CALL rect(top-left = 15, top-right = 30, bottom-right = 8, bottom-left = 10)
    //a rectangle with rounded corners having the following radii: top-left = 15, top-right = 30, bottom-right = 8, bottom-left = 10.
    rect(300, 400, 75, 65, 15, 30, 8, 10);//Left sleeve
    // circle(340, 430, 90)//Right sleeve


    // Function drawTitle
    // SET variables sizze, weight, style
    // ?leftpos & toppos?


    //Heading
    // CALL (fillcolour = purple)
    fill(202, 140, 222)
    // CALL textSIZE(theSize = 28)
    textSize(28);
    // CALL strokeWeight(theWeight = 0.5)
    strokeWeight(0.5);
    // CALL textStyle(theStyle = bold text)
    textStyle(BOLD);

    // CALL line(leftpos, toppos, width, height)
    line(0, 12, width, 12);
    // CALL textAlignment(theAlignment = center top)
    textAlign(CENTER, TOP);
    // CALL text('[words]' = PROJECT 1, leftpos = 0, toppos = 16, width)
    text('PROJECT 1', 0, 16, width);

    //Subtitle
    // CALL (fillcolour = dark brown)
    fill(15, 10, 3)
    // CALL textSIZE(theSize = 12)
    textSize(12);
    // CALL strokeWeight(theWeight = 0.5)
    strokeWeight(0.5);
    // CALL textStyle(theStyle = normal text)
    textStyle(NORMAL);

    // CALL line(leftpos, toppos, width, height)
    line(0, 24, width, 24);
    // CALL textAlignment(theAlignment = center top)
    textAlign(CENTER, TOP);
    // CALL text('[words]' = 11044 PROGRAMMING FOR DESIGN, leftpos = 0, toppos = 48, width)
    text('11044 PROGRAMMING FOR DESIGN', 0, 48, width);

    //Text
    // CALL (fillcolour = purple)
    fill(202, 140, 222)
    // CALL textSIZE(theSize = 32)
    textSize(32);
    // CALL strokeWeight(theWeight = 0.5)
    strokeWeight(0.5);
    // CALL textStyle(theStyle = normal text)
    textStyle(NORMAL); 

    // CALL line(leftpos, toppos, width, height)
    line(0, 24, width, 24);
    // CALL textAlignment(theAlignment = center top)
    textAlign(CENTER, TOP);
    // CALL text('[words]' = student number U3201052, leftpos = 0, toppos = 450, width)
    text('U3201052', 0, 450, width);

}

var message = "Hello there! Click ok to proceed to my portrait :)"; //Welcome popup message

/* Please create comments for your algorithm from last weeks exercise
in a script so that it is ready to create the program */

// this command will write the message into a popup in your browser
window.alert(message);