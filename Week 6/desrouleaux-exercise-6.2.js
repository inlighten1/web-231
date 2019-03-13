/*
============================================
; Title: desrouleaux-exercise-6.2.js
; Author: Lance Desrouleaux
; Date: 11th March 2019
; Description: to create them and to set, query, delete, test, and enumerate their properties
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 6.2"));
console.log('');

//start program


var thisNumber = 9 ;
var errorMessage = ''
try{
  if (thisNumber < 22) throw " The selected number is not above 22!";
  if (thisNumber > 22) console.log('Your number is: '+ thisNumber)
}
catch(err){
  errorMessage = "Error:" + err
  console.log('Catch Clause: ' + errorMessage);
}
finally{

  console.log( 'Finally Claused Reached...')
}
