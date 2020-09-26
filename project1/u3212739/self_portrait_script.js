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

//create x and y coordinate variables for the hiker
x = 600;
y = 655;

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
    triangle(239,540,169,636,309,636);
    triangle(239,580,149,696,329,696);
    triangle(239,640,129,756,349,756);

    // Create tree trunk
    fill('#623F21');
    quad(231,756,247,756,247,832,231,832);

    // Create snow triangles for snow on the mountain
    fill(c_msnow);
    triangle(738,24,667,175,809,175);
    triangle(123,110,52,261,194,261);

    // Create a snow triangle for snow on the tree
    fill(c_tsnow);
    triangle(239,540,184,617,294,617);

    // Create two triangles for the foreground
    fill('#000000');
    triangle(1255,500,448,962,1255,962);
    triangle(1255,620,-568,962,1255,962);

    // Create the hiker
    // Hiker head
    circle(x+3,y-44,30);
    // Hiker body
    ellipse(x,y,30,60);
    // Hiker arms
    push();
        translate(x+18,y-19);
        rotate(radians(43));
        fill('#000000');
        noStroke();
        ellipse(10,10,52,8);
    pop();
    push();
        translate(x+13,y-33);
        rotate(radians(10));
        fill('#000000');
        noStroke();
        ellipse(10,10,52,8);
    pop();
    // Hiker legs
    push();
        translate(x+1,y+38);
        rotate(radians(106));
        fill('#000000');
        noStroke();
        ellipse(10,10,100,10);
    pop();
    push();
        translate(x+21,y+18);
        rotate(radians(64));
        fill('#000000');
        noStroke();
        ellipse(10,10,100,10);
    pop();
    // Hiker pack
    push();
        translate(x-34,y-39);
        rotate(radians(10));
        fill('#000000');
        noStroke();
        rect(0,0,30,60,10);
    pop();
    // Hiker poles
    push();
        translate(x+40,y-18);
        rotate(radians(15));
        fill('#000000');
        noStroke();
        rect(0,0,2,85,);
    pop();
    push();
        translate(x+30,y+10);
        rotate(radians(20));
        fill('#000000');
        noStroke();
        rect(0,0,2,85,);
    pop();

    //x = mouseX;
    //y = mouseY;


}
    function mouseClicked() {
        if (currentSeason === 'summer') {
            selectSeason('winter');
        } else {
            selectSeason('summer');
        }
    }
    function mouseClicked() {
        if (currentSeason === 'winter') {
            selectSeason('summer');
        } else {
            selectSeason('winter');
        }
    }





















// FUNCTION mousePressed
// 	IF background = summer
// 		background = winter
// 	ELSE background = summer

// FUNCTION