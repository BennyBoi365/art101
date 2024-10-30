// index.js - Lab 7 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 28 Oct 2024
 * Liscence: Public Domain
*/

//sortUserName - takes input & sorts the letters of the imput's name
function sortUserName() {
     var userName = window.prompt("I just woke up from my coma to turn off 'Thick of It' by KSI. Who are you again?");
     console.log("userName =", userName);

     // Split the string to an array + sort the array + join the array to a string
     var nameSorted = userName.split('').sort().join('');
     console.log("nameSorted =", nameSorted);

     // Return sorted name
     return nameSorted
}

//Output
document.writeln("I just woke up from my coma to turn off 'Thick of It' by KSI. Who are you again?", "</br>");
document.writeln("I won't be able to remember your name. Therefore, I shall rename you: ",
    sortUserName(), " Don't forget your nametag.", "</br>");