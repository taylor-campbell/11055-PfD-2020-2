//Exercise 4
//Week 9
//Zanya Nadelle Bendebel (u3201052)
//Monday, 28 September


// Object Oriented

/* write the following in a object oriented way

ask the user of the program for a number, store it
ask the user of the program for a number, store it
check that if the sum of both numbers is under 10, tell the user 'too small'
check that if the sum of both numbers is over 10, tell the user 'too big'
check that if the sum of both numbers is 10, tell the user 'perfect'

*/

var car3 = {
    name:"Carnival", 
    brand:"Kia", 
    year:"2012", 
    kms:23000,
    startcar: function() {
        return this.brand + " " + this.name + " goes vroom";
    }
};



// using objects in simple loops
for (x in car3) {
    document.write(car3[x] + "<br/>");
}

// you can add new properties as you go - thus you must be careful with your spelling
car3.colour = "blue";

// document.write(car3.colour)

// or remove properties
delete car3.year;

// using objects in simple loops
for (x in car3) {
    document.write(car3[x] + "<br/>");
}


// you can also add in functions as you go
car3.stopcar = function () {
    return this.brand + " " + this.name + " goes silent";
};

document.write(car3.stopcar() + "<br/>")

//using objects for simple loops
for (x in car)) {
    document.write(car)[x] + "<br/>"
}



