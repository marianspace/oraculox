// script.js
document.addEventListener('DOMContentLoaded', () => {
    const responses = [
      "Sí te decidís...<br>sí.",
      "Ni lo sueñes.",
      "Podría decirte que si,<br>pero no",
      "Debería decirte que no,<br> pero sí ",
      "La respuesta vendrá...<br>cuando tires una moneda al aire",
      "Recalculando.",
      "mmmmmm",
      "Recorcholís",
      "No lo creo.",
      "El día menos pensado,<br> será",
      "Decretálo",
      "¿Que soy<br>Pepita de la palmera?",
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

    document.addEventListener("mousemove", () => {
    if (!redirected) {
    redirected = true;
    window.location.href = "index.html";
    }})
})