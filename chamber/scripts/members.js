
const url = "https://nwaxon2020.github.io/wdd230/chamber/data/members.json";

async function memberAPI() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data.companies);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayData(members) {
    const memberCardContainer = document.querySelector("#member-cards");

    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        const name = document.createElement("h2");
        name.textContent = member.name;

        const img = document.createElement("img");
        img.setAttribute("src", member.image);
        img.setAttribute("alt", `Picture of ${member.name}`);
        img.setAttribute("loading", "lazy")

        // const imgLink = document.createElement("a");
        // imgLink.textContent = "site-Image";
        // imgLink.style.padding = "1rem";
        // imgLink.setAttribute("href", member.image);
        // imgLink.setAttribute("target", "_blank");
        // imgLink.setAttribute("class", "link-only");

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const descrip = document.createElement("p");
        descrip.textContent = member.description;

        const level = document.createElement("p");
        level.textContent = member.memblevel;

        const web = document.createElement("a");
        web.textContent = `${member.name} Site`;
        web.setAttribute("href", member.webURL);
        web.setAttribute("target", "_blank");

        memberCard.appendChild(name);
        memberCard.appendChild(img);
        memberCard.appendChild(address);
        memberCard.appendChild(phone);
        memberCard.appendChild(descrip);
        memberCard.appendChild(level);
        memberCard.appendChild(web);

        memberCardContainer.appendChild(memberCard);
    });
}

memberAPI();
