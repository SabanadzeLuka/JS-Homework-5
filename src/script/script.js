const lightTheme = document.getElementById("light_split_theme");
const darkTheme = document.getElementById("dark_split_theme");
const contentContainer = document.getElementById("content-container");

//themes archeva daklikebaze

lightTheme.addEventListener("click", setLightTheme);
darkTheme.addEventListener("click", setDarkTheme);


// themes 

function setLightTheme() {
    document.body.style.backgroundImage = "url(/src/images/lighttheme.jpg)";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "#ffffff"
    contentContainer.style.display = "flex";
    hideSplitThemes();
}
function setDarkTheme() {
    document.body.style.backgroundImage = "url(/src/images/darktheme.jpeg)";
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