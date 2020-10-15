/*
    This is an exercise to show how flowcharts can become code
*/

// Setup Test Variables to test code
var testTemperature = 20 // Use 20 for 20 degrees celcius as room temperature
var testBoil = 0 // Use 0 for 0 minutes ellapsed
var testBake = 0

//CREATE Variables (Num: ovenTemperature)

//SET ovenTemperature = 180
const ovenTemperature = 180 // Use 180 for 180 degrees celcius
const boilTime = 5 //Use 5 for 5 minutes
const bakeTime = 20
const flipTime = 10

document.write("<b>" + "Turn on oven, set to 180" + "</b>" + "<br/>");
//DO WHILE ovenTemperature < 180
while (testTemperature < ovenTemperature) {
    //Heat
    testTemperature++;
    document.write(testTemperature + " degrees" + "<br/>");
} //LOOP
document.write("<b>" + "Oven Heated" + "</b>" + "<br/>");


//DO 
//    Add 1/4 cup of sugar, soy sauce and mirin to pot
document.write("<b>" + "Add 1/4 cup of sugar, soy sauce and mirin to pot" + "</b>" + "<br/>");
//IF teriyakiSauce_isMelted.isFalse
while (testBoil < boilTime) {
    // Heat
    testBoil++;
    document.write("Boiling for " + testBoil + " minute" + "<br/>");
} //LOOP
//ELSE
//    Pour teriyaki sauce on salmon
document.write("<b>" + "Sauce boiled" + "<br/>" + "Pour teriyaki sauce on salmon" + "</b>" + "<br/>");

while (testBake < bakeTime) {
    // Heat
    testBake++;
    document.write(testBake + " minutes has passed" + "<br/>");
    
    if (testBake == flipTime) {
        document.write("<b>" + "Half time, flip salmon" + "</b>" +"<br/>");
    }
    
}
document.write("<b>" + "Remove salmon from oven. Bon Appetit" + "</b>");