

function criarCard() {
    

    let imagem = document.getElementById("input_url").value;
    let descricao = document.getElementById("input_descricao").value;
    let titulo = document.getElementById("input_title").value;
    

    let cardSection = document.getElementById("card");
    cardSection.innerHTML += `  <div><img src="${imagem}" alt="imagem"><h2>${titulo}</h2><p>${descricao}</p></div>`;

}

