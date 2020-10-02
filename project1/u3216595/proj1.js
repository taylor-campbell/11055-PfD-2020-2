function setup(){
    createCanvas(600, 600); //create canvas to draw on
    background(250); //temp baby blue or green later
}

function draw(){
    /*2. neck
    colour a skin tone darker than face
    create rect
    lower middle of canvas, overlap with head */
    //neck
    fill(244, 227, 182);
    noStroke();
    rect(240, 420, 60, 70); //x, y, width, height
    
    /*3. face
    colour skin tone
    create ellipse 
    place in centre of canvas */
    //face
    fill();
    ellipse();
    noStroke();

    /*4. eyes
    colour white
    ellipse, circle
    left side of face
    colour white 
    ellipse circle
    right side of face*/
    //eyes
    //left
    fill(255);
    ellipse();
    //right
    fill(255);
    ellipse();

    /*5. pupils
    colour black
    ellipse circle
    center in middle of left eye
    colour black
    ellipse circle
    center in middle of right eye*/
    //pupils
    //left
    fill(0);
    ellipse();
    //right
    fill(0);
    ellipse();

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
    arc();//left
    arc();//right

    /*9. ears
    skin tone
    ellipse left of head
    skin tone
    ellipse right of head*/
    //ears
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
    arc();

    value = 1;
    ellipse();

    value = 2;
    arc();
}

//click event 2 (mouse click)
function mouseClicked(){
    if (value){
        value = +1;
    } if (value = 3){
        let value = 0;
    }
}