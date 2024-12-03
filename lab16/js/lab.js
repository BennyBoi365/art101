/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 2 December 2024
 *  License: Public Domain
 */

// Define the API endpoint
let endpoint = "https://api.nasa.gov/planetary/apod";

// Configure the AJAX request
let ajaxConfig = {
    url: endpoint, // API URL
    method: "GET", // HTTP method
    contentType: "json", // Payload type
    data: {
        api_key: "JngLcxjqOJEtlSZx3UuNH5ssWCx5movzWT31rjtN", // API token
    },
    success: function(data) {
        console.log(data);
        let nasaObj = data[0];
        // Add fields to output
        $("#output").append("<h2>" + nasaObj.title);
        $("#output").append(`<img src='${nasaObj.url}' />`);
        $("#output").append("<p>" + nasaObj.explanation);
    },
    error: function(xhr, status, error) {
        console.log(error);
    }
};

// Send AJAX Request
$('#activate').click(function () {
    $.ajax(ajaxConfig);
});