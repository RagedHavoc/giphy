// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
//var custom_api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY";
$("#search-button").click(function(){
    //console.log(search-button);

var searchTerm = $("#searchTerm").val();
let apiUrl = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY";

  fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {

    (data.data).forEach(function(data){
        console.log(data);
    $('body').append('<img src=' + data.images.original.url + '>');
    });
    
      });
});

