alert("Ejercicio práctico #1");
let num1 = prompt("Ingrese el primer número: ");
while (isNaN(num1) || num1 === ""){
    num1 = prompt("Ingrese un número válido: ")
}

let num2 = prompt("Ingrese el segundo número: ");
while (isNaN(num2) || num2 === ""){
    num2 = prompt("Ingrese un número válido: ")
}

n1 = parseFloat(num1);
n2 = parseFloat(num2);

console.log("------ Ejercicio práctico #1 ------");
console.log("n1 = " + n1 + " y n2 = " + n2);
console.log("Suma: " + (n1 + n2));
console.log("Resta: " + (n1 - n2));
console.log("Multiplicación: " + (n1 * n2));
console.log("División: " + (n1 / n2));
console.log("Módulo: " + (n1 % n2));

alert("Ejercicio práctico #2");

let nombre = prompt("Ingrese nombre: ");
while(!isNaN(nombre) || nombre == "") {
    nombre = prompt("Ingrese nombre válido: ")
}

let edad = parseInt(prompt("Ingrese edad: "));
while (isNaN(edad) || edad === "" || edad <= 0){
    edad = parseInt(prompt("Ingrese edad válida: "))
}

console.log("------ Ejercicio práctico #2 ------");
console.log("Nombre: " + nombre + " Edad: " + edad);
console.log("Tu nombre es " + nombre + " y tenes " + edad + " años");
if (edad >= 18) {
    console.log("Sos mayor de edad")
} else {
    console.log("Sos menor de edad")
}

alert("Ejercicio práctico #3");

const producto1 = {
    nombre: "Crema corporal",
    precio: 22000,
    stock: 100
};

const catalogo = [
    { nombre: "Crema corporal", precio: 22000, stock: 100 },
    { nombre: "Limpiador facial", precio: 35000, stock: 8 },
    { nombre: "Shampoo", precio: 8000, stock: 300 }
];

console.log("------ Ejercicio práctico #3 ------");
console.log("El nombre del producto1 es " + producto1.nombre);
console.log("El precio del producto1 es " + producto1.precio);

console.log("Productos del catálogo:")
for (let i = 0; i < catalogo.length; i++) {
    console.log("Producto " + (i + 1) + ":")
    console.log("Nombre: " + catalogo[i].nombre)
    console.log("Precio: $" + catalogo[i].precio)
    console.log("Stock: " + catalogo[i].stock)
    console.log("----------------------");
}