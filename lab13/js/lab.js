// index.js - Lab 12 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 17 Nov 2024
 * Liscence: Public Domain
*/

function failureManagement() {
    // variable to hold output string
    let longString = "";

    // Loop through numbers 1 through 250
    for (let num = 0; num <= 250; num++) {
        // Initialize an empty string for each number's output
        let output = "";

        // Check divisibility and append corresponding words
        if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
            output += "Welcome to Failure Management";
        }
        else if (num % 3 == 0 && num % 5 == 0) {
            output += "Welcome to Failure";
        }
        else if (num % 5 == 0 && num % 7 == 0) {
            output += "Failure Management";
        }
        else if (num % 3 == 0) {
            output += "Welcome to ";
        }
        else if (num % 5 == 0) {
            output += "Failure";
        }
        else if (num % 7 == 0) {
            output += "Management";
        }
        else if (output == "") {
            output += "";
        }
        // If output is empty, then it is not a multiple of 3, 5, or 7

        // Append the number and the output to longString
        longString += `<div>${num}: ${output}</div>`;
    }

    // Output final result to output div
    document.getElementById("output").innerHTML = longString;
}

// Call function
failureManagement();
