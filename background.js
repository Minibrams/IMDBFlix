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
            let rating = data.imdbRating == undefined ||
                         data == undefined            ||
                         isNaN(data.imdbRating) ? "Unavailable" :
                                                  data.imdbRating;

            currentTitle.innerHTML = getFormattedRating(title, data.imdbRating, data.Actors);
        });
    }
}, 1000);

// Given a movie title, returns the appropriate API url
// You need your own API key for this. Mine is saved in a separate document.
function getAPISearchURL(title) {
    return "https://www.omdbapi.com/?apikey=" + API_KEY + "&t=\"" + title + "\"" ; 
}

// TODO: lmfao, make this a little bit readable
function getFormattedRating(title, rating, actors) {
    let color = rating > 8   ? "green" : 
                rating > 6.5 ? "yellow" : 
                rating > 5   ? "orange" : "red";
    let ratingDiv = "<span style = \"background-color: rgba(0, 0, 0, 0.4); padding: 2px 5px 2px 5px; border-radius: 5px\">IMDB: <span style = \"font-weight: bold; color: " + color + "\">" + rating + "</span></span><br>";
    let actorsDiv = getFormattedActors(actors);
    return ratingDiv + title + actorsDiv;
} 

function getFormattedActors(actors) {
    let actorDivStart = '<span style="font-size: 12px; padding: 2px 5px 2px 5px;">(';
    let actorDivEnd = ')</span>';

    if (actors.length > 40) {
        return actorDivStart + actors.substring(0, 35) + '...' + actorDivEnd;
    } else {
        return actorDivStart + actors + actorDivEnd;
    }
}
