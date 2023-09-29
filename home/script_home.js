let usuario = JSON.parse(localStorage.getItem("logado"))
document.querySelector("h1").innerHTML = "Olá " + usuario.login + ", <br> Essa é a home desse lindo site!"


function sair(){
    window.location.href = "file:///C:/Users/Arthur/login_e_senha/index.html"
} 


var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function enviar() {
    document.getElementById('id01').style.display = 'none';
    let tituloTarefa = document.getElementById('inputTitulo').value;
    let descricaoTarefa = document.getElementById('inputDescricao').value;
    let arquivoInput = document.getElementById('inputFile');
    let tarefa = document.getElementById('tarefaEspaco');

    if (tituloTarefa === "") {
        alert("Digite um título, por favor.");
    } else if (arquivoInput.files.length === 0) {
        alert("Selecione um arquivo.");
    } else {

        
        let arquivo = arquivoInput.files[0];
        let leitor = new FileReader();// lê a url da imagem 
        let imagemBase64; 

        leitor.onload = function () {
            imagemBase64 = leitor.result; // Atribua a imagemBase64 dentro do evento onload
            tarefa.insertAdjacentHTML('afterbegin', `
                <div class="fundoTitulo"><h2 class="tituloTarefa">${tituloTarefa}</h2></div>
                <div class="alinhamento"> <p class="descricaoTarefa">${descricaoTarefa}</p>
                <div class="espacoImagem"><img src="${imagemBase64}" alt="Imagem da tarefa"></div>
            `);
        };

        leitor.readAsDataURL(arquivo); // Lê o arquivo como um URL de dados
    }
}

