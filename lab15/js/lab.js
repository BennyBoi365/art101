/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 25 November 2024
 *  License: Public Domain
 */

// URL for Yes or No? API
const URL = "https://yesno.wtf/api";

// Attach click action to button
$('#activate').click(function () {
    // Using the core $.ajax() method
    $.ajax({
        url: URL,
        // No additional data to send
        data: {},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json"
    })
    // If the request succeeds
    .done(function (data) {
        console.log(data); // Log the API response

        // Make the JSON data printable (I didn't know how to do it so I
        // got inspiration from Wes Modes and a little ChatGPT for help)
        var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";

        // Update the webpage dynamically with API data
        //$("#output").append(printableData); // Display raw JSON data
        $("#output").append("<p>The answer is: <b>" + data.answer + "</b></p>");
        $("#output").append("<img src='" + data.image + "' alt='Response Image'>"); 

        // Example title placeholder (using the 'answer' field as a title)
        //$("#title").html("The Answer is: " + data.answer);

        // Add a fun explanation (:
        $("#output").append("<p>Explanation: Sometimes you just need a simple yes or no!</p>");
    })
    // If the request fails
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").html('<p>Error fetching data. Please try again.</p>');
    });
});