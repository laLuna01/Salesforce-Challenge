if (typeof window !== "undefined"){

    // Array to store the data
    var data = [];

    // Function to track clicks and mouse position
    function trackClickAndPosition(event) {
        var clickData = {
            timestamp: new Date().toISOString(),
            xPosition: event.pageX, // Use pageX to include scroll position in X
            yPosition: event.pageY  // Use pageY to include scroll position in Y
        };

        // Add the data to the array
        data.push(clickData);
    }

    // Add an event listener for mouse clicks
    document.addEventListener('click', trackClickAndPosition);

    // Function to save the data to CSV
    function saveDataToCSV() {
        var csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Timestamp,X Position,Y Position\n";

        data.forEach(function (click) {
            csvContent += click.timestamp + "," + click.xPosition + "," + click.yPosition + "\n";
        });

        // Using the document's title for the file name
        var fileName = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        fileName += "_click_data.csv";

        // Create a link for downloading the CSV
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);

        // Simulate a click on the link to start the download
        link.click();
    }

    // Add a button to save the data to CSV
    document.addEventListener('DOMContentLoaded', function() {
        var button = document.createElement("button");
        button.innerHTML = "Salvar em CSV";
        button.onclick = saveDataToCSV;
        document.body.appendChild(button);
    });

    // Check for click information and download before changing the page
    window.onbeforeunload = function() {
        if (data.length > 0) {
            saveDataToCSV();
        }
    };

}