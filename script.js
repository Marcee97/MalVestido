const menuDesplegable           = document.querySelector('.ul-menu');
const botonMenu                 = document.querySelector('.icono-menu');
const botonBuscar               = document.querySelector('.icono-buscar');
const botonBack                 = document.querySelector('.flecha-back');
const buscadorDesplegable       = document.querySelector('.buscador');
const titulo                    = document.querySelector('.titulo');
const botonBackCarrito          = document.querySelector('.flecha-back-seccion-carrito');
const botonCarritoShop          = document.querySelector('.icono-shop');
const seccionCarritoDesplegable = document.querySelector('.contenedor-seccion-carrito');
const seccionCarrito            = document.querySelector('.section-carrito')
const botonAddCarrito           = document.querySelectorAll('.button-add-carrito');

botonAddCarrito.forEach((botones)=>{

botones.addEventListener('click',()=>{
    console.log('apretaste el boton carrito')
})
})


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
    // let displaySeccionCarrito = window.getComputedStyle(seccionCarrito).display;
    // seccionCarrito.style.display = displaySeccionCarrito === 'none' ? 'block' : 'none'
    seccionCarritoDesplegable.classList.toggle("carrito-activo")
})
botonBackCarrito.addEventListener('click',()=>{
    seccionCarritoDesplegable.classList.toggle("carrito-activo")
})

