function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (username === "" || password === "" || confirmPassword === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Previene que el enlace redirija a otra página
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false; // Previene que el enlace redirija a otra página
    }

    // Si todos los campos están llenos y las contraseñas coinciden, redirige a la página deseada
    window.location.href = "/menu/primero";
    return true;
}