let currentTitle = null;

let API_KEY = "3b294e4";

setInterval(() => {    
    let hoveredTitle = document.getElementsByClassName("bob-title")[0];

    if (currentTitle != hoveredTitle &&
        hoveredTitle != undefined  ) {

        currentTitle = hoveredTitle;
        currentTitleJSONUrl = getAPISearchURL(currentTitle.innerHTML);

        console.log("Title is: " + currentTitle.innerHTML);
        console.log("API is: " + currentTitleJSONUrl);

        $.getJSON(currentTitleJSONUrl, function (data) {
            // Write the result to the page
            let title = currentTitle.innerHTML;
            currentTitle.innerHTML = title + " (IMDB: " + data.imdbRating + ")";
        });
    }
}, 1000);

function getAPISearchURL(title) {
    return "https://www.omdbapi.com/?apikey=" + API_KEY + "&t=\"" + title + "\"" ; 
}

function logResults(json) {
    console.log(json);
}
