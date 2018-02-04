let currentTitle = null;

let API_KEY = "3b294e4";

setInterval(() => {    
    let hoveredTitle = document.getElementsByClassName("bob-title")[0];

    if (currentTitle != hoveredTitle &&
        hoveredTitle != undefined  ) {

        currentTitle = hoveredTitle;
        currentTitleJSONUrl = getAPISearchURL(currentTitle);

        
    }
}, 1000);

function getAPISearchURL(title) {
    console.log("Reading from: www.omdbapi.com/?apikey=" + API_KEY + "&t=" + title);
    return "www.omdbapi.com/?apikey=" + API_KEY + "&t=" + title; 
}
