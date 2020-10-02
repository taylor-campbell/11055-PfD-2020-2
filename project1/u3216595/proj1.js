function setup(){
    createCanvas(600, 1000); //create canvas to draw on
    background(182, 255, 238); //mint blue/green as background colour
}

let pos = 65; //the initial size of the hair

function draw(){
    //hair
    noStroke();
    fill(0);
    ellipse(300, 300, 480, 480);
    fill(0);
    rect(70, 350, 460, pos);

    
    //face
    fill(255, 241, 202);
    ellipse(300, 300, 400, 400); //x, y, width, height

    //eyes
    //left
    stroke(195, 164, 79); //strokes appear again
    strokeWeight(1); //how thick strokes are
    fill(255); //255 is topmost value, this means the colour is white - 255, 255, 255 in rgb
    ellipse(205, 290, 125, 125);
    //right
    fill(255);
    ellipse(395, 290, 125, 125); //x = 600-215

    //pupils
    //left
    fill(0); //black would be the bottommost value if white was topmost - 0, 0, 0 in rgb
    noStroke();
    ellipse(205, 290, 70, 70);
    //right
    fill(0);
    ellipse(395, 290, 70, 70);

    //nose
    fill(242, 217, 174);
    arc(300, 350, 50, 50, TWO_PI, PI); //x, y, width, length, start, end

    //eyebrows
    stroke(195, 164, 79);
    fill(0);
    arc(205, 210, 50, 50, PI + TWO_PI, TWO_PI);;//left eyebrow
    arc(395, 210, 50, 50, PI + TWO_PI, TWO_PI);;//right eyebrow

    //ears
    noStroke();
    fill(255, 241, 202);
    ellipse(500, 300, 50, 80); //left
    fill(255, 241, 202);
    ellipse(100, 300, 50, 80); //right
    //both ears enter the head shape because they're the same colour

    //mouth
    noFill(); //opacity = 0
    stroke(239, 171, 131);
    strokeWeight(3);
    arc(300, 380, 80, 80, TWO_PI, PI);

}


function mouseWheel(event) {
    print(event.delta); //move hair length according to the vertical scroll
    pos += event.delta;
  }