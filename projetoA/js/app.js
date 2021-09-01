//Função para a criação de cards
let elements = 0
let imagem = ""
let titulo = ""
let descricao = ""

/* 

function createCard() {
    title = document.getElementById("title").value
    description = document.getElementById("description").value
    urlImg = document.getElementById("url_img").value


    let cardSection = document.getElementById("card");
    cardSection.innerHTML += `<div> <img src="${urlImg}">
                                    <h2>${title}</h2>
                                    <p>${description}<p> </div>`;
} */


function criarCard() {
    

  let imagem = document.getElementById("input_url").value;
  let titulo = document.getElementById("input_title").value;
  

  let cardSection = document.getElementById("card");
  cardSection.innerHTML += `  <div><img class='grid-item' src="${imagem}" alt="imagem"><p>${titulo}</p></div>`;

}



function pop() {
  document.getElementById('pop').style.display='block';
}

function fechar() {
    document.getElementById('pop').style.display='none';
}

