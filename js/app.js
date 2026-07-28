/* =====================================================
   Premium Landing Page
   app.js
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Fade in page
    requestAnimationFrame(() => {
        document.body.classList.add("loaded");
    });

    // Update copyright year
    const year = document.querySelector(".year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Stagger entrance animation
    const elements = document.querySelectorAll(
        ".badge, h1, .subtitle, .channel-btn, footer"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(24px)";

        setTimeout(() => {

            element.style.transition =
                "opacity .6s ease, transform .6s ease";

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, index * 120);

    });

    // Button interaction
    document.querySelectorAll(".channel-btn").forEach(button => {

        button.addEventListener("mouseenter", () => {

            const arrow = button.querySelector(".arrow");

            if (arrow) {
                arrow.style.transform = "translateX(8px)";
            }

        });

        button.addEventListener("mouseleave", () => {

            const arrow = button.querySelector(".arrow");

            if (arrow) {
                arrow.style.transform = "translateX(0)";
            }

        });

    });

});
