/* ==========================================
   Premium Landing Page
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Remove loading state
    document.body.classList.add("loaded");

    // Update footer year only if element exists
    const year = document.querySelector(".year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Animate cards
    const cards = document.querySelectorAll(".channel-btn");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(35px)";

        setTimeout(() => {

            card.style.transition =
                "opacity .6s ease, transform .6s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 250 + index * 120);

    });

});

/* ==========================================
   Mouse Glow (Desktop Only)
========================================== */

if (window.matchMedia("(pointer:fine)").matches) {

    const card = document.querySelector(".glass-card");

    document.addEventListener("mousemove", (e) => {

        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

    });

}

/* ==========================================
   Button Ripple
========================================== */

document.querySelectorAll(".channel-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

});
