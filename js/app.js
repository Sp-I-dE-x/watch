/* Ripple Effect */

.telegram-card{

    position:relative;

    overflow:hidden;

}

.ripple{

    position:absolute;

    width:20px;

    height:20px;

    border-radius:50%;

    background:rgba(255,255,255,.35);

    transform:translate(-50%,-50%) scale(0);

    animation:rippleAnimation .6s linear;

}

@keyframes rippleAnimation{

    to{

        transform:translate(-50%,-50%) scale(18);

        opacity:0;

    }

}
