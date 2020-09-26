/* 
    This document is the javascript that will sit inside the html file for Project 1.
*/

//Create variables for each shapes colour
c_sky       ='';
c_sun       ='';
c_mountain  ='';
c_tree      ='';
c_msnow     ='';
c_tsnow     ='';

//create variable that is the current 'season'


currentSeason ='winter';
selectSeason(currentSeason);

function selectSeason(season){
    if (season === 'summer'){
            c_sky       ='#62B7D6';
            c_sun       ='#FFE23C';
            c_mountain  ='#A3CF67';
            c_msnow     ='#A3CF67';
            c_tsnow     ='#09552B';
    } else {
            c_sky       ='#90C3D9';
            c_sun       ='#FFD98E';
            c_mountain  ='#9A7B63';
            c_msnow     ='#FFFFFF';
            c_tsnow     ='#FFFFFF';
    }
}

console.log("c_sky:" + c_sun); 



// CREATE Canvas
function setup() {
    createCanvas(1255,962);
    noStroke();
}

function draw() {
    // Create background that is the colour of the sky
    background(c_sky);

    // Create a circle for the sun
    fill(c_sun);
    ellipse(1150,100,150);
    
    // Create two triangle for the background mountains (topx, topy, leftx, lefty, rightx, righty)
    fill(c_mountain);
    triangle(738,24,295,962,1181,962);
    triangle(123,110,-320,1048,566,1048);

    // Create three triangles for the tree leaves (topx, topy, leftx, lefty, rightx, righty)
    fill('#09552B');
    triangle(239,490,169,586,309,586);
    triangle(239,530,149,646,329,646);
    triangle(239,590,129,706,349,706);

    // Create tree trunk
    fill('#623F21');
    quad(231,706,247,706,247,782,231,782);

    // Create snow triangles for snow on the mountain
    fill(c_msnow);
    triangle(738,24,667,175,809,175);
    triangle(123,110,52,261,194,261);

    // Create a snow triangle for snow on the tree
    fill(c_tsnow);
    triangle(239,490,184,567,294,567);

    // Create two triangles for the foreground
    fill('#000000');
    triangle(1255,337,448,962,1255,962);
    triangle(1255,541,-568,962,1255,962);

    // Create the hiker
    // Hiker head
    circle(610,568,30);
    // Hiker body
    ellipse(607,612,30,60);
    // Hiker arms
    push();
        translate(625,593);
        rotate(radians(43));
        fill('#000000');
        noStroke();
        ellipse(10,10,52,8);
    pop();
    push();
        translate(620,579);
        rotate(radians(10));
        fill('#000000');
        noStroke();
        ellipse(10,10,52,8);
    pop();
    // Hiker legs
    push();
        translate(608,650);
        rotate(radians(106));
        fill('#000000');
        noStroke();
        ellipse(10,10,100,10);
    pop();
    push();
        translate(628,630);
        rotate(radians(64));
        fill('#000000');
        noStroke();
        ellipse(10,10,100,10);
    pop();
    // Hiker pack
    push();
        translate(573,573);
        rotate(radians(10));
        fill('#000000');
        noStroke();
        rect(0,0,30,60,10);
    pop();
}



// SET stroke(nostroke)
// SET fill(#000000)
// SET strokeweight
// 	CREATE circle
// SET size = horizontal fortieth, vertical eighth
// SET location = horizontal centre, vertical centrebottom
// CREATE ellipse
// SET size = horizontal fortieth, vertical eighth
// SET location = horizontal centre, vertical centrebottom
// 	CREATE ellipse
// SET size = horizontal fortieth, vertical eighth
// SET location = horizontal centre, vertical centrebottom
// 	CREATE ellipse
// SET size = horizontal fortieth, vertical eighth
// SET location = horizontal centre, vertical centrebottom
// 	CREATE ellipse
// SET size = horizontal fortieth, vertical eighth
// SET location = horizontal centre, vertical centrebottom
// 	CREATE radius rectangle 
// SET size = horizontal fortieth, vertical eighth
// SET location = horizontal centre, vertical centrebottom
// 	CREATE line
// 		SET location = horizontal centre, vertical centrebottom
// CREATE line
// 		SET location = horizontal centre, vertical centrebottom



// FUNCTION mousePressed
// 	IF background = summer
// 		background = winter
// 	ELSE background = summer

// FUNCTION