/*
============================================
; Title: desrouleaux-exercise-4.2.js
; Author: Lance Desrouleaux
; Date: 27 February 2019
; Description:  Knowing how and when to use arrays in a JavaScript application
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 4.2"));

console.log('');


/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/


//start program

//Here I create an array of 5 string objects
var fruitArray = ['Banana','Mango','Papaya','Watermelon','Strawberry'];

//Here I create a function that will iterate through the array and output each value using console.log
function getFruit(anArray) {
  for (i in anArray) {
    console.log(anArray[i]);


  }
}

//Here i will call the function onto the array that I created with the five strings.
getFruit(fruitArray);


//end program
