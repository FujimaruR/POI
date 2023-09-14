document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("FormLogin");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Iniciando sesión.....")
        // Aquí puedes establecer la URL de la página a la que deseas redirigir al usuario.
        const nuevaPagina = "/Front/mensajes.html";
        // Redirecciona a la nueva página.
        window.location.href = nuevaPagina;
    });
});