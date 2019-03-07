/*
============================================
; Title: desrouleaux-exercise-5.4.js
; Author: Lance Desrouleaux
; Date: 6th March 2019
; Description: Demonstrate the map() method.
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 5.5"));
console.log('');

//start program


//Here I declare a Catalog.
var composers = [
  {
    firstName:'Moby',
    lastName:'Hall',
    genre: 'Electronic',
    rating:'10' ,

  },
  {
    firstName: 'Jermain' ,
    lastName: 'Cole' ,
    genre: 'Hip-Hop',
    rating: '10',

  },
  {
    firstName: 'Johannes',
    lastName: 'Mozart' ,
    genre: 'Classical',
    rating: '7',

  },
  {
    firstName:'Johann' ,
    lastName: 'Bach',
    genre: 'Classical',
    rating:'9' ,

  },
  {
    firstName: 'Federic' ,
    lastName: 'Chopin' ,
    genre: 'Classical',
    rating: '4' ,

  },
]

//Here I declare a new array using the maps() function to filter out the ratings and the composer last name.
var ratings = composers.map(function(composer){

  let rating = [composer.rating, composer.lastName];
  return rating;

});


//Here I sort the array in descending order.
ratings.sort(function(a,b){return b-a});


//Here I log the composer list in order of rating
console.log('--COMPOSER BY RATING--')
ratings.forEach(function(rating){
  console.log('Rating: ' + rating[0]);
  console.log('Composer: '+ rating[1]);
  console.log('');

});

console.log('');

//Here I delcare a new array using the map() function that filters by genre and last name .
var genre = composers.map(function(composer){

  let genres = [composer.genre, composer.lastName];
  return genres
});


//Here I sort the array by genre name.
genre.sort();


//Here I log the composer list in order of genre.
console.log('--COMPOSER BY GENRE--')
genre.forEach(function(genre){
  console.log('Genre: '+ genre[0]);
  console.log('Composer: ' +genre[1]);
  console.log('');
});


//end program

