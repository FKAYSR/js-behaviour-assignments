"use strict"


const nightColorBtn = document.getElementById("nightColorBtn");
const mediumColorBtn = document.getElementById("mediumColorBtn");
const lightColorBtn = document.getElementById("lightColorBtn");
const body = document.body;


nightColorBtn.addEventListener("click", () => {
    body.style = "background: #121212";
})

mediumColorBtn.addEventListener("click", () => {
    body.style = "background: #777B7E";
})

lightColorBtn.addEventListener("click", () => {
   body.style = "background: #FFFFFF"; 
})
