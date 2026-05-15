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

console.log("--- OPERACIONES CON VARIABLES Y TIPOS DE DATOS ---");
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

console.log("--- CONCATENACIÓN Y CONVERSIÓN DE TIPOS DE DATOS ---");
console.log("Nombre: " + nombre + " Edad: " + edad);
console.log("Tu nombre es " + nombre + " y tenes " + edad + " años");
if (edad >= 18) {
    console.log("Sos mayor de edad")
} else {
    console.log("Sos menor de edad")
}