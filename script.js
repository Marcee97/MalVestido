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
const botonCerrarMenu           = document.querySelector('.btn-cerrar-menu');
const productosDesplegado       = document.querySelector('.ul-productos-desplegable');
const botonProductosOpciones    = document.querySelector('.boton-productos-opciones');
const hrProductos               = document.querySelector('.hr3');
const imgProductos              = document.querySelectorAll('.img-productos');
const contenedorDeCadaProducto  = document.querySelectorAll('.contenedor-ropa')
const modalBtnTalle             = document.querySelectorAll('.modal-btn-talle')

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
    seccionCarritoDesplegable.classList.toggle("carrito-activo")
})

botonBackCarrito.addEventListener('click',()=>{
    seccionCarritoDesplegable.classList.toggle("carrito-activo")
})

botonCerrarMenu.addEventListener('click',()=>{
    menuDesplegable.classList.toggle("activo")
})

botonProductosOpciones.addEventListener('click',()=>{
    
    let displayProductoDesp = window.getComputedStyle(productosDesplegado).height;
    let paddingproductodespl = window.getComputedStyle(productosDesplegado).padding;
    productosDesplegado.style.height = displayProductoDesp === '0px' ? '30vh' : '0'
    productosDesplegado.style.padding = paddingproductodespl === '0px' ? '7px' : '0px'
    
})


contenedorDeCadaProducto.forEach((e,index)=>{

    e.addEventListener('click',()=>{
        let modalDeCompras          = document.querySelector('.modal-de-compra');
        let descripcionDeProducto   = document.querySelector('.modal-descripcion-producto');
        let descripcionProductoInf  = document.querySelector('.modal-descripcion-producto-inferior')
        let nombreProducto          = document.querySelectorAll('.nombre-producto');
        let modalPrecio             = document.querySelector('.modal-precio');
        let modalInfo               = document.querySelector('.modal-info');
        let ropaInfo                = document.querySelector('.ropa-info');
        const mainPrecio            = document.querySelectorAll('.main-precio');
       
        

        let precioSeleccionado = mainPrecio[index].textContent;
        modalPrecio.textContent = precioSeleccionado;

        descripcionDeProducto.textContent = nombreProducto[index].textContent
        descripcionProductoInf.textContent = nombreProducto[index].textContent



        descripcionDeProducto.classList.add('modal-descripcion-de-producto');
        modalDeCompras.classList.toggle('modal-de-compra-activo');
        let imgCreada = document.createElement('img');
        imgCreada.classList.add('modal-img');
        let srcImgObtenido = e.firstElementChild.src
        imgCreada.src = srcImgObtenido
        modalDeCompras.appendChild(imgCreada);
        modalPrecio.style.order = 3
    })
})


modalBtnTalle.forEach((e,index)=>{
    e.addEventListener('click',(e)=>{
        let talleSeleccionado = document.querySelector('.modal-talle-seleccionado');
        e.preventDefault()
        talleSeleccionado.textContent = modalBtnTalle[index].textContent

    })
})