//
$(document).ready(function () {
    // wait until the document is ready to run the following code
    var data; // create a variable to hold the JSON data
    var index = 0; // set the initial index of the data to 0
    $.getJSON("data.json", function (json) {
        // get the JSON data from the specified file
        data = json; // assign the JSON data to the 'data' variable
        displayData(); // display the first object in the JSON data
    });

	
    $("#nextButton").click(function () {
        // when the 'next' button is clicked
        index = (index + 1) % data.length; // update the index to the next object in the data
        displayData(); // display the updated object
    });


    function displayData() {
        // a function to display the data
        var obj = data[index]; // get the object at the current index
        var html = "<p>" + obj.name + "</p>"; // create a string of HTML containing the 'name' property of the object
        html += "<p>" + obj.email + "</p>"; // add the 'email' property of the object to the HTML string
        html += "<p>" + obj.phone + "</p>"; // add the 'phone' property of the object to the HTML string
        $("#dataDisplay").html(html); // update the HTML of the 'dataDisplay' element with the new HTML string
    }
});
