
//Button on homepage that can change light or dark mode
const modeButton = document.getElementById("mode-button")
modeButton.addEventListener("click", displaySettingSwitch)

let isDay = true;

//Changes the display setting.
function displaySettingSwitch() {

    isDay = !isDay;
    const rootElement = document.querySelector(':root')
    rootElement.classList.toggle("dark-mode")
    document.getElementById("header-logo").src = "images/dark.png";
    document.getElementById("footer-logo").src = "images/B-dark.png";
    document.getElementById("home-image").src = "images/developer-orange.svg";

    //if toggled back to isDay, change back to original images.
    if(isDay) {
        document.getElementById("header-logo").src = "images/light.png";
        document.getElementById("footer-logo").src = "images/B.png";
        document.getElementById("home-image").src = "images/Developer activity-bro.svg";

    }
}


//Hamburger Navigation variables
const hamburgerButton = document.getElementById("hamburger")
const navList = document.getElementById("nav-links")
hamburgerButton.addEventListener('click', toggleNav)

//Toggle function for the hamburger button
function toggleNav() {
    navList.classList.toggle('show')
}


//Code Block Variables
const languageSelectors = document.getElementsByClassName("language-button")
const codeBlock = document.getElementById("code-block")
const pythonSnippet = document.getElementById("python-snippet")
const javascriptSnippet = document.getElementById("javascript-snippet")
const cSharpSnippet = document.getElementById("cSharp-snippet")

//initializing the code block display with "Java".
javascriptSnippet.style.display = "none"
cSharpSnippet.style.display = "none"

//Based on user clicking a language, this function displays certain code.
function selectLanguage(language) {

    const code = document.getElementById("code")

        switch(language) {
            case "python":
                pythonSnippet.style.display = "block"
                javascriptSnippet.style.display = "none"
                cSharpSnippet.style.display = "none"
                break;
            case "cSharp":
                cSharpSnippet.style.display = "block"
                pythonSnippet.style.display = "none"
                javascriptSnippet.style.display = "none"
                break;
            case "javascript":
                javascriptSnippet.style.display = "block"
                cSharpSnippet.style.display = "none"
                pythonSnippet.style.display = "none"
                break;
        }
    
}