const campoLogin = document.querySelector('.loginInput');
const campoSenha = document.querySelector('.senhaInput');
const campoNovoLogin = document.querySelector('.novoLoginInput');
const campoNovaSenha = document.querySelector('.novaSenhaInput');
const campoSenhaConfirme = document.querySelector('.confirmeSenhaInput');
let erroTexto = document.getElementById("erroTexto");


function registrar() {

    if (campoNovoLogin.value == "" || campoNovaSenha.value == "") { // CASO OS INPUTS NÃO ESTEJAM COMPLETOS:  (1)
        erroTexto.innerHTML = `Preencha todos os espaços por favor!`
    } else {

        //  Verificar se o nome de usuário já existe no LocalStorage
        const bancoDeUsuarios = JSON.parse(localStorage.getItem("bancoDeUsuarios")) || [];
        const usernameExists = bancoDeUsuarios.some(usuario => usuario.login === campoNovoLogin.value);

        if (usernameExists) { // CASO O NOME DO USUARIO EXISTA JA (2)
            erroTexto.innerHTML = `Nome de usuario já existente, escolha outro.`
        } else

            if (campoNovaSenha.value.length <= 6) { //CASO A SENHA TENHA MENOS OU 6 LETRAS (3)
                erroTexto.innerHTML = `Sua senha deve conter mais de 6 caracteres (1 letra maiúscula, 1 minúscula, 1 número e 1 especial.)`
            } else {

                //SE A SENHA E A CONFIRMAÇAO DE SENHA BATEREM: (4)
                if (campoNovaSenha.value === campoSenhaConfirme.value) {
                        if (!/[a-z]/.test(campoNovaSenha.value) || !/[A-Z]/.test(campoNovaSenha.value) || (campoNovaSenha.value.match(/\d/g) || []).length < 1) {
                            erroTexto.innerHTML = "Sua senha deve conter pelo menos 1 letra maiúscula, 1 minúscula e 1 números.";
                        }else{
                            if (!/[!@#$%^&*]/.test(campoNovaSenha.value)) {
                                erroTexto.innerHTML = "Sua senha deve conter pelo menos 1 caráctere especial. Ex: !@#$%^&*";
                            } else{
                        const usuario = { 
                            login: campoNovoLogin.value,  // Usuario tem seu nome [Este campo será guardado no LOCALSTORAGE(BandoDeDados)]
                            senha: campoNovaSenha.value   // Usuario tem sua senha
                        }
                        // Definindo o banco de dados como variavel para guardar informaçoes nela.
                        let bancoDeUsuarios = JSON.parse(localStorage.getItem("bancoDeUsuarios"));
                        if (bancoDeUsuarios == null) {
                            bancoDeUsuarios = [];  //Caso 
                        }
                        bancoDeUsuarios.push(usuario);
                        localStorage.setItem("bancoDeUsuarios", JSON.stringify(bancoDeUsuarios)); //Transforma o JSON banco de dados em variavel 
                        //Usuario Cadastrado  
                        voltar()
                    }}
            } else {
                    // Caso a senha e a confirmaçao nao baterem:
                    erroTexto.innerHTML = `Preencha todos os espaços corretamente.`
                }
            }
    }
}

function logar() {
    let mensagem = "❌ Usuario ou senha incorreta! ❌"
    let bancoDeUsuarios = JSON.parse(localStorage.getItem("bancoDeUsuarios"));
    if (bancoDeUsuarios == null) {
        mensagem = "Nenhum usuario cadastrado ate o momento"
    } else {
        for (let usuario of bancoDeUsuarios) {
            if (usuario.login == campoLogin.value && usuario.senha == campoSenha.value) {

                localStorage.setItem("logado", JSON.stringify(usuario));
                mensagem = "Logado com sucesso!";
                window.location.href = "./agradecimento/obra.html"
                break;
            }

        }
    }
    alert(mensagem);
}

function voltar() {
    window.location.href = "../index.html"
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

