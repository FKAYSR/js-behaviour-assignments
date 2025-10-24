"use strict";


const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");



getZoomBtn.addEventListener("click", function() {

    if (this.textContent == "Zoom ind"){
        getWordElem.style.fontSize = "30rem";
        getWordElem.style.fontFamily = "Franklin Gothic Medium";
        getWordElem.style.color = "#990f02";
        this.textContent = "Zoom ud";
    }
    else {
        getWordElem.style.fontSize = "3.0rem";
        getWordElem.style.fontFamily = "";
        getWordElem.style.color = "";
        this.textContent = "Zoom ind";
     }
});

