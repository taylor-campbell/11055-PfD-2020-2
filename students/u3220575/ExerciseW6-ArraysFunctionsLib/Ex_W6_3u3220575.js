// printing function
function printme(printsomething) {
    document.write(whateveryouwant);

}

// product function
function product(string1, string2) {
    return string1 * string2;
}

// functions in functions
printme(product(3,4) + "</br>");

// create a function for an array
var family_names = ["Jean","Brigitte","Patrick"];
var family_names2 = ["Eleanore","Azilys","Thea"]

printearray(family_names)
printearray(family_names2)

// create a function that will create a loop like the array in exercise 2

function printearray(arraytoprint) {
    document.write("Names in the family array </br>")
    for(let i = 0; i < arraytoprint.length; i++) {
            if(arraytoprint[i].includes("a")) {
                document.write(arraytoprint[i] + "</br>");
            }

    }
}
 