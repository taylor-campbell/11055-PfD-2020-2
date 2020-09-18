//Exercise 1
//Procedurally calculating the PRODUCT of 2 variables
    //Finding the sum of variables did not work through coding. (e,g x + y would result in xy rather than z)

//create variables
var number1 = [];
var number2 = [];

//asking user for 2 numbers
number1.push(window.prompt("Enter a number"));
number2.push(window.prompt("Enter a number"));

//calculating product of variables
var number_product = number1*number2

//write product
document.write("Product of numbers:" + "<br/>" + number_product);

//calculate product's relation to 10
if (number_product == 10) {
    document.write("<br/>" + "perfect");
} else {

}
if (number_product < 10) {
    document.write("<br/>" + "too small");
} else {

}
if (number_product > 10) {
    document.write("<br/>" + "too big");
} else {

}