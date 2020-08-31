/*
    This is an exercise to show how flowcharts can become code
*/

// setup test variables to test our code - these will be replaced with real values in the future
var testgrid = 1;
var testtime = 7;

// get the value from the user for the grid value
testgrid = window.prompt("Hey what is the Grid Value");

// CREATE Variables [String: Message, DateTime: Sunrise, DateTime: Sunset, Num: GridPower)
// Message = “Time to boil the kettle”
var message = "Time to boil the kettle";
// Sunrise = “6am”
const sunrise = 6; // use 6 for 6am
// Sunset = “6pm”
var sunset = 18; // use 18 for 6pm aka military time
// GridPower = [Sensor]
var gridPower = testgrid; // replace testgrid with real values when avaiable
// CurrentTime = [Clock]
var currentTime = testtime; // replace testtime with real values when avaiable

// DO WHILE CurrentTime > Sunrise & CurrentTime < Sunset THEN
while (currentTime > sunrise && currentTime < sunset) {

    //IF GridPower < 0 THEN
    if (gridPower < 0) {
        // SEND (Message)
        document.write(message);
        // EXIT LOOP
        break;
    // END IF
    } else {

    }

    // For Testing - add values to time
    currentTime++;
    gridPower--;
    document.write("<b>" + currentTime + "</b> " + gridPower + "<br/>");
    //window.alert("<b>" + currentTime + "</b> " + gridPower + "<br/>");
// LOOP 
}

// END PROGRAM
