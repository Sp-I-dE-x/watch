/* ==========================================================
   PREMIUM LANDING PAGE
   script.js
   ========================================================== */

"use strict";

/* ===========================================
   CURSOR GLOW
=========================================== */

const glow = document.querySelector(".cursor-glow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

window.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateGlow() {

    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animateGlow);

}

animateGlow();


/* ===========================================
   GLASS CARD PARALLAX
=========================================== */

const card = document.querySelector(".glass-card");

window.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.transform =
        `perspective(1200px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

});


window.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg)";

});


/* ===========================================
   BUTTON RIPPLE
=========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

});


/* ===========================================
   STAGGER ANIMATION
=========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {

    button.style.opacity = "0";
    button.style.transform = "translateY(25px)";

    setTimeout(() => {

        button.style.transition =
            "opacity .7s ease, transform .7s ease";

        button.style.opacity = "1";
        button.style.transform = "translateY(0)";

    }, 350 + index * 150);

});


/* ===========================================
   REDUCED MOTION
=========================================== */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reduceMotion.matches) {

    document.querySelector(".background").style.animation = "none";

    glow.style.display = "none";

}


/* ===========================================
   KEYBOARD ACCESSIBILITY
=========================================== */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("focus", () => {

        btn.classList.add("focus");

    });

    btn.addEventListener("blur", () => {

        btn.classList.remove("focus");

    });

});


/* ===========================================
   IMAGE PRELOAD
=========================================== */

const preload = new Image();

preload.src = "assets/background.webp";


/* ===========================================
   PAGE LOADED
=========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
