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

console.log("--Displaying Array Items--");
for ( i in carArray){
  console.log(carArray[i]);
}


function getValue(anyArray, value){

  for(i in anyArray){
    if(anyArray[i] === value ){
      console.log(anyArray[i]);

    }


  }

}
var carChoiceOne = 'toyota';
console.log('')
console.log('--Selected Value--');
getValue(carArray,carChoiceOne);
console.log('');


var carChoiceTwo = 'acura';

console.log('--Selected Value--');
getValue(carArray,carChoiceTwo);




