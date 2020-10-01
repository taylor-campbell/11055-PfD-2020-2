
//the setup for the main drawing, creating a canvas, 
//background colour and what angle model to uses, which is set
function setup() {
    createCanvas(641, 904);
    angleMode(DEGREES);

  //Seting the variable of the cordinates of y so the shapes can move up and down,
    //for both Left side and right side.
    yLeftbrow = 336;    
    yRightbrow = 381;

  }
  
  function draw() {
   // Creating new variables for the checkboxs on the html
   var chcekGEyes = document.getElementById("browcheck"); 
   var chcekGlasse = document.getElementById("glassescheck"); 
   //Creating new variables for the drop down menu and variables for
   //the colour of hair and eyes
   var eyeDropDown = document.getElementById("eyeColour");
   var eyecolour = eyeDropDown.options[eyeDropDown.selectedIndex].value;
   var hairdropdown = document.getElementById("Haircolour");
   var haircolour = hairdropdown.options[hairdropdown.selectedIndex].value;
    //decaling the background colour of canvas
    background("pink");
    //Calling all the main fuction for main face features
    drawBody();
     //Create parameter for the variable haircolour, that is link to haircolour drop down 
    drawbackhair(haircolour);
    drawHead();   
    drawfronthair(haircolour);
    drawNose();
    //Create parameter in draw eye for the check box and change eyecolour (linked with eye colour drop down) 
    drawEyes(chcekGlasse.checked,chcekGEyes.checked,eyecolour);
    drawMouth();


}


