// index.js - Lab 11 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 10 Nov 2024
 * Liscence: Public Domain
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
     // We have to convert our string to an array and back again to sort it
     return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
     // get value of input field
     const userName = $("#user-name").val();

     // now let's sort it
     const userNameSorted = sortString(userName);

     // append a new div to our output div
     $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
     $("#secret").html('<div class="text"><p>HA! You\'ve been cursed! You cannot change back!');
});