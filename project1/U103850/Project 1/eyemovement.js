var eye1;
var eye2;
    
document.write ("Hello World3");

function setup(){
    createCanvas(400, 400);
    

    eye1 = {
        x: width / 2 - 16,
        y: height / 2,
        rad: 32
    };
    
    
    
    eye2 = {
        x: width / 2 + 16,
        y: height / 2,
        rad: 32
    }

}



function draw() {
    background(220);

    var ang = atan2(mouseY - eye1.y, mouseX - eye1.x);

    fill(255);
    ellipse(eye1.x, eye1.y, eye1.rad);
    fill(0);
    ellipse(eye1.x + (eye1.rad / 4) * cos(ang), eye1.y + (eye1.rad / 4) * sin(ang), eye1.rad / 4 );
    
    ang = atan2(mouseY - eye2.y, mouseX - eye2.x);
    
    fill(255);
    ellipse(eye2.x, eye2.y, eye2.rad);
    fill(0);
    ellipse(eye2.x + (eye2.rad / 4) * cos(ang), eye2.y + (eye2.rad / 4) * sin(ang), eye2.rad / 4 );


}
