// index.js - Lab 12 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 12 Nov 2024
 * Liscence: Public Domain
*/

// Return Gryffindor, Ravenclaw, Slytherin, or Hufflepuff
// depending on length mod 4
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor" + "<br>" + "<h4>House of the Brave and Determined</h4>" + "<img class='crest' src='./img/gryffindor.png'>"
    }
    else if (mod == 1) {
        return "Ravenclaw" + "<br>" + "<h4>House of the Wise and Curious</h4>" + "<img class='crest' src='./img/ravenclaw.png'>"
    }
    else if (mod == 2) {
        return "Slytherin" + "<br>" + "<h4>House of the Ambitious and Cunning</h4>" + "<img class='crest' src='./img/slytherin.png'>"
    }
    else if (mod == 3) {
        return "Hufflepuff" + "<br>" + "<h4>House of the Loyal and Kind</h4>" + "<img class='crest' src='./img/hufflepuff.png'>"
    }
}

//Click listener for submit button and display house
var myButton = document.getElementById("submit");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})

//J.K. Rowling sucks