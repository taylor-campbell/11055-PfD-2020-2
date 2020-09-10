/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays

/* create an array of people in your family - 
add an extra person
use an if statement in your for to only print out some peoples name (only people's whose name starts with "S" or something)
*/

// Create Array
var family_names = ["Barb","Mike","Nanna","Christe","James","Annette","Julie","Katie","Danny"];

//Confirm number of people in family
document.write("The number of people in my family is:<br/>");
document.write(family_names.length + "<br/>");

//List names of family
document.write("The people in my family are called: <br/>")
for(let i=0; i < family_names.length; i++) {
    document.write(family_names[i] + "<br/>");
}

//List Names using function
printarray(family_names)



// FUNCTIONS
function printarray(arrayname){
    document.write(arrayname + ":<br/>");
    for (i=0; i < arrayname.length; i++) {
        document.write(arrayname[i] + "<br/>")
    }
}