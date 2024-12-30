const abrirMenu = document.getElementById('abrir-menu');
const cerrarMenu = document.getElementById('cerrar-menu');
const aside = document.getElementById('aside');
const botonesCategoria = document.querySelectorAll(".boton-categoria");

abrirMenu.addEventListener("click", function()  {
    aside.classList.add("aside-visible");
});

cerrarMenu.addEventListener("click", function() {
    aside.classList.remove("aside-visible");
});


botonesCategoria.forEach(boton => boton.addEventListener("click", function(){
    aside.classList.remove("aside-visible");
}));



