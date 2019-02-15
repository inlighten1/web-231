/*
============================================
; Title: Desrouleaux-assignment2.4.js
; Author: Lance Desrouleaux
; Date: 14 February 2019
; Description: Demonstrating your understanding of how to create them with and without parameters
;===========================================
*/

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.
  FirstName LastName
  Assignment 2.4
  Today's Date
  Hello my name is <your actual name goes here>!
  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.
  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Assignment 2.4"));
console.log('');


//Create a function called fullName with two parameters
function fullName(firstName, lastName){
  return firstName + lastName;
}



//Create a function called dateWriter with three parameters.
function dateWriter (year, month, day ){
  return month + " " +day +", "+ year;
}


//Create a function called formatNumber with two parameters (number and numOfFixedPositions) and return the number with the number of fixed positions you specified in the second parameter.
function formatNumber(number, numOfFixedPositions){

  return number.toFixed(numOfFixedPositions);

}


//Create a function called convertToInt with one string parameter.  Parse the string parameter and return the value as an integer.
function convertToInt (stringNumber){
  return parseInt(stringNumber);
}



//Create a function called convertToFloat with one string parameter.  Parse the string parameter and return the value as a float.
function convertToFloat(stringNumber){
  return parseFloat(stringNumber)
}



//Log the expected outputs for program.
console.log('Hello My name is '+ fullName('Lance',' Desrouleaux') +'!' );
console.log("Today's date is " + dateWriter('2019','February', '15')+" and the temperature is "+ formatNumber(33.6,1) +" degrees.");
console.log('I am ' + convertToInt('32')+ ' years old and my savings account goal is $'+ convertToFloat('99999999.55'));
