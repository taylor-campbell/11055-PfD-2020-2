//Exercise 2
//Using functions within objects

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

//use function
document.write(car3.startcar() + "<br/>")

//see function
document.write(car3.startcar)