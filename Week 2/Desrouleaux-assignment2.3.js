/*
============================================
; Title: Desrouleaux-assignment1.4.js
; Author: Lance Desrouleaux
; Date: 12 February 2019
; Description: The purpose of this program is to demonstrate the proper use of function properties
;===========================================
*/


/*
  Expected output:
  FirstName LastName
  Exercise 2.3
  Today's Date
  Hello FirstName LastName!
  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

//creating two property functions for first and last name
myName.lance = 'Lance';
myName.desrouleaux= 'Desrouleaux';


//defining a function named myName
function myName(){

  return myName.lance;

}


//Logging all of the require outputs to screen
console.log("Hello "+ myName(2)+ ' ' + myName.desrouleaux + "!");
console.log("Exercise 2.3");
console.log("February 13th, 2019");
