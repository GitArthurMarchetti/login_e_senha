let usuario = JSON.parse(localStorage.getItem("logado"))
document.querySelector("h1").innerHTML = "Olá " + usuario.login + ", <br> Essa é a home desse lindo site!"