const dates = document.getElementById("current-year");
let year = new Date();
dates.innerText = year.getFullYear();

const lastModif = document.getElementById("lastModified")
let oLastModif = new Date(document.lastModified);
lastModif.innerText = "Last Modified: " + oLastModif;
lastModif.style.color = "#ffbe0b";

const visit = document.querySelector(".visit");

let numberVisit = Number(window.localStorage.getItem("numVisited")) || 0;

if (numberVisit !== 0) {
    visit.textContent = `Visited: ${numberVisit}`;
} else {
    visit.textContent = "This is your first visit, Welcome";
}

numberVisit++;

localStorage.setItem("numVisited", numberVisit);

