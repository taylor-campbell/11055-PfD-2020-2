// Family Array

// My family
var my_family = ["Pam", "Bas", "Becca", "Vida"]

//Family list
document.write("The people in the house" + "<br/>");
document.write(my_family[0] + "<br/>");
document.write(my_family[1] + "<br/>");
document.write(my_family[2] + "<br/>");
document.write(my_family[3] + "<br/>");

//Add a visiting sister
document.write("Sister comes to visit" + "<br/>");
my_family.push(window.prompt("Sister comes to visit, what is her name?"));

document.write("A full house" + "<br/>");
for(let i = 0; i < my_family.length; i++) {
    document.write(my_family[i] + "<br/>");
}

//list of B names
document.write("What names start with a B?" + "<br/>");

for(let i = 0; i < my_family.length; i++) {
if(my_family[i].substring(0,1) == "B") {
    document.write(my_family[i] + "<br/>");
}
}

