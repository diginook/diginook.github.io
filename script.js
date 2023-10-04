const container = document.querySelector(".container");
const image = document.querySelector(".image-container img");

container.addEventListener("mousewheel", handleMouseScroll);

function handleMouseScroll(event) {
    if (event.deltaY > 0) {
        container.classList.add("active");
    }
}

// Optional: Remove the "active" class when the mouse is scrolled up
window.addEventListener("mousewheel", function (event) {
    if (event.deltaY < 0) {
        container.classList.remove("active");
    }
});
