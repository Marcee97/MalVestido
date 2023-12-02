const menuDesplegable           = document.querySelector('.ul-menu');
const botonMenu                 = document.querySelector('.icono-menu');
const botonBuscar               = document.querySelector('.icono-buscar');
const botonBack                 = document.querySelector('.flecha-back');
const buscadorDesplegable       = document.querySelector('.buscador');
const titulo                    = document.querySelector('.titulo');
const botonBackCarrito         = document.querySelector('.flecha-back-seccion-carrito');
const botonCarritoShop          = document.querySelector('.icono-shop')
const seccionCarritoDesplegable = document.querySelector('.contenedor-seccion-carrito')


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

botonCarritoShop.addEventListener('click',()=>{
    seccionCarritoDesplegable.classList.toggle("contenedor-carrito-desplegado")
})
botonBackCarrito.addEventListener('click',()=>{
    seccionCarritoDesplegable.classList.toggle("contenedor-carrito-desplegado")
})

