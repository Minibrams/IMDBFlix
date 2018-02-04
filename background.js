let currentTitle = null;

setInterval(() => {
    // Get the title card of the movie currently hovered over
    let hoveredTitle = document.getElementsByClassName("bob-title")[0];

    // Only want to do this if the title card has changed - save
    // on the avaiable API calls
    if (currentTitle != hoveredTitle &&
        hoveredTitle != undefined  ) {

        currentTitle = hoveredTitle;
        currentTitleJSONUrl = getAPISearchURL(currentTitle.innerHTML);

        // Receive the JSON object from OMDB
        $.getJSON(currentTitleJSONUrl, function (data) {
            // Write the result to the title card
            let title = currentTitle.innerHTML;
            let augmentedTitle = getFormattedRating(title, data.imdbRating);
            currentTitle.innerHTML = augmentedTitle;
        });
    }
}, 1000);

// Given a movie title, returns the appropriate API url
function getAPISearchURL(title) {
    return "https://www.omdbapi.com/?apikey=" + API_KEY + "&t=\"" + title + "\"" ; 
}

function getFormattedRating(title, rating) {
    return title + "<br>(IMDB: " + rating + ")";
} 
