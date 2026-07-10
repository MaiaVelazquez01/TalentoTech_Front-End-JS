fetch('https://fakestoreapi.com/products')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const contenedor = document.getElementsByClassName("contenedor-productos");
        data.forEach(producto => {
            const productoCard = `
                <div class="card">
                    <img src="${producto.image}" class="product-img" alt="${producto.title}">
                    <h3 class="product-top">${producto.title}</h3>
                    <p>Precio: $${producto.price}</p>
                    <button class="agregar-carrito" data-id="${producto.id}" data-nombre="${producto.title}" data-precio="${producto.price}">Añadir al carrito</button>
                </div>`;
            contenedor[0].innerHTML += productoCard;
        });
        var botonesAgregar = document.getElementsByClassName('agregar-carrito');
        for (var i = 0; i < botonesAgregar.length; i++) {
            botonesAgregar[i].addEventListener('click', agregarProducto);
        }
    })
    .catch(error => {
        console.error('Error en la comunicación con la API:', error);
    });

document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();
});

function agregarProducto(event) {
    var producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert("Producto agregado al carrito!")
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