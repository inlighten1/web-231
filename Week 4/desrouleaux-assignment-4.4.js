/*
============================================
; Title: desrouleaux-assignment-4.4.js
; Author: Lance Desrouleaux
; Date: 27 February 2019
; Description:  Knowing how and when to use arrays in a JavaScript application
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Assignment 4.4"));

console.log('');


//start program


//Here I declare an array with five elements .
var unitedStates = ['Florida','Texas','California','New York', 'Nevada'];


//Here I declare a function that compares two values and if they are equal return true.
function getState(valueOne,valueTwo){
  if(valueOne == valueTwo){
    return true;
  }else{
    return false;
  }
}


//Here I list the original array.
console.log(" -- ORIGINAL ARRAY --")
for( i in unitedStates){
  console.log(unitedStates[i])
}


//Here I sort the array in alphabetical order.
unitedStates= unitedStates.sort();

//here I log the sorted list to the screen.
console.log('-- SORTED ARRAY --');
for( i in unitedStates){
  console.log(unitedStates[i])
}

//here I declare a variable that will be use as my selected variable when calling the function.
var selectedValue = 'Texas'


//Here I  call the getState function and pass-in the current element of the filter loop and the value to find.
var newArray = unitedStates.filter(function(element)
{
  return getState(element,selectedValue)
});


//Here I print the new array with that has  the selected value.
console.log('')
console.log('-- SELECTED VALUE --')
for(i in newArray){
  console.log(newArray[i]);
}


//end program
