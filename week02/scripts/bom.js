const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    if (input.value !== "") {

        input.focus();

        const li = document.createElement("li");
        const del = document.createElement("button");

        li.textContent = input.value;
        del.textContent = "x";

        li.append(del);
        list.append(li);

        del.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = "";
    }
});



/*
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("list");

// Listen for input events to dynamically update the list item
input.addEventListener("input", () => {
    if (input.value !== "") {
        button.disabled = false; // Enable the button when there is input
    } else {
        button.disabled = true; // Disable the button when the input is empty
    }
});

button.addEventListener("click", () => {
    const li = document.createElement("li");
    const del = document.createElement("button");

    li.innerHTML = input.value;
    del.textContent = "x";

    li.append(del);
    list.append(li);

    del.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
    });

    input.focus();
    input.value = "";
    button.disabled = true; // Disable the button after adding the item
});
*/
