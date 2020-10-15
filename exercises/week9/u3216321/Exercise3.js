//Exercise 3
//Creating simple loops, editing properties and adding functions for objects

//create variable property values
var car3 = {
    name:"Carnival", 
    brand:"Kia", 
    year:"2012", 
    kms:23000,
    startcar: function() {
        return this.brand + " " + this.name + " goes vroom";
    }
};

//simple write loop
for (x in car3) {
    document.write(car3[x] + "<br/>");
}

//create and delete variables as you go
car3.colour = "blue";
delete car3.year;

//create functions as you go
car3.stopcar = function () {
    return this.brand + " " + this.name + " goes silent";
};

document.write(car3.stopcar())