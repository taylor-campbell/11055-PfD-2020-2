//Exercise 3
//Procedurally writing user's last name

//create variables
var fname = [];
var mname = [];
var lname = [];

//asking user for full name
fname.push(window.prompt("Enter your first name"));
mname.push(window.prompt("Enter your middle name"));
lname.push(window.prompt("Enter your last name"));

//write last name
document.write("Last Name:" + "<br/>" + lname);
