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
      "El día menos pensado, será",
      "Decretálo"
    ];

    const boxrespuesta = document.getElementById('response');
    boxrespuesta.textContent = "El Oráculo esta pensando..."
    boxrespuesta.classList.add('fade-out');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      const randomResponse = responses[randomIndex];
      boxrespuesta.textContent = randomResponse;
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