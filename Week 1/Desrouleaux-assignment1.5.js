/*
============================================
; Title: Desrouleaux-assignment-1.5.js
; Author: Lance Desruleaux
; Date: 11 February 2019
; Description: Using Javascript to store and display employee information
;===========================================
*/



/*
    Expected Output:
    FOR EACH EMPLOYEE:
    Employee Number
    First Name
    Last Name
    Address
    Pay Rate
    Hire Date
*/



//This is where the first names are stored
var firstNameOne= "Bob";
var firstNameTwo = "John";
var firstNameThree = "Teddy";

//This is where the last names are stored
var lastNameOne = "Dole"
var lastNameTwo = "Legend"
var lastNameThree = "Roosevelt"





//Here is where Addresses are stored
var addressOne = "123 beach Road";
var addressTwo = "345 LongStride Circle";
var addressThree = "6778 Bilmpount court";

//this is where the Pay Rates are stored
var payRateOne = 12.658
var payRateTwo = 15.77
var payRateThree = 78.44

//This is where the hire dates are stored
var hireDateOne = new Date(2010, 11, 2);
var hireDateTwo = new Date(1999, 22, 3);
var hireDateThree = new Date(1998, 8, 10);



// This is where I Format Hire Dates to string with slashes
hireDateOne = hireDateOne.toLocaleDateString();
hireDateTwo = hireDateTwo.toLocaleDateString();
hireDateThree = hireDateThree.toLocaleDateString();


//Here I use a dunction to adjust pay rate to 2 decimal digits for each employee
payRateOne = payRateOne.toFixed(2);
payRateOne = payRateTwo.toFixed(2);
payRateOne = payRateThree.toFixed(2);


// Here all employees information is logged to screen


console.log('Employee 1');
console.log('First Name: ' + firstNameOne);
console.log('Last Name: ' + lastNameOne);
console.log('Address: ' + addressOne);
console.log('Daily Compensation: $'+payRateOne);
console.log ('Hire Date: ' + hireDateOne);

console.log(""); // new line

console.log('Employee 2');
console.log('First Name: ' + firstNameTwo);
console.log('Last Name: ' + lastNameTwo);
console.log('Address: ' + addressTwo);
console.log('Daily Compensation: $'+payRateTwo);
console.log ('Hire Date: '+hireDateTwo);

console.log(""); // new line

console.log('Employee 3');
console.log('First Name: '+firstNameThree);
console.log('Last Name: '+lastNameThree);
console.log('Address: '+addressThree);
console.log('Daily Compensation: $'+payRateThree);
console.log ('Hire Date: '+hireDateThree);


