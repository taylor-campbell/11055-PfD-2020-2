function setup(){
    createCanvas(600, 600); //create canvas to draw on
    background(250); //temp baby blue or green later
}

function draw(){
    //neck
    fill(244, 227, 182); //fill closed shape with colour. slightly darker than face skin tone.
    noStroke(); //erase border line until otherwise stated
    rect(250, 350, 100, 200); //x, y, width, height
    
    //face
    fill(255, 241, 202);
    ellipse(300, 300, 400, 400); //x, y, width, height

    //eyes
    //left
    stroke(195, 164, 79); //strokes appear again
    fill(255); //255 is topmost value, this means the colour is white - 255, 255, 255 in rgb
    ellipse(205, 290, 135, 135);
    //right
    fill(255);
    ellipse(395, 290, 135, 135); //x = 600-215

    //pupils
    //left
    fill(0); //black would be the bottommost value if white was topmost - 0, 0, 0 in rgb
    noStroke();
    ellipse(205, 290, 80, 80);
    //right
    fill(0);
    ellipse(395, 290, 80, 80);

    /*6. shirt
    colour black
    ellipse on right of neck
    colour black
    ellipse on left of neck
    colour black
    create rect
    enlargen so it is ude for both arms
    colour black 
    create rect
    links both shoulders together
    colour black
    create rect
    turtle neck so I don't need shirt collar*/
    //shirt
    //left shoulder
    fill(0);
    ellipse();
    //right shoulder
    fill(0);
    ellipse();
    //arms and torso
    fill(0);
    rect();
    //connect shoulders
    fill(0);
    rect();
    //turtle neck
    fill(0);
    rect();

    /*7. hair
    */
    //hair

    /*8. eyebrows
    create arc
    position above left eye
    create arc
    position above right eye*/
    //eyebrows
    stroke(195, 164, 79);
    arc();//left
    arc();//right

    /*9. ears
    skin tone
    ellipse left of head
    skin tone
    ellipse right of head*/
    //ears
    noStroke();
    fill();
    ellipse(); //left
    fill();
    ellipse(); //right

    /*10. click event = mouth
    when mouse clicks value +1
    value = 0{
        create arc for smile
    }
    value = 1{
        colour red
        ellipse for surprise
    }
    value = 2{
        arc for frown
    }
    value = 3{
        value = 0
    }
    loop without loop tag
    } */
    //click event values
    let value = 0;
    stroke(195, 164, 79);
    strokeWeight(4);
    noFill();
    arc(300, 380, 80, 80, 0, HALF_PI);

    value = 1;
    ellipse(300, 380, 80, 80);

    value = 2;
    arc(300, 380, 80, 80, 0, HALF_PI);
}

//click event 2 (mouse click)
function mouseClicked(){
    if (value = 0){
        value = +1;
    } if (value = 3){
        let value = 0;
    }
}