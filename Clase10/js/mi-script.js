let nombre = "Maia";
let correo = "maia@gmail.com"
let mensaje = "msj"

console.log("------ Ejercicio práctico #1 ------");
if (nombre !== "" && correo !== "" && mensaje !== "") {
    console.log("Formulario completo. Listo para enviar.");
} else {
    console.log("Faltan completar campos obligatorios.");
}

console.log("------ Ejercicio práctico #2 ------");
const productos = ['Crema corporal', 'Dentrífico', 'Desodorante', 'Shampoo', 'Acondicionador'];
for (let producto of productos) {
    alert(producto);
}
console.log("Lista de productos mostrada correctamente.")