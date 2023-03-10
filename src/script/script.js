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


const planetDistances = {
    "Sun": 0,
    "Mercury": 0.39,
    "Venus": 0.72,
    "Earth": 1,
    "Mars": 1.52,
    "Jupiter": 5.20,
    "Saturn": 9.58,
    "Uranus": 19.18,
    "Neptune": 30.07
};
function calculateDistance() {
    const planet1 = document.getElementById("planet_1").value;
    const planet2 = document.getElementById("planet_2").value;
    const distance = Math.abs(planetDistances[planet1] - planetDistances[planet2]);
    document.getElementById("result").innerHTML = `Distance between the ${planet1} and the ${planet2} is ${distance} <b style="color:red">AU</b> (Astronomical Unit) `;
}

const buttonElement = document.getElementById("distancebutton");
buttonElement.addEventListener("click", calculateDistance);

function imageDisplay() {
    const planet1 = document.getElementById("planet_1").value;
    const imageElement = document.getElementById("planetImages");

    if(planet1 === "Earth") {
        imageElement.src = "/src/images/earth.png"
    }
    else if(planet1 ==="Sun") {
        imageElement.src ="/src/images/sun.png"
    }
    else if(planet1 ==="Mercury") {
        imageElement.src ="/src/images/Mercury.png"
    }
    else if(planet1 ==="Venus") {
        imageElement.src ="/src/images/Venus.png"
    }
    else if(planet1 ==="Mars") {
        imageElement.src ="/src/images/Mars.png"
    }
    else if(planet1 ==="Jupiter") {
        imageElement.src ="/src/images/Jupiter.png"
    }
    else if(planet1 ==="Saturn") {
        imageElement.src ="/src/images/Saturn.png"
    }
    else if(planet1 ==="Uranus") {
        imageElement.src ="/src/images/Uranus.png"
    }
    else if(planet1 ==="Neptune") {
        imageElement.src ="/src/images/Neptune.png"
    }
}
function imageDisplay1 () {
    const planet2 = document.getElementById("planet_2").value;
    const imageElement2 = document.getElementById("planetImages2");
    if(planet2 === "Earth") {
        imageElement2.src = "/src/images/earth.png"
    }
    else if(planet2 ==="Sun") {
        imageElement2.src ="/src/images/sun.png"
    }
    else if(planet2 ==="Mercury") {
        imageElement2.src ="/src/images/Mercury.png"
    }
    else if(planet2 ==="Venus") {
        imageElement2.src ="/src/images/Venus.png"
    }
    else if(planet2 ==="Mars") {
        imageElement2.src ="/src/images/Mars.png"
    }
    else if(planet2 ==="Jupiter") {
        imageElement2.src ="/src/images/Jupiter.png"
    }
    else if(planet2 ==="Saturn") {
        imageElement2.src ="/src/images/Saturn.png"
    }
    else if(planet2 ==="Uranus") {
        imageElement2.src ="/src/images/Uranus.png"
    }
    else if(planet2 ==="Neptune") {
        imageElement2.src ="/src/images/Neptune.png"
    }
}

window.onload = function() {
    imageDisplay();
    imageDisplay1();
}

function updateTime() {
    const timeElement = new Date();
    const timeDisplayElement = document.getElementById("UTC");
    timeDisplayElement.innerText = "LOCAL TIME:" + " " + timeElement.getHours() + ":" + timeElement.getMinutes() + ":" + timeElement.getSeconds();
  }
  
  setInterval(updateTime, 1000);

const lightElement = document.getElementById("toggleLight");
const darkElement = document.getElementById("toggleDark");

lightElement.addEventListener("click", setLightTheme);
darkElement.addEventListener("click", setDarkTheme);

