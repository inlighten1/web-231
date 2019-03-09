/*
=============================================
; Title: donner-discussion-5.1.js
; Author: Adam Donner
; Date: 06 March 2019
; Modified by:
; Description: Creates a simple program
; which uses .forEach and will have 2 errors.
;============================================



// start program


Expected output:
  Adam Donner
  Discussion 5.1
  Todays Date

  They have invaded!!
  -------------------
  G H
  R U
  E M
  E A
  T N
  I S
  N
  G
  S

*/

//const header = require('../donner-header.js');  // Calls the well formatted header.
//console.log(header.display("Adam", "Donner", "Discussion 5.1"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break

// This creates an array like object assigning values to g1 and g2.
 var greetings =[
   {g1: "G",g2: "H"},
   {g1: "R",g2: "U"},
   {g1: "E",g2: "M"},
   {g1: "E",g2: "A"},
   {g1: "T",g2: "N"},
   {g1: "I", g2: "S"},
   {g1: "N",g2:''},
   {g1: "G",g2:''},
   {g1: "S",g2:''}]

console.log("They have invaded!!");
console.log("-------------------");
 greetings.forEach(function(greetings){console.log(greetings.g1 + " " + greetings.g2)});  // This uses a forEach to output our message.



//end program
