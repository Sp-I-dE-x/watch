window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.querySelector(".year").textContent = new Date().getFullYear();
