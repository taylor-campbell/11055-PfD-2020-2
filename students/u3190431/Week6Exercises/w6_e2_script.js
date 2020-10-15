/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays
var familyMembers = ["Rendry", "Cherrie", "Caleb"];

// Write out names
document.write("The members of the Del Rosario family: <br/>");
for(let i = 0; i < familyMembers.length; i++) {
    document.write(familyMembers[i] + "<br/>");
}

// Add new members
document.write("Add new name <br/>");
familyMembers.push(window.prompt("Enter a new name"));
// Reprint names
document.write("Updated members of the Del Rosario family: <br/>");
for(let i = 0; i < familyMembers.length; i++) {
    document.write(familyMembers[i] + "<br/>");
}

/* create an array of people in your family - 
add an extra person
use an if statement in your for to only print out some peoples name (only people's whose name starts with "S" or something)
*/

// Reprint names
document.write("Display Members starting with C: <br/>");
for(let i = 0; i < familyMembers.length; i++) {
    if (familyMembers[i].substring(0,1) == "C") {
        document.write(familyMembers[i] + "<br/>");
    }
}