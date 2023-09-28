const campoLogin = document.querySelector('.loginInput');
const campoSenha = document.querySelector('.senhaInput');
const campoNovoLogin = document.querySelector('.novoLoginInput');
const campoNovaSenha = document.querySelector('.novaSenhaInput');
const campoSenhaConfirme = document.querySelector('.confirmeSenhaInput');

let listaLogados = [];

function registrar() {
    let nome = campoNovoLogin.value
    let nomeMaiusculo = nome.toUpperCase();
    let pos = listaLogados.indexOf(nomeMaiusculo);
    if(pos == -1){
        listaLogados.push(nomeMaiusculo);
    if(campoNovaSenha.value === campoSenhaConfirme.value) {
            const usuario = {
                login: campoNovoLogin.value,
                senha: campoNovaSenha.value
            }
            let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
            if (bancoDeDados == null) {
                bancoDeDados = [];
            }
            bancoDeDados.push(usuario);
                localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
                alert("Usuario cadastrado com sucesso! ✅");    
        } else {
            alert("❌Não Cadastrado!❌");
        }
    }else {
    alert("Esse nome já existe. Tente outro");
  };
}


function logar() {
    let mensagem = "❌ Usuario ou senha incorreta! ❌"
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuario cadastrado ate o momento"
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == campoLogin.value && usuario.senha == campoSenha.value) {
        
                localStorage.setItem("logado", JSON.stringify(usuario))    ; 
                mensagem = "Logado com sucesso!";
                window.location.href = "./home/home.html"
                break;
            }
           
        }
    }
    alert(mensagem)
}

function voltar(){
    window.history.back()
}