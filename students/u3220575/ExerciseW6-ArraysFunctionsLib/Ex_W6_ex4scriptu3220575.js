function setup() {
    createCanvas(1510, 712);
}

// function draw() {
//     background("green")
//     ellipse(50,50,80,80)
//     fill("blue")
//     ellipse(50,50,40,40)
// }

// interactivity 
function draw() {
    if (mouseIsPressed) {
        fill("red");
    } else {
        fill(255);
    }
    ellipse (mouseX, mouseY, 80, 80)
}