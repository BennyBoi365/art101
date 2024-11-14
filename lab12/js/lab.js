// index.js - Lab 11 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 12 Nov 2024
 * Liscence: Public Domain
*/

// Return House
// depending on length mod 4
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor" + "<br>" + "<h4>House of the Brave and Determined</h4>"
    }
    else if (mod == 1) {
        return "Ravenclaw" + "<br>" + "<h4>House of the Wise and Curious</h4>"
    }
    else if (mod == 2) {
        return "Slytherin" + "<br>" + "<h4>House of the Ambitious and Cunning</h4>"
    }
    else if (mod == 3) {
        return "Hufflepuff" + "<br>" + "<h4>House of the Loyal and Kind</h4>"
    }
}

var myButton = document.getElementById("submit");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})