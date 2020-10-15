/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays and functions
var newArray = ["Bill", "Ted", "Excellent", "Adventure", "Boop"]
var newArray2 = ["Bob", "Red", "Billy", "Doop"]

printArray(newArray);
printArray(newArray2);

// functions are just you removing duplicate code from your program

// you can write a function to save you writing lots of code
function printme(somethingtoprint) {
    if(somethingtoprint == "B") {
        document.write("It is a B" + "<br/>");
    }
    document.write(somethingtoprint);
}

function printArray(testArray) {
    document.write("Print array automatically" + "<br/>");
    for(let i = 0; i < testArray.length; i++) {
        if (testArray[i].substring(0,1) == "B") {
            document.write(testArray[i] + "<br/>");
        }
    }
}

// note that these functions are a little dangerous - what happens if you send product("hello",3) ?
function product(number1, number2){
    return number1 * number2;
}

// you can use functions in functions, with the one inside being done before the one outside
printme(product(3,4) + "<br/>");
printme("B")
/* create a function that will take an array and will print that array using the for loop we used before */




