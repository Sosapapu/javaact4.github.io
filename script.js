const body = document.body;
const botonModo = document.getElementById("BotonModo");
const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");

botonModo.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");

  if (isDarkMode) {
    botonModo.textContent = "MODO BLANCO";
    elemento1.style.color = "white"; // Cambia el color del texto
    elemento2.style.backgroundColor = "rgb(30, 30, 35)"; // Cambia el fondo de la caja
    elemento3.classList.add("elemento-dark"); // Agrega una clase para cambiar el estilo del botón
  } else {
    botonModo.textContent = "MODO NEGRO";
    elemento1.style.color = "black"; // Cambia el color del texto de vuelta
    elemento2.style.backgroundColor = "white"; // Cambia el fondo de la caja de vuelta
    elemento3.classList.remove("elemento-dark"); // Elimina la clase de estilo del botón
  }
});
