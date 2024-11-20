// script.js
document.addEventListener('DOMContentLoaded', () => {
    const responses = [
      "Sí te decidís...🤷‍♀️",
      "Supercalifragilisticoespialidoso",
      "Podría decirte que si,<br>pero no",
      "Debería decirte que no,<br> pero sí ",
      "La respuesta vendrá...<br>cuando tires una moneda al aire",
      "Recalculando.",
      "Recorcholís",
      "El día menos pensado",
      "Decretálo",
      "¿Que soy<br>Pepita de la palmera?<br>decídete",
      "A otra cosa, mariposa",
    ];

    const boxrespuesta = document.getElementById('response');
    boxrespuesta.innerHTML  = "El Oráculo esta pensando..."
    boxrespuesta.classList.add('fade-out');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      const randomResponse = responses[randomIndex];
      boxrespuesta.innerHTML  = randomResponse;
      boxrespuesta.classList.remove('fade-out');
      boxrespuesta.classList.add('fade-in');
      boxrespuesta.classList.add("respuesta");
    }, 5000);    

    let redirected = false;

    document.addEventListener("click", () => {
    if (!redirected) {
    redirected = true;
    window.location.href = "index.html";
    }})
})