/*
This is to send a message when the bus is the correct route I need to catch.

*/

// create test variables - get values later
var busnumber = 4;
var testtime = 9;

busnumber = window.prompt("Bus Route")

// CREATE Variables [String: Message, DateTime: AntcipatedTime, DateTime: ScheduledTime, Num: ArrivingBusNumber]

// Message = “Catch correct bus”
var message = "Catch correct bus"
// AntcipatedTime = “9am”
var AnticipatedTime = 9; // this is the time I anticipated to arrive at the bus stop, represent 24 hour time
// ScheduledTime = “9:15am”
var ScheduledTime = 9.25 // this is the bus arrival scheduled time, represent 24 hour time
// ArrivingBusNumber = [Bus]
var ArrivingBusNumber = busnumber // replace with bus for busnumber when available
// CurrentTime = [Clock]
var CurrentTime = testtime; // replace with clock when available
    
// DO WHILE CurrentTime is > AnticipatedTime and < Scheduled Time THEN
while (CurrentTime > AnticipatedTime && CurrentTime < ScheduledTime) {

    //     IF ArrivingBusNumber < 4 THEN
        if (ArrivingBusNumber < 4) {
            // SEND (“Enter bus”)
            document.write(message);
            //  EXIT LOOP
                break; 
        //  END IF
        }

    CurrentTime++; // Increment time to avoid loop
    ArrivingBusNumber--; // Decrement to test all the states
    document.write(CurrentTime + " " + ArrivingBusNumber + "br/>"); // write html out of the loop test variable
// LOOP
}

// END PROGRAM
    