const lightTheme = document.getElementById("light_split_theme");
const darkTheme = document.getElementById("dark_split_theme");
const contentContainer = document.getElementById("content-container");

//themes archeva daklikebaze

lightTheme.addEventListener("click", setLightTheme);
darkTheme.addEventListener("click", setDarkTheme);


// themes 

function setLightTheme() {
    document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/src/images/lighttheme.jpg)";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "#ffffff"
    contentContainer.style.display = "flex";
    hideSplitThemes();
}
function setDarkTheme() {
    document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/src/images/darktheme.jpeg)";
    document.body.style.backgroundPosition = "center";
    document.body.style.color = "#fffb00"
    document.body.style.backgroundSize = "cover";
    contentContainer.style.display = "flex";
    hideSplitThemes();
}

// splitebis gaqroba

function hideSplitThemes() {
    lightTheme.style.display = "none";
    darkTheme.style.display = "none";
}

// icons hover

const textElement = document.querySelectorAll("#hovering");
const iconElement = document.querySelectorAll("#icons");

for (let i = 0; i<textElement.length; i++ ) {
    textElement[i].addEventListener("mouseover", function () {
        iconElement[i].style.display = "flex";
    })
    textElement[i].addEventListener("mouseout", function() {
        iconElement[i].style.display = "none";
    })
}
