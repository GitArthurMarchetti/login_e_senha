let usuario = JSON.parse(localStorage.getItem("logado"))
document.querySelector(".nota").innerHTML = "Ol á " + usuario.login + ", <br> Essa é a home desse lindo site!"