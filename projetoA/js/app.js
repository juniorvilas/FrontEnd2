//Função para a criação de cards
let elements = 0
let imagem = ""
let titulo = ""
let descricao = ""

//Função criar Card
function criarCard() {
    
// colando o valor do input dos id selecionados nas variáveis
  let imagem = document.getElementById("input_url").value;
  let titulo = document.getElementById("input_title").value;
  
// inseri no campo selecionado pelo ID uma div com url e texto inseridos no input acima
  let cardSection = document.getElementById("card");
  cardSection.innerHTML += `  <div><img class='grid-item' src="${imagem}" alt="imagem"><p>${titulo}</p></div>`;

}


// a função pop abre o campo para inserção dos dados no formulário
function pop() {
  document.getElementById('pop').style.display='block';
}

// a função fechar fecha o formulário
function fechar() {
    document.getElementById('pop').style.display='none';
}

