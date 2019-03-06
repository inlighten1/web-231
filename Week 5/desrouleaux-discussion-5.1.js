/*
============================================
; Title: Discussion-board-5.1.js
; Author: Lance Desrouleaux
; Date: 4th March 2019
; Description: A program to demonstrate the Map key Array
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Discussion 5.1"));
console.log('');


//star program

//Here I Declare a new Map
var users = new Map();

//Add a few keyed ovjects to the map
users.set('Jack', 'USA');
users.set( 'Maria', 'Germany');
users.set('Bruce', Thailand);
users.set('Timothy', 'Russia');


//Here I iterate through Map and print each key and value to screen
for (var [key, value] of set) {
  console.log(key + ' lives in ' + value + '.');
}

console.log('');
console.log('Bruce is ready for some change ---->>>>>')
consolelog('');


//Here I removed the old key and value for Bruce and then add in a new one for Bruce
users.delete('Lee');
users.set('Bruce', 'Switzerland');
for (var [key, value] of users) {
  console.log(key + ' lives in ' + value+ '.');
}

//End Program


