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

