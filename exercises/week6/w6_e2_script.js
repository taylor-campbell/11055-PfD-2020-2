/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays


/* create an array of people in your family - 
add an extra person
use an if statement in your for to only print out some peoples name (only people's whose name starts with "S" or something)
*/



// Create
var names = ["Apple", "Ball", "Cat", "Dog", "Elephant"];

// Show names
document.write ("List of words" + "<br/>" );
for (let i=0; i < names.length; i++){
    if( names[i].substring(0,1) ==  "B"){
        document.write(names[i] + "<br/>");
    }
}



