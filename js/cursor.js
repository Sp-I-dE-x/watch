/* ==========================================
   XIPOP V3
   cursor.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor-light");

    if (!cursor) return;

    /* Disable on touch devices */

    if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    ) {
        cursor.style.display = "none";
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.opacity = "1";

    });

    document.addEventListener("mouseleave", () => {

        cursor.style.opacity = "0";

    });

    function animate() {

        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;

        cursor.style.left = currentX + "px";
        cursor.style.top = currentY + "px";

        requestAnimationFrame(animate);

    }

    animate();

});
