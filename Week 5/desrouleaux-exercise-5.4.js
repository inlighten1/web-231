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


var ratings = composers.map(function(composer){

  let rating = [composer.rating, composer.lastName];
  return rating;

});

ratings.sort(function(a,b){return b-a});


console.log('--COMPOSER BY RATING--')
ratings.forEach(function(rating){
  console.log('Rating: ' + rating[0]);
  console.log('Composer: '+ rating[1]);

});

console.log('');
var genre = composers.map(function(composer){

  let genres = [composer.genre, composer.lastName];
  return genres
});

genre.sort();

console.log('--COMPOSER BY GENRE--')
genre.forEach(function(genre){
  console.log('Genre: '+ genre[0]);
  console.log('composer: ' +genre[1]);
});


