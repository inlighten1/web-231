/*
============================================
; Title: Desrouleaux-Exercise-5.2.js
; Author: Lance Desrouleaux
; Date: 6th March 2019
; Description: Using JavaScripts built-in forEach() function, iterate over the array and output the results.
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 5.2"));
console.log('');

//start program


//Here I declare an array with 5 string objects.
var foods = [ 'pizza', 'sushi', 'ribs', 'griot', 'goat'];

//Here I use the forEach() function to iterate over the arrat and output the results.

foods.forEach( function(value){console.log(value)});



//end program
