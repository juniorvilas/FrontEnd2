
let url = 'http://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) =>{
        let resposta = response.json();
        console.log(resposta);
    })