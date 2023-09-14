document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("FormLogin");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Iniciando sesión.....")
        const nuevaPagina = "/Front/mensajes.html";
        window.location.href = nuevaPagina;
    });
});