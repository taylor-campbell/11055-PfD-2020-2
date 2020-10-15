//Exercise 4
//Functionally writing user's last name

//create array
var full_name = [];

//asking user for full name
full_name.push(window.prompt("Enter your first name"));
full_name.push(window.prompt("Enter your middle name"));
full_name.push(window.prompt("Enter your last name"));

//write last name
document.write("Last Name:" + "<br/>");
for(let i = 2; i < full_name.length; i++) {
    document.write(full_name[i] + "<br/>");
}
