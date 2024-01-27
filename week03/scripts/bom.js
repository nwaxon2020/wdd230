const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener("click", () => {
    if (input.value !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();

    }
});

function displayList(item) {
    if (input.value !== "") {

        input.focus();

        const li = document.createElement("li");
        const del = document.createElement("button");

        li.textContent = item;
        del.textContent = "x";
        del.classList.add("delete");

        li.append(del);
        list.append(li);

        del.addEventListener("click", () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    };
};

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();

}

