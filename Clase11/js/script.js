function sumar(a, b) {
    console.log(`Suma: ${a} + ${b} = ${a + b}`);
}

function restar(a, b) {
    console.log(`Resta: ${a} - ${b} = ${a - b}`);
}

function multiplicar(a, b) {
    console.log(`Multiplicación: ${a} * ${b} = ${a * b}`);
}

function dividir(a, b) {
    if (b == 0) {
        console.log("Error. No se puede dividir por cero.");
    } else {
        console.log(`División: ${a} / ${b} = ${a / b}`);
    }
}

console.log("------ Ejercicio práctico #1 ------");
let nro1 = parseInt(prompt("Ingrese primer numero: "));
let nro2 = parseInt(prompt("Ingrese segundo numero: "));

sumar(nro1, nro2)
restar(nro1, nro2)
multiplicar(nro1, nro2)
dividir(nro1, nro2)

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

function mostrarProducto({ id, name, price }) {
    console.log(`ID: ${id}, Nombre: ${name}, Precio: $${price}`)
}

function mostrarCatalogo(catalogo) {
    for (let i = 0; i < catalogo.length; i++) {
    mostrarProducto(catalogo[i]);
}
}

function agregarProducto(catalogo, producto) {
    const nuevoCatalogo = [...catalogo, producto];
    return nuevoCatalogo;
}

console.log("------ Ejercicio práctico #2 ------");
let catalogo =  generarProductos();
console.log("Catálogo")
mostrarCatalogo(catalogo);

let productoOferta = {
    id: 6,
    name: "Notebook Lenovo",
    description: "Notebook 15.6'' con 16GB RAM y SSD de 512GB",
    price: 1200000
};
let nuevoCatalogo = agregarProducto(catalogo, productoOferta);
console.log("Catálogo Actualizado");
mostrarCatalogo(nuevoCatalogo);
