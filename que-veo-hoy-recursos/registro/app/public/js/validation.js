function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Previene que el enlace redirija a otra página
    }

    // Si todos los campos están llenos, redirige a la página deseada
    window.location.href = "/menu/primero";
    return true;
}