/////////
// 8-Bit Colour Generator Colour Functions
// Shane Ducksbury - u3113923
// Last modified 1st October 2020
// 
/////////

const startFiles = [
    "000000",
    "12173D",
    "293268",
    "464B8C",
    "6B74B2",
    "909EDD",
    "C1D9F2",
    "FFFFFF",
    "FFCCD0",
    "F29FAA",
    "C37289",
    "994C69",
    "723352",
    "3F1F3C",
    "B22E69",
    "E54286",
    "FF6EAF",
    "FFA5D5",
    "8CFF9B",
    "42BC7F",
    "22896E",
    "14665B",
    "0F4A4C",
    "0A2A33",
    "1D1A59",
    "322D89",
    "354AB2",
    "3E83D1",
    "50B9EB",
    "8CDAFF",
    "B483EF",
    "854CBF",
    "5D2F8C",
    "431E66",
    "FFE091",
    "FFAA6E",
    "FF695A",
    "B23C40",
    "721C2F",
    "A52639",
    "DD3745",
    "FF6675",
    "78FAE6",
    "27D3CB",
    "00AAA5",
    "008782",
    "FFFFFF",
    "B22E69",
];

let rgbArray = [];

// This converts HEX code to RGB - this function was from Stack Overflow
// It uses a regex to match the Hex and then convert to RGB

const convertToRGB = function(hexString){
    var aRgbHex = hexString.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

// Take each HEX colour in the above array and convert it to RGB values,
// and then output to an array for use in the fill of the 8 bit generator and to populate the drawing panel
for (let i = 0; i < startFiles.length; i++) {
    let outputRGB = convertToRGB(startFiles[i]);
    rgbArray.push(outputRGB);
}

// Returns a value which shows how far colour 1 is from colour 2.
// This is then used to match the colour when converting to 8 bit.
const colourDistance = (colour1, colour2) => {
    let redDiff = colour1[0] - colour2[0];
    let greenDiff = colour1[1] - colour2[1];
    let blueDiff = colour1[2] - colour2[2];

    return Math.sqrt((redDiff ** 2) + (greenDiff ** 2) + (blueDiff ** 2));

}