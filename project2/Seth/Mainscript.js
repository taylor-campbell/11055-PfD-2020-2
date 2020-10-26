



// we need to be able to wait for processing to happen - so we need to make our function asynchronis
async function main() {

    // this is the list of isbn numbers we want information for
    var isbnarr = ['0261102214', '9780547773704'];
    // this is the list of books we are going to create
    var bookarr = []

    // the normal for loop we have looked at so far
 
    let book = new bookDetail(isbnarr[0], "M");
        await book.getDetail();
        bookarr.push(book);
   

    // the for (variable of iterable) will loop through each item in an array
    for (x of bookarr) {
        document.write(x.cover());
        document.write("<br>"+"<h3>"+x.gettitle() + "</h3>")
        document.write("<p>Author: " +x.getAuthor());
        document.write("<br>"+ x.getpublisher());
        document.write("<br>"+ x.getsubject() + "</p>"+ "<br>");
    }
}
