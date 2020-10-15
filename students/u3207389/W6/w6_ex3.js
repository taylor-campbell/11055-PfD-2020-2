

//function

function arrayprinter(nameofarray) 
    document.write("the array automatically")
    for(let i = 0; i < nameofarray.length; i++) {
        if(nameofarray[i].substring(0,4) == "B") {
            document.write(nameofarray[i] + "<br/>");
}
    }


//Function results


var newarray = ["Pam", "Bas", "Becca", "Vida"]
var newarrayx = ["Ric", "Karen", "Bevan"]

arrayprinter(newarray);
arrayprinter(newarrayx);


    