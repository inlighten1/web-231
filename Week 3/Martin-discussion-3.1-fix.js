/*
============================================
; Title: Discussion 3.1
; Author: Troy Martin
; Date: 02/19/2019
; Modified By: Troy Martin
; Description: Control Statements, create a simple program with at least two errors.
;===========================================
*/

// start program

// Require statement that imports the martin-header.js file from my root directory.
//const header = require('../martin-header.js');

/*
; Expected output:
; The processOddItems function will return the sum of the odd values in the array.
; The sum of the listOfValues array should be 45 and should be output in the final log statement.
*/

// variable declaration and assignment
var listOfValues = [1, 2, 4, 5, 6, 9, 8, 19, 20, 21];
var firstName = "Troy";
var lastName = "Martin";
var assignment = "Discussion 3.1";

// function declarations

/*
; processItems - Loop the array of items provided and return the sum of the odd numbers in the array.
; parameters - values, is an array of integers
*/
function processOddItems(values){
  // This variable is used to store the sum of the odd numbers in the array. Default the value to 0.
  var sumOfOdds = -1;

  // Use the isArray function on the Array object to test to see if the parameter passed in is a valid array
  if(Array.isArray(values) === false){
    // If the values parameter is not a valid array throw an error message.
    throw "The parameter values is not a valid array."
  }

  // Loop the array of values passed into the function using a for/in statement
  for(i in values){
    // Use the modulus operator to identify if the value in the array is an odd number (3 % 1 = 0)

    if(i % 2 === 1){
      // If the number from the array is odd add it to the function variable.
      // Using parseInt otherwise numbers are concatenated instead of summed.
         sumOfOdds += values[i];

      // Break out of the for loop and continue executing the rest of the function.


    }
  }

  // Return the sum of all the odd values found in the array
  return sumOfOdds;
}

// output

// Call the console.log() function and output a well-formatted header with a line feed
//console.log(header.display(firstName, lastName, assignment), "\n");
// Use string interpolation to output the return value from the function.
console.log(`The sum of all odd values is: ${processOddItems(listOfValues)}, the expected value is 55.`)

// end program
