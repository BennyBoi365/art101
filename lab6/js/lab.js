// index.js - Lab 6 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 22 Oct 2024
 * Liscence: Public Domain
*/

// Define Array
myTransport = ["Kia Soul", " Metro Bus", " Trains", " Planes"];

// Create object for main ride
myMainRide = {
     make : "Kia",
     model : "Soul",
     color : "Green",
     year : 2012,
     age : function() {
         return 2024 - this.year;
     }
}

// output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
