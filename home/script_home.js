let usuario = JSON.parse(localStorage.getItem("logado"))
document.getElementById("itemNome").innerHTML = "Lista de: " + usuario.login;


function sair(){
   window.location.href = "../index.html"
} 

let nomeInput = document.getElementById("nomeInput");
let dataInput = document.getElementById("dataInput");
let idVar = 1;

// Arêa que será exibida na tela
let areaExibida = document.getElementById("areaExibe");



        //Dados

    let dados = {
        nome: nomeInput.value,
        data: dataInput.value,
        id: idVar
    };

function enviar(){
    if(nomeInput.value === ""){ //Precisa obrigatoriamente de um nome
    alert("Adicione um nome por favor!");
    }else{
    
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); // Cria a variavel encima do BancoDeDados que não foi criado
        if(bancoDeDados == null){ 
            bancoDeDados = [];  // Se o BancoDeDados não tiver nenhum dado, ele é apenas um array vazio que futuramente poderá receber algo.
        }


    //Dados são empurrados para a variavel banco de dados, que agora conterá algo.
    bancoDeDados.push(dados);
    // E então a key do localStorage rebera seus dados via variavel (Key: BancoDeDados / Value: Dados)
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

    dados.nome.value = "";
    dados.data.value = "";

    atualizaTabela(); // Essa função tambem esta no Onload do Tbody no HTML, ou seja, acontecerá toda vez que atualizar ou enviar.
}
}

function atualizaTabela(){
    
    let elementos = []; // Essa variavel representará a quantidade de dados no bancoDeDados
    elementos = JSON.parse(localStorage.getItem("bancoDeDados")) //Transformou o bancoDeDados em um objeto JS
    areaExibida.innerHTML = ""; // limpa a ârea para nao repetir o conteudo
    if(elementos == null){
        elementos = []; // Se o BancoDeDados não tiver nenhum dado, ele é apenas um array vazio que futuramente poderá receber algo.
    }
    for(let idEx = dados.id; idEx <= elementos.length; idEx++){ // Para cada Id, começando no 1, enquanto for menor ou igual á quantidade de dados dentro do banco, adiciona mais 1.
        const dados = elementos[idEx - 1]
        areaExibida.innerHTML += (`
        <tr>
        <td>
            ${idEx}
        </td>
        <td>
            ${dados.nome}
        </td>
        <td>
            ${dados.data}
        </td>
        <td>
        <a id="modal-924785" href="#modal-container-924785" role="button" class="btn" data-toggle="modal"><button class="btn btn-warning">Editar</button></a><button onclick="deletar(${idEx})" class="btn btn-danger">Excluir</button></td>
        </tr>
        `)   
        console.log(elementos.length)
        console.log(idEx)
    }

}

// IDEIA DE DELETE: Uma funçao que recebe Id. Com um for, onde recebe um IdEx como 1, que enquanto ele for menor ou igual a elementos.lenght(dados dentro do banco), ele adiciona +1 -
// no momento em que o IdEx for o mesmo que o elemnto.lenght, ele apagara o element que contem o ID igual. (essa parte final eu num sei)


// Dentro de uma lista (logados) ele vai encontrar uma chave (ID) que tem o valor de um numero (numero escolhido)

// deletar(id){
// if element.length == id {
//     splice(element)
// }
// }