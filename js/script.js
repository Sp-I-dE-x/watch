// ==========================
// XIPOP Landing Page
// script.js
// ==========================

// Reveal Animation
const cards = document.querySelectorAll(".link-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>observer.observe(card));


// Ripple Effect
cards.forEach(card=>{

    card.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=card.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        card.appendChild(ripple);

        setTimeout(()=>{
            ripple.remove();
        },600);

    });

});


// Mouse Glow (Desktop Only)

const glow=document.querySelector(".cursor-glow");

if(window.matchMedia("(pointer:fine)").matches){

document.addEventListener("mousemove",(e)=>{

    glow.style.opacity="1";

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

}else{

    if(glow) glow.remove();

}


// Background Slow Zoom

const bg=document.querySelector(".background");

let scale=1.04;
let direction=1;

setInterval(()=>{

    scale+=direction*0.0005;

    if(scale>=1.08) direction=-1;

    if(scale<=1.04) direction=1;

    bg.style.transform=`scale(${scale})`;

},40);


// Current Year

document.querySelector("footer p").textContent=
`© ${new Date().getFullYear()} XIPOP`;
