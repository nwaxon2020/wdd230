const menu = document.getElementById("menu");
const nav = document.getElementById("nav-main");

menu.addEventListener("click", () => {
    nav.classList.toggle("nav-m");
    if (nav.classList.contains("nav-m")) {

        menu.innerHTML = '<i class="fa fa-angle-double-down"></i>';

    } else {
        menu.innerHTML = '<i class="fa fa-bars"></i>';
    }
})