const menuDesplegable       = document.querySelector('.ul-menu');
const botonMenu             = document.querySelector('.icono-menu');
const botonBuscar           = document.querySelector('.icono-buscar');
const botonBack             = document.querySelector('.flecha-back');
const buscadorDesplegable   = document.querySelector('.buscador');
const titulo                = document.querySelector('.titulo');


botonMenu.addEventListener('click',()=>{
    menuDesplegable.classList.toggle("activo")
})

function displayCambios(elemento){
    let displayValue = window.getComputedStyle(elemento).display;
    elemento.style.display = displayValue === 'none' ? 'block' : 'none';
}

botonBuscar.addEventListener("click",()=>{
    buscadorDesplegable.classList.toggle('buscador-activo');
    displayCambios(titulo)
    displayCambios(botonBuscar);
    displayCambios(botonBack);
    displayCambios(botonMenu);
})

botonBack.addEventListener('click',()=>{
    buscadorDesplegable.classList.toggle('buscador-activo');
    displayCambios(titulo)
    displayCambios(botonBuscar);
    displayCambios(botonBack);
    displayCambios(botonMenu);
})

