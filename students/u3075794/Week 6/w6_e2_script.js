/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays

/* create an array of people in your family - 
add an extra person
use an if statement in your for to only print out some peoples name (only people's whose name starts with "S" or something)
*/

var family_names = ["Jason", "Bernie" , "Shirley"];

family_names.push("Benjamin");
document.write("the family names less than 7 letters ");

//Prints out the family names with less than 7 characters
for(let i = 0; i < family_names.length; i++) {
    
    if (family_names[i].length <7){
    document.write(family_names[i]);
    document.write(" ");}
}

