/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays

/* create an array of people in your family - 
add an extra person
use an if statement in your for to only print out some peoples name (only people's whose name starts with "S" or something)
*/

var student_names = ["Kate", "Keir", "Manish", "Moudar", "Seth", "Shane"];

document.write("Names in the student array <br/>");
for(let i = 0; i < student_names.length; i++) {

    if(student_names[i].toUpperCase().includes("E")) {
        document.write(student_names[i] + "<br/>");
    }

}




