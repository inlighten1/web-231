/*
============================================
; Title: desrouleaux-exercise-5.3.js
; Author: Lance Desrouleaux
; Date: 6th March 2019
; Description: create a Catalog which is an array-like object collection
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 5.3"));
console.log('');

//start program

var composers = [
  {
    firstName:'Moby',
    lastName:'Hall',
    genre: 'electronic',
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


composers.forEach(function(value){console.log(composers.firstName + " " +composers.lastName + " " + composers.genre +" "+ composers.rating)});
