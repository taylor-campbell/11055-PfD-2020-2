//Exercise 2
//Functionally calculating the PRODUCT of 2 variables
    //Finding the sum of variables did not work through coding. (e,g x + y would result in xy rather than z)

//create array
var numbers = [];

//asking user for 2 numbers
numbers.push(window.prompt("Enter a number"));
numbers.push(window.prompt("Enter a number"));

//calculating product of variables
var number_product = number[0]*number[1]

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