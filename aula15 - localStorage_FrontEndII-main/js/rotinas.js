// EventListener para carregar a página e com a página carregada chama o executarRotinas
document.addEventListener("onload", executarRotinas() ); //
// Declaração da função executarRotinas()
function executarRotinas() {
    
    var localStorageKeyName = 'data';

    carregarDoLocalStorage();

// Puxa o conteudo da btn-add e espera o click para ativar a função que carrega os ID's nome, e-mail e idade
    document.querySelector("#btn-add").addEventListener('click', function () {
        var nome = document.getElementById("nome"),
            email = document.getElementById("email"),
            idade = document.getElementById("idade");

        // Validar
        if (nome.value.length === 0 || email.value.length === 0 || !parseInt(idade.value)) return;

        var usuario = {
            nome: nome.value,
            email: email.value,
            idade: idade.value
        };

        // Limpar dados
        nome.value = '';
        email.value = '';
        idade.value = '';

        // Adicionar ao localStorage
        adicionarAoLocalStorage(usuario);
    })

    // Função acessa o array usuários para armazenar no localStorage
    function adicionarAoLocalStorage(obj) {
        var usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName);

        // Se houver dados faz o parse (transforma de JSON para JS)
        if (dadosNoLocalStorage !== null) {
            usuarios = JSON.parse(dadosNoLocalStorage);
        }
        // Dados inseridos no array usuarios 
        usuarios.push(obj);
        // Faz o stringfy (transforma de JS para JSON)
        localStorage.setItem(localStorageKeyName, JSON.stringify(usuarios));

        carregarDoLocalStorage();
    }

    // Imprime na tela em forma de tabela os dados gravados no localStorage
    function carregarDoLocalStorage() {
        var usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#grid tbody");

        if (dadosNoLocalStorage !== null) {
            usuarios = JSON.parse(dadosNoLocalStorage);
        }

        // Imprime a linha da tabela com TR na tbody
        gridBody.innerHTML = '';

        // Percorre o array usuarios e grava as informações inseridas nas variáveis que desenharão na tabela
        usuarios.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                tdName = document.createElement("td"),
                tdEmail = document.createElement("td"),
                tdAge = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");

            tdName.innerHTML = x.nome;
            tdEmail.innerHTML = x.email;
            tdAge.innerHTML = x.idade;

            // Remove o conteúdo gravado no html e chama a função que irá remover do localStorage
            btnRemove.textContent = 'Remove';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function(){
                removeFromLocalStorage(i);
            });

            tdRemove.appendChild(btnRemove);

            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdAge);
            tr.appendChild(tdRemove);

            gridBody.appendChild(tr);
        });
    }

    // Função remove o dado do localStorage
    function removeFromLocalStorage(index){
        var usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName);

        usuarios = JSON.parse(dadosNoLocalStorage);

    // Utiliza-se o método splice removendo 1 item do array    
        usuarios.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(usuarios));

        carregarDoLocalStorage();
    }
}