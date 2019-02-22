/*
============================================
; Title: Desrouleaux-Exercise-3.4.js
; Author: Lance Desrouleaux
; Date: 18 February 2019
; Description: Demonstrating your understanding of how to create them with and without parameters
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 3.4"));

console.log('');

//This is the start of the program
var holdValue = 6;

//Create a function called match with two parameters, compare the parameters using the equality operation (===).  If they match return true if they do not match return false.
function logMatch(stringOne, stringTwo){
  console.log( stringOne + " and " + stringTwo+ " match!");
}

//Create a function called logMismatch with two parameters, create a string message with the two parameters saying they do not match.  Use the parameters as the values you display in the string message.
function logMismatch(stringOne, stringTwo){
  console.log(  stringOne + " and "+ stringTwo+ " do not match!");
}
// Random number generating function . Generates a number between 1 and 10
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

console.log('-- DO THE NUMBERS MATCH GAME --')

//This is a for loop to iterate through ten random numbers and one  if..else statement to check the generated values.
for (var i = 0 ; i<10 ; i++){
  var randomNum = randomNumber();

if(holdValue === randomNum){
  logMatch(holdValue,randomNum );
}else{
  logMismatch(holdValue,randomNum);
}

}
//This is end of program
