
const visit = document.querySelector("#visits");

let numberVisit = Number(window.localStorage.getItem("numVisited")) || 0;

if (numberVisit !== 0) {
    visit.textContent = `Visited: ${numberVisit}`;
} else {
    visit.textContent = "Welcome! Let us know if you have any questions.";
}

numberVisit++;

localStorage.setItem("numVisited", numberVisit);

// Time of visit updater
const lastVisit = document.querySelector("#last-visit");

let storeLastVisit = localStorage.getItem("last-visited"); // Fixed typo here

if (!storeLastVisit) {
    lastVisit.textContent = "Today";
} else {
    const lastVisitDate = new Date(storeLastVisit);
    const todayDate = new Date();
    const daysDifference = Math.floor((todayDate - lastVisitDate) / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        // Less than a day
        lastVisit.textContent = 'Back so soon! Awesome!';
    } else {
        // More than a day
        if (daysDifference > 1) {
            lastVisit.textContent = `You last visited ${daysDifference} days ago`;
        } else {
            lastVisit.textContent = `You last visited ${daysDifference} day ago`;
        }
    }
}

localStorage.setItem('last-visited', new Date().toISOString()); // Fixed typo here
