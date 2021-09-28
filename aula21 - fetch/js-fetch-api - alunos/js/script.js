const cep = document.querySelector("#cep");

//função mostrarDados

const mostrarDados = (result) => {
    for(const campo in result) {
        if(document.querySelector('#'+ campo)){ // vai preencher os campos do input
            document.querySelector('#'+ campo).value = result[campo];               
        }
    }
}


cep.addEventListener("blur", (e) => {
    let pesquisa = cep.value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, options)
        .then(response => { 
            response.json()
            .then(dado => mostrarDados(dado))
        })
        .catch(err => console.log("Deu erro: " + err, message));
});

/* cors- Permite solicitações de origem cruzada, por exemplo,
para acessar várias APIs oferecidas por fornecedores terceirizados.
Espera-se que eles sigam o protocolo CORS .
Apenas umconjunto limitadode cabeçalhos são expostos 
no Response, mas o corpo é legível. */