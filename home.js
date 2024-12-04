function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Lógica simples de verificação de login (aqui você pode adicionar mais validações)
    if (username === "admin" && password === "1234") {
        // Se o login for bem-sucedido, esconde a tela de login e mostra o conteúdo principal
        document.getElementById("login-screen").classList.add("fade-out");
        document.getElementById("console-background").classList.add("fade-out");
        document.getElementById("main-content").classList.remove("hidden");
        document.getElementById("main-content").classList.add("fade-in");

        // Exibe os cards com fade-in após o login
        document.getElementById("cards-container").classList.remove("hidden");
        document.getElementById("cards-container").classList.add("fade-in");
        document.getElementById("cards-container").style.display = "flex"; // Exibe os cards

    } else {
        alert("Credenciais incorretas");
    }
}
