const memberCard = document.getElementById("cardHold");

const listView = document.getElementById("button2");
listView.addEventListener("click", () => {
    memberCard.setAttribute("class", "list-view");
})

const gridView = document.getElementById("button1");
gridView.addEventListener("click", () => {
    memberCard.setAttribute("class", "grid-view");
})
