"use strict";


const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");



changeImgBtn.addEventListener("click", function() {

    if (this.textContent == "Before"){
        getImage.src= "img/Pp girls boom.jpg";
        this.textContent = "After";
    }
    else {
        getImage.src= "img/Bare bears.png";
        this.textContent = "Before";
     }
});