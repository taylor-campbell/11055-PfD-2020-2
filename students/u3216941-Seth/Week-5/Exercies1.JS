/*
    This is the routiute for going to bed and to send a message to the user when to do they things
     
    The Goal or what the program is gonna be for.
    @Author
     @Date
     These things should go at the Start of the code.
*/
               
var testtime = 6
// Create Variables[String:Message &message1& Message2 & Message3, Datetime:CurrentTime, Number:Timer, Bool:onOff] 
var message = "Time to Brush Teeth";
var message1 = "Contunie doing your things";
var message2 = "Say Goodnight";
var message3 = "Into bed and sleep";
// Message = “Brush Teeth”
// Message1= “Countie doing your thing”
// Message2 = “Say Goodnight”
// Message3 = “Into bed and sleep”
var currettime = testtime;
// Currenttime = Time
var Timer = 3;
// Timer = Set number to 300 seconds
var light = true;
// On = True
// Off = False

while (currettime != 10)
    {
        document.write(message + "<br>The time is " +currettime)
        currettime++;
    }
    document.write("<br>"+message + Timer + " Minutes to brush teth<br>")
while (Timer >0)
{
    document.write("<br>Time left for brushing teeth "+Timer+"<br>Keep brushing Teeth<br>")
    Timer --
}
document.write("<br>Stop Brushing Teeth and " + message2 )
 // If Current Time = 21:30
// 	Print (message) && 	Start Timer
// Else Loop
// Then If timer ends
// 	Print(“Stop” + message + “ and do ”+ message2) 
// Else
// Continue unit timer ends

if (light = true)
{
    document.write("<br>turn off light" + "<br><b>" + message3);
    light = false;
}
else
{
    document.write(message3);
} 


// Then If On = false
// 	Print (message3)
// 	END	
// Else
// 	Print(“Turn off light” On = false)
// 	END
	

