//Exercise 4
//Rewriting product code with objects

//create variable property values
var object_numbers = [];

//collect number 1
object_numbers.push(window.prompt("Enter a number"));
//collect number 2
object_numbers.push(window.prompt("Enter a second number"));


//create writing function
object_numbers.write = function () {
    return object_numbers[0] + " and " + object_numbers[1] + "<br/>";
};

document.write(object_numbers.write())


//create calculating function
object_numbers.product = 
    object_numbers[0]*object_numbers[1];

document.write("Product: <br/>" + object_numbers.product + "<br/>")

//calculate product's relation to 10
if (object_numbers.product == 10) {
    document.write("<br/>" + "perfect");
} else {}
if (object_numbers.product < 10) {
    document.write("<br/>" + "too small");
} else {}
if (object_numbers.product > 10) {
    document.write("<br/>" + "too big");
} else {}