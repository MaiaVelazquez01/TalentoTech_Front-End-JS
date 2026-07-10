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
                    <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
                </div>`;
            contenedor[0].innerHTML += productoCard;
        });
    })
    .catch (error => {
        console.error('Error en la comunicación con la API:', error);
    });