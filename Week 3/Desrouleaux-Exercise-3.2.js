/*
============================================
; Title: Desrouleaux-Exercise-3.2.js
; Author: Lance Desrouleaux
; Date: 14 February 2019
; Description: Demonstrating your understanding of how to create them with and without parameters
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 3.2"));
console.log('February 18th, 2019');
console.log('');


/*
  Expected output:
  FirstName LastName
  Exercise 3.2
  Today's Date
  // output from the match() function
  false
  true
  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/



//Create a function called match with two parameters, compare the parameters using the equality operation (===).  If they match return true if they do not match return false.
function match (matchVarOne, matchVarTwo){
  if(matchVarOne === matchVarTwo){
    return true;
  }else {
    return false;
  }


}


//Create a function called match with two parameters, compare the parameters using the equality operation (===).  If they match return true if they do not match return false.
function logMatch(stringOne, stringTwo){
  console.log( stringOne + " and " + stringTwo+ " match!");
}

//Create a function called logMismatch with two parameters, create a string message with the two parameters saying they do not match.  Use the parameters as the values you display in the string message.
function logMismatch(stringOne, stringTwo){
  console.log(  stringOne + " and "+ stringTwo+ " do not match!");
}


//Created six local variables with default values
let testVarOne = 'Truck';
let testVarTwo = 'Car';
let testVarThree = 'Four';
let testVarFour = 'Three';
let testVarFive = 'Bike';
let testVarSix = 'Bike';


//Here I tested the match function with two different combinations.
console.log(match(testVarOne,testVarThree));
console.log(match(testVarOne,testVarTwo));
console.log('');

//Using if...else statements call the match function and pass in two test variables. Tested each variable.

if(match(testVarOne,testVarTwo)){
logMatch(testVarOne, testVarTwo);
}else{
  logMismatch(testVarOne, testVarTwo)
}


if(match(testVarFive, testVarSix)){
  logMatch(testVarFive, testVarSix);
}else{
  logMismatch(testVarFive, testVarSix)
}


if(match(testVarThree, testVarFour)){
  logMatch(testVarThree, testVarFour);
}else{
  logMismatch(testVarThree, testVarFour);
}
