"use strict";


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.innerHTML = "<strong>BILKA!</strong>"
// });


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {

//     if (this.textContent == "Hvem ka"){
//         this.innerHTML = "<strong>BILKA!</strong>";
//     }
//     else {
//         this.innerHTML = "Hvem ka";
//      }
// });


const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function() {

    if (this.textContent == "Det rigtige sted at spare💸") {
      this.innerHTML = "<strong>365Discount</strong>";
    } else {
      this.innerHTML = "Det rigtige sted at spare💸";
    }
});