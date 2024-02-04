const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const err = document.querySelector("#error-message");

password2.addEventListener("focusout", () => {
    if (password1.value !== password2.value) {
        err.style.display = "block";
        password2.value = "";

        password2.addEventListener("input", () => {
            if (password1.value !== password2.value) {
                err.style.display = "block";
            } else {
                err.style.display = "none";
            }
        })
    }
    else {
        err.style.display = "none";
    }
})
