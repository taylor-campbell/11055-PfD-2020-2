/* Name/ID: Zanya Nadelle Bendebel
Date: 7 September 2020
This file is exercise 2 focusing on family names
*/

// Arrays

//create

var family_names = ["Leonardo", "Nira", "Shan", "Shannon"];

document.write("Names in family array <br/>");
for(let i = 0; i < family_names.length; i++) {

    if(family_names[i].toUpperCase().includes("A")) {
    document.write(family_names[i] + "<br/>")
    }

}