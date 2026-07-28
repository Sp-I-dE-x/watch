/* ==========================================
   XIPOP V3
   particles.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Disable on small mobile devices
    if (window.innerWidth < 768) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.id = "particles";

    document.body.appendChild(canvas);

    Object.assign(canvas.style, {
        position: "fixed",
        inset: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        pointerEvents: "none",
        opacity: "0.18"
    });

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();

    window.addEventListener("resize", resize);

    const particles = [];

    const COUNT = 30;

    for (let i = 0; i < COUNT; i++) {

        particles.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            r: Math.random() * 2 + 1,

            dx: (Math.random() - 0.5) * 0.15,

            dy: (Math.random() - 0.5) * 0.15,

            a: Math.random() * 0.25 + 0.05

        });

    }

    function animate() {

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach(p=>{

            p.x += p.dx;
            p.y += p.dy;

            if(p.x<0)p.x=canvas.width;
            if(p.x>canvas.width)p.x=0;

            if(p.y<0)p.y=canvas.height;
            if(p.y>canvas.height)p.y=0;

            ctx.beginPath();

            ctx.fillStyle=`rgba(255,255,255,${p.a})`;

            ctx.arc(
                p.x,
                p.y,
                p.r,
                0,
                Math.PI*2
            );

            ctx.fill();

        });

        requestAnimationFrame(animate);

    }

    animate();

});
