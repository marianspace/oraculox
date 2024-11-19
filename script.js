// script.js
document.addEventListener('DOMContentLoaded', () => {
    const responses = [
      "Sí te decidís, sí.",
      "Ni lo sueñes.",
      "Podría decirte que si, pero no ",
      "Debería decirte que no, pero sí ",
      "La respuesta vendrá cuando tires una moneda al aire",
      "Recalculando.",
      "mmmmmm",
      "Recorcholis",
      "No lo creo.",
      "El día menos pensado.",
      "Decretálo"
    ];

    const boxrespuesta = document.getElementById('response');


    boxrespuesta.textContent = "El Oráculo esta pensando..."

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      const randomResponse = responses[randomIndex];
      boxrespuesta.textContent = randomResponse;
    }, 5000);
  });
  