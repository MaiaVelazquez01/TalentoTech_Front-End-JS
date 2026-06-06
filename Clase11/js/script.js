function sumar (a, b) {
    console.log(`Suma: ${a} + ${b} = ${a + b}`)
}

function restar (a, b) {
    console.log(`Resta: ${a} - ${b} = ${a - b}`)
}

function multiplicar (a, b) {
    console.log(`Multiplicacion: ${a} * ${b} = ${a * b}`)
}

function dividir (a, b) {
    if (b == 0) {
        console.log("Error. No se puede dividir por cero.")
    } else {
        console.log(`Division: ${a} / ${b} = ${a / b}`)
    }
}

console.log("------ Ejercicio práctico #1 ------");
let nro1 = parseInt(prompt("Ingrese primer numero: "));
let nro2 = parseInt(prompt("Ingrese segundo numero: "));

sumar(nro1, nro2)
restar(nro1, nro2)
multiplicar(nro1, nro2)
dividir(nro1, nro2)