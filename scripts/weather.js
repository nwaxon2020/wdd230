const weatherDesc = document.querySelector("#description");
const icon = document.querySelector("#icon-w");
const caption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.83&lon=3.61&units=imperial&appid=2a7dbed74d65853479d15c70065ab709";

async function weatherFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            display(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function display(data) {

    weatherDesc.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let descd = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', descd);
    caption.textContent = `${descd}`;
}

weatherFetch();


