/*
============================================
; Title: Desrouleaux-Exercise-3.3.js
; Author: Lance Desrouleaux
; Date: 14 February 2019
; Description: Demonstrating your understanding of how to create them with and without parameters
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 3.3"));

console.log('');



/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/
/*
let eventKeyCode = 13

if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}
*/
//This is the start of the program

//here I declared a variable and set it equal to 13
let eventKeyCode = 13;


//Here I wrote a switch statement using the if...else statement as a reference.

switch(eventKeyCode){
  case 13:
  console.log('The enter key was pressed.');
  break;

  case 16:
  console.log('The shift key was pressed.');
  break;

  case 32:
  console.log('The spacebar key was pressed.');
  break;

  case 8:
  console.log('The backspace / delete key was pressed.');
  break;

  default:
  console.log('Unrecognized key.');
  break;


}
//This is the end of the program
