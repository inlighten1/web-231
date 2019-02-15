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
//Create variable for first and last name which uses function to combine them.

var name = fullName('Lance', ' Desrouleaux')

//Create a function called dateWriter with three parameters.
function dateWriter (year, month, day ){
  return month + " " +day +", "+ year;
}
//Create variables for day, month  and year

var year = "2019";
var month = "February";
var day = "15";


//Create a function called formatNumber with two parameters (number and numOfFixedPositions) and return the number with the number of fixed positions you specified in the second parameter.
function formatNumber(number, numOfFixedPositions){

  return number.toFixed(numOfFixedPositions);

}
//Create variable for temperature

var temperature = 33.6;

//Create a function called convertToInt with one string parameter.  Parse the string parameter and return the value as an integer.
function convertToInt (stringNumber){
  return parseInt(stringNumber);
}

//Create a variable for age
var age = convertToInt("32");

//Create a function called convertToFloat with one string parameter.  Parse the string parameter and return the value as a float.
function convertToFloat(stringNumber){
  return parseFloat(stringNumber)
}

//Create a variable for savings goal
var savingsGoal = '999999.55';


//Log the expected outputs for program.
console.log('Hello My name is '+ name +'!' );
console.log('');
console.log("Today's date is " + dateWriter(year, month, day)+" and the temperature is "+ formatNumber(temperature,1) +" degrees.");
console.log('');
console.log('I am ' + age + ' years old and my savings account goal is $'+ convertToFloat(savingsGoal));
