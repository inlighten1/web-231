/*
============================================
; Title: desrouleaux-exercise-6.3.js
; Author: Lance Desrouleaux
; Date: 11th March 2019
; Description: to create object  and enumerate their properties
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 6.3"));
console.log('');

//start program

var ticket = {
  id: 1001,
  name: 'Lance',
  requestor: 'Krasso'
}


console.log ('{id: ' + ticket.id + ', name: ' + ticket.name + ', requester: ' + ticket.requestor + '}');
