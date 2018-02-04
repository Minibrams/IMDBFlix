console.log("We're through boysss");

setInterval(() => {    
    let titleDivs = document.getElementsByClassName("bob-title");

    for (let i = 0; i < titleDivs.length; i++) {
        console.log(titleDivs[i].innerHTML);
    }
}, 10);