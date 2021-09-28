function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url)
    request.send()
    return request;
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdTitulo = document.createElement("td");
    tdId.innerHTML = usuario.id
    tdTitulo.innerHTML = usuario.title

    linha.appendChild(tdId);
    linha.appendChild(tdTitulo);

    return linha;
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/todos/");
    /* let usuarios = JSON.parse(data); */
    let tabela = document.getElementById("tabela");
     data.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });

    /* usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    }); */
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()