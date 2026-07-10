const formulario = document.getElementById("form");
const nombre = document.getElementById("nombre");
const color = document.getElementById("color");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    localStorage.setItem('nombre', nombre.value);
    localStorage.setItem('color', color.value);
});

const nombreGuardado = localStorage.getItem("nombre");
const colorGuardado = localStorage.getItem("color");
const saludo = document.getElementById("saludo");

if (nombreGuardado && colorGuardado) {
    saludo.textContent = `¡Hola, ${nombreGuardado}!`;
    document.body.style.backgroundColor = colorGuardado;
}

document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();
});

var botonesAgregar = document.getElementsByClassName('agregar-carrito');
for (var i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarProducto);
}

function agregarProducto(event) {
    var producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function cargarCarrito() {
    var listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var contador = document.getElementById('contador');
    contador.innerHTML = '';
    
    contador.textContent = `Cantidad: ${carrito.length}`;

    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        var li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(li);
    }
}