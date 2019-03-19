/*
============================================
; Title: desrouleaux-exercise-7.2.js
; Author: Lance Desrouleaux
; Date: 19th March 2019
; Description: Create a constructor object
;===========================================
*/

// Declare a formatted Header
const header = require('../desrouleaux-header-test.js')
console.log(header.display("Lance", "Desrouleaux", "Exercise 7.2"));
console.log('');

//start program

//Here I create a constructor array
function employeeMaker(id, firstName, lastName, title){
    this.id= id;
    this.firstName= firstName;
    this.lastName = lastName;
    this.title = title;
}

//Here I create an array of 5 employee objects
var employees= [
    new employeeMaker(1001, "Bruce", "Wayne", "CEO"),
    new employeeMaker(1002, "Bob", "Dylan", "Marketing" ),
    new employeeMaker(1003, "David", "Rodman" , "Sales"),
    new employeeMaker(1004, "Marilyn", "Manson", "HR"),
    new employeeMaker(1005,"Malcom", "X", "Legal")
]


//Here i Iterate over the array of objects and print them to screen
for( i in employees){
    console.log(employees[i].id+' '+ employees[i].firstName +' '+ employees[i].lastName + ' '+ employees[i].title) ;
}


//End Program
