 function addisbn(){
    var ISBNsearch = document.getElementById('searchbar');
    isbnarr.push(ISBNsearch);

    for(let i = 0; i < isbnarr.length; i++) {
        document.write(isbnarr[i]);
    }
}