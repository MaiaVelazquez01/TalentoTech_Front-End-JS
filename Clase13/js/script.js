const formulario = document.getElementById("form");
const nombre = document.getElementById("nombre");
const color = document.getElementById("color");

formulario.addEventListener("submit", function(event) {
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