let id;
let interval = 250;
let turbobox = false;
window.onload = function () {
    "use strict";
    // start button
    let startButton = window.document.getElementById("start");//document.getElementById("start");
    startButton.onclick = function () { startFunction("nn") };

    // animation type
    let animationType = document.getElementById("animation");
    animationType.onchange = function () { animationSelector(document.getElementById("animation").value) };


    // fontsize
    let fontsize = document.getElementById("fontsize");
    fontsize.onchange = function () { changeFontSize(document.getElementById("fontsize").value) };


    // stop button 
    let stopBtn = document.getElementById("stop");
    stopBtn.onclick = function () { stop() };

    // turbo - speed
    let turbo = document.getElementById("turbo");
    turbo.onclick = function () { turboF() };

}

function startFunction(stringValue) {


    let textArea = document.getElementById("text-area");
    let textAreaValue;

    if (stringValue !== "nn") {
        textAreaValue = stringValue;
    }
    else {

        textAreaValue = textArea.innerHTML;
        if (textAreaValue === "") {
            textArea.innerHTML = "Warning: choose animation type!!!"
            return;

        }
    }
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;

    const splitted = textAreaValue.split("=====\n");
    let i = 0;
    id = setInterval(setAnimation, interval)
    function setAnimation() {
        if (i === splitted.length) {
            i = 0;
            textArea.innerHTML = splitted[i];
            i++;
        }
        else {
            textArea.innerHTML = splitted[i];
            i++;
        }

    }

}


function stop() {
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    
    clearInterval(id);
    document.getElementById("stop").disabled = true;
    // $("#stop").disabled = true;


}



function animationSelector(s) {
    document.getElementById("start").disabled = false;
    stop();
    var whichOne = s;
    let textArea = document.getElementById("text-area");
    textArea.innerHTML = ANIMATIONS[whichOne];

}

function changeFontSize(fontsize) {
    let fontsizeMap = { "Tiny": "7pt", "Small": "10pt", "Medium": "12pt", "Large": "16pt", "Extra Large": "24pt", "XXL": "32pt" };

    let textArea = document.getElementById("text-area");
    textArea.style.fontSize = fontsizeMap[fontsize];

}
function turboF() {
    turbobox = document.getElementById("turbo").checked;
    if (turbobox === true) {
        interval = 50;
    }
    else {
        interval = 250;
    }

    // animationSelector(document.getElementById("animation").value);
    stop();
    startFunction(ANIMATIONS[document.getElementById("animation").value]);

}




