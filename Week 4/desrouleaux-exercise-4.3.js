/*
============================================
; Title: desrouleaux-exercise-4.3.js
; Author: Lance Desrouleaux
; Date: 27 February 2019
; Description:  Knowing how and when to use arrays in a JavaScript application
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 4.3"));

console.log('');
/*
  Expected output:
  FirstName LastName
  Exercise 4.3
  Today's Date
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/

//start program


//Here I will declare an array of 5 string values (cars).
var carArray = [ 'bmw','honda','acura', 'lexus','toyota'];


//Here I display each of the vehicles to the screen.
console.log("-- Displaying Array Items --");
for ( i in carArray){
  console.log(carArray[i]);
}

//Here I create a function that will iterate over the array and log to the screen any match between the string value that is provided and the array that is provided as arguments.
function getValue(anyArray, value){

  for(i in anyArray){
    if(anyArray[i] === value ){
      console.log(anyArray[i]);

    }


  }

}

//Here I create a variable to carry the first string I will use for testing
var carChoiceOne = 'toyota';
console.log('')

//Here I log the results of testing the first string  with the array I created and the function.
console.log('-- Selected Value --');
getValue(carArray,carChoiceOne);
console.log('');

//Here I create a second variable to carry the second string that I will use for testing
var carChoiceTwo = 'acura';

//Here I log the results of testing the first string with the array I created and the function. 
console.log('-- Selected Value --');
getValue(carArray,carChoiceTwo);

//end program
