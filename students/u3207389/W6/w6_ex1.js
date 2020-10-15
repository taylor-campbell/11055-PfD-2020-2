// Arrays

//create
var student_names = ["Becca", "Emily"];

//write to html
document.write("The student names manually <br/>");
document.write(student_names[0] + "<br/>)");
document.write(student_names[1] + "<br/>)");



//write the length
document.write("The number of students in the array <br/>");
document.write(student_names.length + "<br/>)");



//write out using a for
document.write("The student names automatically<br/>");
for(let i = 0; i < student_names.length; i++) {
    document.write(student_names[i] + "<br/>)");
}



//add a student
document.write("add a student<br/>"); 
//the prompt function allows you to ask the user to enter a name
student_names.push(window.prompt("Enter a name"));

//write using the same for...
document.write("The student names automatically");
for(let i = 0; i < student_names.length; i++) {
    document.write(student_names[i] + "<br/>)");
}