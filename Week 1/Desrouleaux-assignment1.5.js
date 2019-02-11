

//first names
var firstNameOne= "Bob";
var firstNameTwo = "John";
var firstNameThree = "Teddy";

//last names
var lastNameOne = "Dole"
var lastNameTwo = "Legend"
var lastNameThree = "Roosevelt"


//Addresses
var addressOne = "123 beach Road";
var addressTwo = "345 LongStride Circle";
var addressThree = "6778 Bilmpount court";

//Pay Rates
var payRateOne = 12.658
var payRateTwo = 15.77
var payRateThree = 78.44

//hire date
var hireDateOne = new Date(2010, 11, 2);
var hireDateTwo = new Date(1999, 22, 3);
var hireDateThree = new Date(1998, 8, 10);



// Format Hire Dates to  string with slashes
hireDateOne = hireDateOne.toLocaleDateString();
hireDateTwo = hireDateTwo.toLocaleDateString();
hireDateThree = hireDateThree.toLocaleDateString();


//Adjust pay rate to 2 decimal digits
payRateOne = payRateOne.toFixed(2);
payRateOne = payRateTwo.toFixed(2);
payRateOne = payRateThree.toFixed(2);


//Log all the Employees

console.log("First Name:" + firstNameOne + " Last Name: " + lastNameOne + " Address: " + addressOne + " Hire Date: " + hireDateOne + " Pay Rate:$"+ payRateOne);

console.log("First Name:" + firstNameTwo+ " Last Name: " + lastNameTwo + " Address: " + addressTwo + " Hire Date: " + hireDateTwo + " Pay Rate:$"+ payRateTwo);


console.log("First Name:" + firstNameThree + " Last Name: " + lastNameThree + " Address: " + addressThree + " Hire Date:" + hireDateThree +  " Pay Rate:$"+ payRateThree);






