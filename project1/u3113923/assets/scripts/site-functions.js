/////////
// 8-Bit Colour Generator Site Functions
// Shane Ducksbury - u3113923
// Last modified 1st October 2020
// 
/////////


// Pick all of the elements on webpage for use by code below

const drawPanel = document.getElementById("draw-panel");
const uploadImagePanel = document.getElementById("upload-image-panel");

const selfPortraitButton = document.getElementById("self-portrait-nav-button");
const drawPortraitButton = document.getElementById("draw-portrait-nav-button");
const convertImageButton = document.getElementById("convert-image-nav-button");
const makeURL8BitButton = document.getElementById("make-url-8bit-button");

let coloursPopulated = false;


// define all of the site show/hide functions

const hideDrawPanel = () => {
    drawPanel.classList.add("hide-container");
};

const showDrawPanel = () => {
    hideImageUploadPanel();
    drawPanel.classList.remove("hide-container");
};

const hideImageUploadPanel = () => {
    uploadImagePanel.classList.add("hide-container");
};

const showImageUploadPanel = () => {
    hideDrawPanel();
    uploadImagePanel.classList.remove("hide-container");
};

const hideAllPanels = () => {
    hideDrawPanel();
    hideImageUploadPanel();
};

const showSelfPortrait = () => {
    hideAllPanels();
    drawDev();
};

// builds the drawing panel
const createDrawPanel = () => {
    showDrawPanel();
    drawBlankCanvas();
    createDrawingColours();
};


// Get the user input and call the conversion function
// dev-note: There is no error checking on the input field.
const createUserImage = () => {
    const userURLInput = document.getElementById("user-input-image-url");
    if (userURLInput.value){
        userImageURL = userURLInput.value;
    }
    hideAllPanels();
    drawImageFromURL();
};


// create the Event Listeners for each of the buttons
selfPortraitButton.addEventListener("click", showSelfPortrait);
drawPortraitButton.addEventListener("click", createDrawPanel);
convertImageButton.addEventListener("click", showImageUploadPanel);
makeURL8BitButton.addEventListener("click", createUserImage);


// Import Hex codes into Dom, for each button
// build button and set the html/css attributes so they can be styled
// include an event listener on each one to change the fill colour to paint on the image.

const createDrawingColours = () => {
    if (!coloursPopulated){
        for (let i = 0; i < rgbArray.length; i++) {
            const rgbValue = rgbArray[i];
            const controlButtonContainer = document.getElementById("p5-colour-buttons-cont");
            const newButton = document.createElement("div");
            newButton.setAttribute("id", `p5-colour-button-${i}`);
            newButton.setAttribute("class", "p5-colour-button");
            newButton.setAttribute("style", `background-color:rgba(${rgbValue[0]}, ${rgbValue[1]},${rgbValue[2]}, 1)`)
            newButton.addEventListener("click", clickedFillColour.bind(null, rgbValue))
            controlButtonContainer.appendChild(newButton);
        }
        coloursPopulated = true;
    }
}

// set the clicked fill colour from the event listener in createDrawingColours to the rgb value of that square
const clickedFillColour = (rgbValue) => {
    let r = rgbValue[0];
    let g = rgbValue[1];
    let b = rgbValue[2];
    let rgbArray = [r, g, b];

    selectedFillColour = rgbArray;
};




