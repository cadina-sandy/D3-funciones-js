// Funcion que pinta el elemento
function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

// Selecciono el div
const ele = document.getElementById("ele1");

// Al hacer click se pinta amarillo
ele.addEventListener("click", function (event) {
  pintar(event.target, "yellow");
});
