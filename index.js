const shareButton = document.querySelector("#share");
const tooltip = document.querySelector("#tooltip");
const triangle = document.querySelector("#triangle");


document.body.addEventListener("click", () => {
    if (document.activeElement == shareButton) {
        tooltip.classList.remove("hide")
        triangle.classList.remove("hide")
    } else {
        tooltip.classList.add("hide")
        triangle.classList.add("hide")
    }
}, true);
