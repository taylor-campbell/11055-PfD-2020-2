/* This is the first exercise for week 6 - 07/09/2020 */

//Arrays

//create 
var family_names = ["Jean","Brigitte","Patrick"];

//this will write to html
document.write("Write another family name manually <br/>");
document.write(family_names[0] + "<br/>");
document.write(family_names[1] + "<br/>");
document.write(family_names[2] + "<br/>");


//write the length 
document.write("The number of family members in the array + <br/>");
document.write("family_names.length + <br/>");

//using a for // this is a loop to add index // let = only exist until the block closes {}
// i++ = iterate 
// i should always be less than the max length (with .length)
document.write("the family names automatically + <br/>")
for(let i = 0; i < family_names.length; i++) {
        document.write(family_names[i] + "<br/>");
}

// add a family member
document.write("add a family member + <br/>");
// prompt function - manually enters a name
family_names.push(window.prompt("enter a name"));

// write the same for the automatic
document.write("the family names automatically");
for(let i = 0; i < family_names.length; i++) {
        document.write(family_names[i]);
}
