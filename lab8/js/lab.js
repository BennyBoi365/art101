// index.js - Lab 8 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 31 Oct 2024
 * Liscence: Public Domain
*/

// Create array
var numbers = [4, 7, 5, 9];
console.log("Our Array: ", numbers);

// Function to add four
function addFour(x) {
    return x + 4;
}
// Test Function
console.log("3 + 4 = ", addFour(3));

// Add four to array
var numbersAddFour = numbers.map(addFour);
console.log("Array after adding four: ", numbersAddFour);

// Multiply array by three
var numbersTimesThree = numbers.map(function(x) {
    return x * 3;
})
// Test Anon Function
console.log("Array after multiplying by three: ", numbersTimesThree);

$("#output").html("Original Array: " + numbers + "<br>" + 
    "Add four to array: " + numbersAddFour + "<br>" +
    "Multiply array by three: " + numbersTimesThree);