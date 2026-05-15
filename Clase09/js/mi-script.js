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

console.log("--------- OPERACIONES ---------");
console.log("n1 = " + n1 + " y n2 = " + n2);
console.log("Suma: " + (n1 + n2));
console.log("Resta: " + (n1 - n2));
console.log("Multiplicación: " + (n1 * n2));
console.log("División: " + (n1 / n2));
console.log("Módulo: " + (n1 % n2));