const baseURL = "https://nwaxon2020.github.io/wdd230/";
const linkURL = "https://nwaxon2020.github.io/wdd230/data/links.json";

const cards = document.querySelector(".card");
const ul = document.createElement("ul");

cards.append(ul);

async function getLinks() {
    try {

        const response = await fetch(linkURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks); // Access 'weeks' array in data
        } else {
            throw new Error('Failed to fetch data'); // Handle fetch error
        }

    } catch (error) {
        console.error(error);
    }
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        let li = document.createElement("li");
        week.links.forEach(link => { // Iterate over 'links' array inside each 'week'
            let a = document.createElement("a");
            a.textContent = link.title;
            a.setAttribute("href", link.url);// Set href attribute to link URL
            a.setAttribute("target", "_blank");
            li.appendChild(a);
        });
        ul.appendChild(li);
    });
}

getLinks();
