const hambug = document.getElementById("hambug");
const navigation = document.getElementById("navigation");

hambug.addEventListener("click", () => {

    navigation.classList.toggle("open");
    if (navigation.classList.contains("open")) {
        hambug.textContent = "x";
    } else {
        hambug.textContent = "=";
    }
});

const darkMode = document.querySelector("#dark-mode");

darkMode.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
});

