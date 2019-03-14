/*
============================================
; Title: desrouleaux-assignment-6.4.js
; Author: Lance Desrouleaux
; Date: 11th March 2019
; Description: Demonstrate nested Object
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Assignment 6.4"));
console.log('');

//start program

//Here I declare a nested object that contains ticket info and ticket holder info.
var ticket  = {

  id: 1001,
  name: 'Banaroo',
  dateCreated: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
  priority: "High",


  person:{
    id:6501,
    firstName:'Lance',
    lastName:'Desrouleeaux',
    jobTitle:'Engineer'
  }


}
//Here I print the ticketer information to the console.
console.log(`Ticket ${ ticket.id} was created on ${ticket.dateCreated} to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle}).`);


//End Program
