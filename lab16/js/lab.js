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
        count: 1,
    },
    success: function(data) {
        console.log(data);
        let record = data[0];
        // Add title, image, and description to output
        $("#output").append("<h2>" + record.title);
        $("#output").append(`<img src='${record.url}' width='350'/>`);
        $("#output").append("<p>" + record.explanation);
    },
    error: function(xhr, status, error) { // Error handler
        console.log(error);
    }
};

// Send AJAX Request
$('#activate').click(function () {
    $.ajax(ajaxConfig);
});
