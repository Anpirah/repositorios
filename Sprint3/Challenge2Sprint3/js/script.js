// Aquí tu código
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

botonAgregar.addEventListener("click", function () {
  const elemento = prompt("Por favor, introduce un elemento:");

  if (elemento) {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = elemento;
    lista.appendChild(nuevoElemento);
  } else {
    console.log("No se ingresó ningún elemento.");
  }
});
