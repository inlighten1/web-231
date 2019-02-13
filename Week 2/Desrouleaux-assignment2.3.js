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


myName.lance = 'Lance';
myName.desrouleaux= 'Desrouleaux';

function myName(){

  return myName.lance;

}

function lastName(){
  return myName.desrouleaux;
}

console.log("Hello "+ myName(2)+ ' ' + lastName()+ "!");
console.log("Exercise 2.3");
console.log("February 13th,2019");
