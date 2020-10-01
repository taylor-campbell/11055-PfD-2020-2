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
    drawEye(417, 443, 70);
    drawEye(553, 440, 70);
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
    vertex(629, 455);
    vertex(634, 449);
    vertex(635, 488);
    vertex(617, 544);
    vertex(613, 595);
    vertex(522, 696);
    vertex(461, 699);
    beginContour();
    vertex(405,454);
    vertex(432,451);
    vertex(451,448);
    vertex(428,432);
    vertex(398,433);
    vertex(385,449);
    endContour();
    beginContour();
    vertex(521,445);
    vertex(545,450);
    vertex(568,450);
    vertex(581,441);
    vertex(565,430);
    vertex(544,429);
    endContour();
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
            yPos = y + size / 3 * (Math.cos(angle) * yOff/2);
        }
        else {
            xPos = x - size / 3 * (Math.sin(angle) * -xOff);
            yPos = y - size / 3 * (Math.cos(angle) * -yOff/2);
        }
    }
    else {
        if (mouseY >= y) {
            xPos = x + size / 3 * (Math.sin(angle) * xOff);
            yPos = y + size / 3 * (Math.cos(angle) * yOff/2);
        }
        else {
            xPos = x - size / 3 * (Math.sin(angle) * xOff);
            yPos = y - size / 3 * (Math.cos(angle) * -yOff/2);
        }
    }
    circle(xPos, yPos, size / 5 * 2);
    fill(30);
    circle(xPos, yPos, size / 5);

    return;
}

function thisShouldBeInJavascript(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}