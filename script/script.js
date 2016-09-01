console.log('sourced');
var searchResults=[];
$(document).ready(function(){
console.log('in doc ready');

$('#searchButton').on('click', function(){
var movieName = $('#movieNameIn').val();
if (movieName == ''){
  alert('Please Enter A movie Title');
}
else{
console.log('searching for : ', movieName);
var searchURL = 'http://www.omdbapi.com/?s=' + movieName;
console.log(searchURL);
$.ajax({
  url: searchURL,
  datatype: 'JSON',
  success: function(data){
    console.log('ajax success data:', data.Search);

    searchResults = data.Search;
displayMovies();
  }
});
}
});
  $('#clearButton').on('click', function(){
    console.log('Removing:', searchResults);
    $('#outputMovies').empty();
  });
});
var displayMovies = function(){
console.log('in displayMovies', searchResults);
  $('#outputMovies').empty();

for (var i = 0; i < searchResults.length; i++) {
var movieDisplay = '<h2>' + '<img src="' + searchResults[i].Poster + '">' + '<br> Title: ' + searchResults[i].Title + '<br> Type: ' +
searchResults[i].Type + '<br> Year: ' + searchResults[i].Year + '<br> imdbID: ' + searchResults[i].imdbID + '</h2>';
$('#outputMovies').append(movieDisplay);
}


};
