// ===============================
// Button click animation
// ===============================

document.querySelectorAll(".link-card").forEach(card => {

    card.addEventListener("mousedown", () => {

        card.style.transform = "scale(.98)";

    });

    card.addEventListener("mouseup", () => {

        card.style.transform = "";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ===============================
// Hero image subtle parallax
// ===============================

const heroImage = document.querySelector(".hero img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const offset = window.scrollY * 0.08;

    heroImage.style.transform = `translateY(${offset}px) scale(1.03)`;

});
