const btnEl=document.querySelector(".btn");
btnEl.addEventListener("mouseover", (event) => {
    const x=event.pageX - btnEl.offsetleft;
    const y=event.pageY - btnEl.offsettop ;

    btnEl.style.setproperty("--xPos", x + "px");
    btnEl.style.setproperty("--yPos", y + "px");


})
