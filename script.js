



checkLightCookie();
document.getElementById("lights").addEventListener('click', (switchPress));


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function toggleLightCookie() {
    let lightMode = getCookie("lightMode");
    if (lightMode === "") {
        document.cookie = "lightMode=true;";
        console.log("cookie created: " , getCookie("lightMode"));
    }else{
        document.cookie = "lightMode=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        console.log("cookie deleted", getCookie("lightMode"));
    }
}


function checkLightCookie() {
    let lightSwitch = getCookie("lightMode");
    if (lightSwitch === "true") {
        toggleLights();
    }
}

function toggleLights(){

    let paragraphs = document.querySelectorAll("p, h1, h2, h3, a");
    for(i=0; i< paragraphs.length; i++){
        paragraphs[i].classList.toggle('dark-text');
    }
    let areas = document.querySelectorAll("main, body");
    for(i=0; i< areas.length; i++){
        areas[i].classList.toggle('dark-background');
    }
    areas = document.querySelectorAll("header, footer");
    for(i=0; i< areas.length; i++){
        areas[i].classList.toggle("grey-background");
    }

    let images = document.getElementsByClassName("row-image");
    for(i=0; i< images.length; i++){
        images[i].classList.toggle("dark-hover");
    }

}


function switchPress(){

    toggleLights();
    toggleLightCookie();
}