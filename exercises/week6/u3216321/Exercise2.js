/* Practicing Arrays with Family Members */
/* Isaac Wetherell 7/9/2020 */

//array

//create variables
var family_names = ["Chris", "Alice", "Isaac", "Seb", "Charlie", "Gwen"];

// add a family member

family_names.push(prompt("enter a name to add a family member"));

// writing out names
document.write("the family names automatically" + "<br/>");
for(let i = 0; i < family_names.length; i++) {
        document.write(family_names[i] + "<br/>");
    
}

// writing out names that start with C
document.write("the family names beginning with C" + "<br/>");
for(let i = 0; i < family_names.length; i++) {
    
    if(family_names[i].substring(0, 1, 2, 3, 4, 5) == "C") {
        document.write(family_names[i] + "<br/>");
    }
}

