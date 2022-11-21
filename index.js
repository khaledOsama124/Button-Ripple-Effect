const btnEl=document.querySelector(".btn");
btnEl.addEventListener("mouseover", (event) => {
    const x=event.pageX - btnEl.offsetleft;
    const y=event.pageY - btnEl.offsettop ;

    btnEl.style.setproperity("--xPos", x + "px");
    btnEl.style.setproperity("--yPos", y + "px");


})