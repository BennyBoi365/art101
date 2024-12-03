/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 2 December 2024
 *  License: Public Domain
 */

// Define the API endpoint
let endpoint = "https://xkcd.com/info.0.json";

// Configure the AJAX request
let ajaxConfig = {
    url: endpoint, // API URL
    method: "GET", // HTTP method
    contentType: "json", // Payload type
    data: {},
    success: function(data) {
        console.log(data);
        let comicObj = data[0];
        // Add fields to output
        $("#output").append("<h2>" + comicObj.title);
        $("#output").append(`<img src='${comicObj.img}' />`);
        $("#output").append("<p>" + comicObj.alt);
    },
    error: function(xhr, status, error) {
        console.log(error);
    }
};

// Send AJAX Request
$.ajax(ajaxConfig);