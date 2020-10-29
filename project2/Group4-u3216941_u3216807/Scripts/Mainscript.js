
// this is the list of isbn numbers we want information for
var isbnarr = ['0261102214', '9780547773704'];

// this is the list of books we are going to create
var bookarr = [];

// we need to be able to wait for processing to happen - so we need to make our function asynchronis
async function main() {

    // the normal for loop we have looked at so far
for (let i = 0; i < isbnarr.length; i++){
    let book = new bookDetail(isbnarr[i], "M");
    await book.getDetail();
    if (book.detail === undefined){
        isbnarr.pop();
        return alert("Your ISBN number is invalid - please enter a new number");
    }
    bookarr.push(book);
}


// the for (variable of iterable) will loop through each item in an array
for (x of bookarr) {
    //document.getElementById("button1").innerHTML = x.gettitle();

    const div = document.createElement('div');
    div.id = x.gettitle();
    const div2 = document.createElement('div');
    div2.id = x.getAuthor();
    document.body.appendChild(div);
    document.body.appendChild(div2);
    document.getElementById(x.gettitle()).innerHTML = x.cover();
    document.getElementById(x.getAuthor()).innerHTML = 
        "<br>"+"<h3>"+x.gettitle() +"<br> "+ x.getsubtitle() + "</h3>" + "<br>"+
        "<p>Author: " +x.getAuthor() +
        "<br>"+ x.getpublisher() +
        "<br>"+ x.getsubject() + "</p>"+ "<br>"; 
}

   
}
//fuction to add search isbn to the array list
function addisbn(){
    //setting the variable of the textbox
    var ISBNsearch = document.getElementById('searchbar');
    //check if the length of the number and if its not 10 or 13, return a alert
   if (ISBNsearch.value.length != 10 && ISBNsearch.value.length != 13)
   {
       return alert("Your ISBN number is incorrect - please enter a valid 11 or 13 digit ISBN number");
   } 
   //if the value is 13 or 10, the ISBN is added to the array list and ready
   if (ISBNsearch.value.length == 13 || ISBNsearch.value.length == 10 )
   {
    isbnarr.push(ISBNsearch.value);

    // for(let i = 0; i < isbnarr.length; i++) {
    //     document.write(isbnarr[i] + "<br>");
    // }
   }
    main();   
}


/*
Reference
https://stackoverflow.com/questions/54796122/how-to-access-an-array-stored-in-a-different-js-file
https://stackoverflow.com/questions/11104439/how-do-i-check-if-an-input-contains-an-isbn-using-javascript
*/