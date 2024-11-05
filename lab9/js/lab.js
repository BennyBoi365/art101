// index.js - Lab 9 JavaScript
/*
 * Author: Ronie Antonio and Ben Awtry
 * Emails: <rantoni@ucsc.edu> and <bawtry@ucsc.edu>
 * Created: 4 Nov 2024
 * Liscence: Public Domain
*/

$(document).ready(function() {
/*   // Using jQuery, create buttons for each section (challenge, problems, reflection & results)
     $("#title").append("<button id='button-title' class='custom'>Inverted Color Palette? (TuT)</button>")
     $("#challenge").append("<button id='button-challenge' class='custom'>Inverted Color Palette? (TuT)</button>")
     $("#problems").append("<button id='button-problems' class='custom'>Inverted Color Palette? (TuT)</button>")
     $("#reflection").append("<button id='button-reflection' class='custom'>Inverted Color Palette? (TuT)</button>")
     $("#results").append("<button id='button-results' class='custom'>Inverted Color Palette? (TuT)</button>")
    
    
     // Adds an event listener for each button
     $("#button-title").click(function() {
         $("#title").toggleClass("special");
     });
    
    
     $("#button-challenge").click(function() {
         $("#challenge").toggleClass("special");
     });
    
    
     $("#button-problems").click(function() {
         $("#problems").toggleClass("special");
     });
    
    
     $("#button-reflection").click(function() {
         $("#reflection").toggleClass("special");
     });
    
    
     $("#button-results").click(function() {
         $("#results").toggleClass("special");
     });
   */
   
     // Add a button to each section with 'special-section' class
    $(".special-section").append("<button class='toggle-button custom'>Inverted Color Palette? (TuT)</button>");


    // Add a click event listener to each button inside '.special-section'
    $(".toggle-button").click(function() {
        $(this).parent().toggleClass("special");  // Toggles the 'special' class on the parent section
    });

})


    