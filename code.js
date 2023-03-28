(function () {
  const imagenes = ["1", "2", "3", "4", "5"];

  const buttons = document.querySelectorAll(".btn");
  const imgDiv = document.querySelector(".img-container");

  let contador = 0;


  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-izquierda")) {
        contador--;
        if (contador < 0) {
          contador = imagenes.length - 1;
        }
        imgDiv.style.background = `url('img/${imagenes[contador]}.jpeg')`
      }
      if (button.classList.contains("btn-derecha")) {
        contador++;
        if (contador > imagenes.length - 1) {
          contador = 0;
        }
        imgDiv.style.background = `url('img/${imagenes[contador]}.jpeg')`
      }
    });
  });
})();
