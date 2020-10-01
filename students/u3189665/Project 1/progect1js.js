let x = 100;
let y = 100;

function setup() {
    createCanvas(1000, 1000);
    stroke(255);
    frameRate(30);
}

function draw() {
    background('rgb(255,255,255)');
    noStroke();
    if (y < 0) {
        y = height;
    }
    fill('rgb(30, 30, 30)');
    drawEye(x + 50, y + 50, 50);
    drawEye(x + 200, y + 50, 50);
    fill('rgb(240, 222, 204)');
    beginShape();
    vertex(373, 606);
    vertex(363, 530);
    vertex(335, 484);
    vertex(340, 453);
    vertex(354, 464);
    vertex(341, 363);
    vertex(410, 247);
    vertex(547, 248);
    vertex(626, 340);
    vertex(624, 460);
    vertex(634, 449);
    vertex(635, 488);
    vertex(617, 544);
    vertex(613, 595);
    vertex(522, 696);
    vertex(461, 699);
    endShape(CLOSE);
    
}

function drawEye(x, y, size) {
    fill('rgb(235, 230, 230)');
    circle(x, y, size);
    fill('rgb(130,120,145)');
    let xPos = 0;
    let yPos = 0;
    let xOff = 0;
    let yOff = 0;
    xOff = (mouseX - x) / (windowWidth - x)
    yOff = (mouseY - y) / (windowHeight - y);

    let angle = Math.atan((mouseX - x) / (mouseY - y));
    if (mouseX < x) {
        if (mouseY > y) {
            xPos = x + size / 3 * (Math.sin(angle) * -xOff);
            yPos = y + size / 3 * (Math.cos(angle) * yOff);
        }
        else {
            xPos = x - size / 3 * (Math.sin(angle) * -xOff);
            yPos = y - size / 3 * (Math.cos(angle) * -yOff);
        }
    }
    else {
        if (mouseY >= y) {
            xPos = x + size / 3 * (Math.sin(angle) * xOff);
            yPos = y + size / 3 * (Math.cos(angle) * yOff);
        }
        else {
            xPos = x - size / 3 * (Math.sin(angle) * xOff);
            yPos = y - size / 3 * (Math.cos(angle) * -yOff);
        }
    }
    circle(xPos, yPos, size / 3 * 2);
    fill(30);
    circle(xPos, yPos, size / 3);

    return;
}

function thisShouldBeInJavascript(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}