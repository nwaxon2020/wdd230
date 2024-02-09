const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {

    const response = await fetch(url);

    const data = await response.json();

    //console.table(data)
    displayProphets(data.prophets)

}

getProphetData();

const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophets.lastname}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `picture of ${fullName}`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '340')
        portrait.setAttribute('height', '440')

        card.append(fullName);
        card.append(portrait);
        cards.append(card);

    });
}

