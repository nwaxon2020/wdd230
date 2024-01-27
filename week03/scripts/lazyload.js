const dates = document.getElementById("current-year");
let year = new Date();
dates.innerText = year.getFullYear();

const lastModif = document.getElementById("lastModified")
let oLastModif = new Date(document.lastModified);
lastModif.innerText = "Last Modified: " + oLastModif;
lastModif.style.color = "#ffbe0b";