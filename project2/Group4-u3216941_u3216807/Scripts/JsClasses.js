
class bookCover {

    /* this class returns the bookcover for an isbn number in correct html using the openlibrary api*/

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.size = '-' + size;
        this.key = key + "/";
        /* visit https://openlibrary.org/dev/docs/api/covers */
        this.url_a = '<img src="http://covers.openlibrary.org/b/'
        this.url_b = '.jpg" />'
    }

    size(val = "S") {
        this.size = '-' + val;
    }

    display() {

        // return the correct html for this book cover
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
        
    }

}


class bookDetail {

    /* this class returns the book details for an isbn number in correct html using the openlibrary api*/

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.key = key.toUpperCase() + ":";
        this.bc = new bookCover(isbn, size, key);
        /* visit https://openlibrary.org/dev/docs/api/books */
        this.url_a = 'https://openlibrary.org/api/books?bibkeys=';
        this.url_b = '&format=json&jscmd=data';
        /* 'https://openlibrary.org/api/books?bibkeys=ISBN:0201558025&format=json' */
        this.detail = "";
    }

    size(val = "S") {
        this.bc.size(val);
    }

    cover() {
        return this.bc.display();
    }
    
    async getDetail() {

        let dets = await getBookDetail(this.url_a, this.key, this.isbn, this.url_b);
        this.detail = dets[this.key + this.isbn];

    }
   gettitle(){
       return this.detail['title'];
       
   }
   getsubtitle(){
       if (!this.detail['subtitle'])
         return "";
       else{
       return this.detail['subtitle'] ;
         
       }
   }
    getAuthor() {
        // get the author from the json object
        return this.detail['authors'][0]['name'];
        }
    getpublisher(){
        return this.detail['publishers'][0]['name'];
    }
    getsubject(){
        return this.detail['subjects'][0]['name'];
    }
   
    

}


async function getBookDetail(url_a, key, isbn, url_b) {
    // get the url and put it into the this.detail property
    let url = url_a + key + isbn + url_b;

    try {
        const resp = await fetch(url);
        const jres = await resp.json();
        console.log(jres);

        return jres    
        
    } catch (err) {
        throw err;
    }

}