const campoLogin = document.querySelector('.loginInput');
const campoSenha = document.querySelector('.senhaInput');
const campoNovoLogin = document.querySelector('.novoLoginInput');
const campoNovaSenha = document.querySelector('.novaSenhaInput');
const campoSenhaConfirme = document.querySelector('.confirmeSenhaInput');


function registrar() {
    // CASO OS INPUTS NÃO ESTEJAM COMPLETOS:
    if(campoNovoLogin.value == "" && campoNovaSenha.value == ""){
        alert("Preencha todos os campos.❌") 
    }else{     //CASO OS INPUTS ESTEJAM COMPLETOS :

        //  Verificar se o nome de usuário já existe no LocalStorage
        const bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];
        const usernameExists = bancoDeDados.some(usuario => usuario.login === campoNovoLogin.value);

        if (usernameExists) { //Caso o nome de usuario ja exista:
            alert("Nome de usuário já existe. Escolha outro nome.❌");
        } else  // Caso contrario:

        //SE A SENHA E A CONFIRMAÇAO DE SENHA BATEREM:
        if(campoNovaSenha.value === campoSenhaConfirme.value) {
                const usuario = { //Definir usuario
                    login: campoNovoLogin.value,  // Usuario tem seu nome [Este campo será guardado no LOCALSTORAGE(BandoDeDados)]
                    senha: campoNovaSenha.value   // Usuario tem sua senha
                }
                // Definindo o banco de dados como variavel para guardar informaçoes nela.
                let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); 
                if (bancoDeDados == null) {
                    bancoDeDados = [];  //Caso 
                }
                bancoDeDados.push(usuario);
                    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados)); //Transforma o JSON banco de dados em variavel 
                    alert("Usuario cadastrado com sucesso! ✅");  //Usuario Cadastrado  
            } else {
                // Caso a senha e a confirmaçao nao baterem:
                alert("❌Não Cadastrado!❌"); 
            }   
        }
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

// BOTÃO DE VISUALIZAÇÃO DE SENHA

//Botão vira variavel
const btnVisu = document.querySelector("#togglePass");
//quando o botão (btnVisu) for clicado ('click'), a função togglePass será ativada
btnVisu.addEventListener('click', togglePass);

function togglePass() {
    // Se o input do campo de nova senha estiver com o tipo "Password" (pontilhiado) então ele passa a ser senha visivel
  if (campoNovaSenha.type == "password") {
    campoNovaSenha.type = "text";
    btnVisu.textContent = "🤩";
  } else { // Caso contrario, a senha esteja em forma visivel, o botao ativa o pontilhado.
    campoNovaSenha.type = "password";
    btnVisu.textContent = "😣";
  }
}