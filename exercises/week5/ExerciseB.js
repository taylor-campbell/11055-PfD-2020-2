/*
This is send a message when the solar panels start producing enough power.
*/

// create test variables - get values later
var testgrid = 3;
var testtime = 7;

testgrid = window.prompt("Grid Value")

// CREATE Variables [String: Message, DateTime: Sunrise, DateTime: Sunset, Num: GridPower)

// Message = “Time to boil the kettle”
var message = "Time to boil the kettle";
// Sunrise = “6am”
var sunrise = 6; // this is going to a time, represent 24 hour time
// Sunset = “6pm”
var sunset = 18; // this is going to a time, represent 24 hour time
// GridPower = [Sensor]
var gridPower = testgrid; // replace with sensor for grid power when available
// CurrentTime = [Clock]
var currentTime = testtime; // replace with time sensor when avialable


// DO WHILE CurrentTime > Sunrise & CurrentTime < Sunset THEN
while (currentTime > sunrise && currentTime < sunset) {

        // IF GridPower < 0 THEN
        if (gridPower < 0) {
            // SEND (Message)
            document.write(message);
            // EXIT LOOP
            break;
        // END IF
        }

     // remove these testing statements went complete
    currentTime++; // increment current time so don't get stuck in the loop
    gridPower--; // to test all the states
    document.write(currentTime + " <b>" + gridPower + "</b><br/>"); //write html out of the loop test variable
// LOOP 
}

// END PROGRAM
