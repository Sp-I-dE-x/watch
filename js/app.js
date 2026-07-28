/* ===========================================
   Premium Landing Page
   app.js
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Fade in page
    document.body.classList.add("loaded");

    // Smooth scroll for Join Now button
    const joinButton = document.querySelector(".primary-btn");

    if (joinButton) {

        joinButton.addEventListener("click", function (e) {

            const target = document.querySelector("#channels");

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    }

    // Keyboard accessibility
    document.querySelectorAll("a").forEach(link => {

        link.addEventListener("keyup", e => {

            if (e.key === "Enter") {

                link.click();

            }

        });

    });

    // Update footer year automatically
    const year = document.querySelector(".year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});
