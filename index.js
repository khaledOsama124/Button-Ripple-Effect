const btnEl=document.querySelector(".btn");
btnEl.addEventListener("mouseover", (event) => {
    const x=event.pageX - btnEl.offsetleft;
    const y=event.pageY - btnEl.offsettop ;

    btnEl.style.setproperity("--XPos", x + "px");
    btnEl.style.setproperity("--YPos", y + "px");


})