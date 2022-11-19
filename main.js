addEventListener("DOMContentLoaded", (e)=>{
  
    let caja = document.querySelector(".Starbucks");
    let circulo = document.querySelector(".circle");
    let img = document.querySelector(".thumb");
    let menu = document.querySelector(".toggle");
    let navegacion = document.querySelector(".navigation");
    let redes = document.querySelector(".sci");
    let boton = document.querySelector(".content .textBox a");
    let texto = document.querySelector(".content .textBox h2 span");
    
    img.addEventListener("mouseover", (e)=>{
        if(e.target.nodeName == "IMG"){
            caja.src = e.target.dataset.img;
            let myStyle = {
                background: e.target.dataset.color
            };
            let myStyle2 = {
                color: e.target.dataset.color
            };
            Object.assign(circulo.style, myStyle);
            Object.assign(redes.style, myStyle);
            Object.assign(boton.style, myStyle);
            Object.assign(texto.style, myStyle2);
        }
    })
    menu.addEventListener("click", (e)=>{
        e.target.classList.toggle("active");
        navegacion.classList.toggle("active");
    })
})