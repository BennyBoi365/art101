// index.js - Lab 11 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 10 Nov 2024
 * Liscence: Public Domain
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
      // Convert our string to an array and to sort it back again
      const sortedString = inputString.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
      // additional functions added -  .replace() used to remove spaces
      // additional functions added - .toLowerCase() makes upper cases to lower cases
      return sortedString.charAt(0).toUpperCase() + sortedString.slice(1);
      // capitalizes first character and combine it with the rest of the sorted string
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