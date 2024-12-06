/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 2 December 2024
 *  License: Public Domain
 */

// Code for xkcd comics modified from Keith Tran and Josh Chow
$(document).ready(function() {
    // keep track of current comic number
    let currentComicNum = 0; 
    // Function to fetch and display comic data
    function getAndPutData(comicNum) {
        //  API call and places the image and title, maybe pass the endpoint URL
        let xkcdUrl = comicNum === 0 
            ? "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json") 
            : "https://api.allorigins.win/get?url=" + encodeURIComponent(`https://xkcd.com/${comicNum}/info.0.json`);
        // AJAX request
        $.ajax({
            // The URL for the request (from the api docs)
            url: xkcdUrl,
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data expected back
            dataType: "json",
            success: function(data) { // Success handler
                console.log(data)
                let comicData = JSON.parse(data.contents);
                // Update the page with the new comic data
                $("#comic-output").html(`
                    <h1>${comicData.title}</h1>
                    <img src="${comicData.img}">
                    <p>${comicData.alt}</p>
                    <br><br>
                    <div>
                        <button id="prev-btn">Previous</button>
                        <button id="next-btn">Next</button>
                    </div>
                    <br><br>
                `);
               // Update the current comic number
               currentComicNum = comicData.num;
               // Click listener for previous and next buttons
               $("#prev-btn").click(function() {
                   if (currentComicNum > 1) {
                       getAndPutData(currentComicNum - 1); 
                   }
               });
               $("#next-btn").click(function() {
                   getAndPutData(currentComicNum + 1); 
               });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Error handler
                console.log("Error:", textStatus, errorThrown);
            }
        });
    }
    // Get latest comic 
    getAndPutData(0);
});

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
    success: function(data) { // Success handler
        console.log(data);
        let record = data[0];
        // Add title, image, and description to output
        $("#nasa-output").html(`
            <h1>${record.title}</h1>
            <img src="${record.url}" width='350'/>
            <p>${record.explanation}</p>
        `);
        
    },
    error: function(jqXHR, status, error) { // Error handler
        console.log("Error:", status, error);
    }
};

// Click listener and Send AJAX Request
$('#activate').click(function () {
    $.ajax(ajaxConfig);
});
