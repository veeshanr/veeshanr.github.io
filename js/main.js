// "Moles hate bright colours!" was ripped off from libsdl's homepage. Sorry about that!

// Delay inorder to prevent css animation from light to dark theme while loading the website
let skipAnimation = 400;

// Local storage for storing theme preference
let myLocalStorage = localStorage;

let ul;
let wrap;

function init() {
    ul = document.querySelector('nav');
    wrap = document.querySelector('page-content wrapper');
    let rL = myLocalStorage.getItem("Theme");
    console.log(rL);
    
    // If there's any value in local storage "Theme"
    if(rL!=null && rL.length > 1 )
        setDarkTheme();
    
    // Delay before adding class "animate" to body
    setTimeout(function() {
        document.body.classList.add("animate");
    }, skipAnimation);

}

function toggleTheme()
{    
    if(document.body.classList.contains("dark-theme"))
        setLightTheme()
    else
        setDarkTheme()
}

function toggleMenu() {
    if(ul.classList.contains("shown")){
        ul.classList.remove("shown");
        wrap.classList.remove("blur");
    } else {
        ul.classList.add("shown");
        wrap.classList.add("blur");
    }
}

function setLightTheme() {
    document.body.classList.remove("dark-theme");
    myLocalStorage.removeItem("Theme");
}

function setDarkTheme() {
    document.body.classList.add("dark-theme");
    myLocalStorage.setItem("Theme", "Moles hate bright colours!");
}

window.onload = init;
