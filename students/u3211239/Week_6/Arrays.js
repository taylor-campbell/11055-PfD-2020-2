// Set up the array.
var BandInfo = ["Queen", "Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"];

// Define the function to return the band name.
function GetBandName(){

    return BandInfo[0]
}

// Display the band name.
document.write("<b>" + "Name of band: " + "</b>"  + GetBandName() + "<br/>");

// Display the band members.
document.write("<b>" + "Band members are: " + "</b>");

for (let Position = 1; Position < BandInfo.length; Position++){

    document.write("<br/>" + BandInfo[Position])
}
