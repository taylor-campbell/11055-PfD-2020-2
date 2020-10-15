/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays

//create
var family_names = ["Leo", "Nira"];

//write to html
document.write("The family names manually <br/>");
document.write(family_names[0] + "<br/>");
document.write(family_names[1]) + "<br/>";

// write the length
document.write("The number of family in the array" + "<br/>");
document.write(family_names.length);

// write out using a for
document.write("the family names automatically" + "<br/>");
//print out names
for(let i = 0; i < family_names.length; i++) {
    document.write(family_names[i] + "<br/>"); // Remember to minus one
}

// add a family member
document.write("add a family" + "<br/>");
// the prompt function allows you to ask the user to enter a name
family_names.push("Jiao")
family_names.push(prompt("enter a name"));

//family names     // array    [0]     .push(string)
family_names.push(window.prompt("enter a name"))

// write using the same for...
document.write("the family names automatically" + "<br/>");
for(let i = 0; i < family_names.length; i++) {
    document.write(family_names[i] + "<br/>");
}


