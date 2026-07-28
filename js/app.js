// ===========================================
// PAGE LOADED
// ===========================================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ===========================================
// LINK RIPPLE EFFECT
// ===========================================

const cards = document.querySelectorAll(".link-card");

cards.forEach(card => {

    card.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 700);

    });

});

// ===========================================
// HERO PARALLAX
// ===========================================

const heroImage = document.querySelector(".hero img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scroll = window.pageYOffset;

    heroImage.style.transform =
        `translateY(${scroll * 0.15}px) scale(1.05)`;

});

// ===========================================
// CARD REVEAL
// ===========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".link-card").forEach(card => {

    observer.observe(card);

});

// ===========================================
// SMALL HOVER EFFECT
// ===========================================

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;

        card.style.transform =
            `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(700px) rotateX(0deg) rotateY(0deg)";

    });

});

// ===========================================
// RIPPLE CSS
// ===========================================

const style = document.createElement("style");

style.innerHTML = `
.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.45);

transform:scale(0);

animation:ripple .7s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

.show{

animation:fadeUp .8s forwards;

}
`;

document.head.appendChild(style);

// ===========================================
// CURRENT YEAR
// ===========================================

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        "© " + new Date().getFullYear() + " XIPOP";

}
