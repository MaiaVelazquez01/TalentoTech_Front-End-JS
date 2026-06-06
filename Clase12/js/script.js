function generarProductos() {
    let productos = [
        { id: 1, name: "Mouse Gamer", description: "Mouse inalámbrico RGB", price: 25000 },
        { id: 2, name: "Teclado Mecánico", description: "Teclado con switches red", price: 55000 },
        { id: 3, name: "Auriculares", description: "Auriculares con micrófono", price: 40000 },
        { id: 4, name: "Monitor 24''", description: "Monitor Full HD 75Hz", price: 180000 },
        { id: 5, name: "Webcam", description: "Webcam HD 1080p", price: 35000 }
    ]

    return productos;
}

window.addEventListener("load", () => {
    let contenedor = document.getElementById("contenedor-productos");
    let productos = generarProductos();

    for (let i = 0; i < productos.length; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "card";

        let nombre = document.createElement("h3");
        nombre.textContent = productos[i].name;

        let precio = document.createElement("p");
        precio.textContent = `$${productos[i].price}`;

        let boton = document.createElement("button");
        boton.textContent = "Ver descripción";
        boton.addEventListener("click", function () {
            let descripcion = tarjeta.querySelector(".descripcion");
            if (!descripcion) {
                descripcion = document.createElement("p");
                descripcion.className = "descripcion";
                descripcion.textContent = productos[i].description;
                tarjeta.appendChild(descripcion);
                boton.textContent = "Ocultar descripción";
            } else {
                descripcion.remove();
                boton.textContent = "Ver descripción";
            }
        });

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    }
});