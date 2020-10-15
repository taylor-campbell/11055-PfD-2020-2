/*
This Code is a example of array, showing list of names of people i know
Name: Seth Arnould
Date: 7/09/2020
*/
var People = ["Jakob","Zac","James","Bailey","Aiden", "Mitch", "Euan"]; //array list called people 

//funtion to print list of array (Exersie 3)
function printlist(arraylist)
{
    document.write("Funtion print:<br> ");
    for(let i = 0; i < arraylist.length; i++) {
       
        document.write(arraylist[i] + "<br>");
    }
}

printlist(People);
//------------------------------------------------------

//Exersie 2
document.write("<br>Task 1: People with e<br>")
for(let i = 0; i < People.length; i++) {
     //check if any of the string in the array contain a e and if so write down 
    if(People[i].includes("e")){
    document.write(People[i] + "<br>");
    }
}

//-------------------------------------------------------
function setup() {
    createCanvas(1000, 700);
    background("yellow");
  }
  
  function draw() {
     
    
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 80, 80);
    }



