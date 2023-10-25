let usuario = JSON.parse(localStorage.getItem("logado"))
document.getElementById("itemNome").innerHTML = "Lista de: " + usuario.login;


function sair(){
   window.location.href = "../index.html"
} 

let nomeInput = document.getElementById("inputNome");
let senhaInput = document.getElementById("inputSenha");
let idVar = 1;

function enviar(){
    let dados = {
        nome: nomeInput.value,
        senha: senhaInput.value,
        idVar: idVar.value
    }
}