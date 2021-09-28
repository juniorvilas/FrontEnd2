//API utilizada para enviar requisições HTTP E HTTPS diretamente para um servidor
let xhr = new XMLHttpRequest();
xhr.open('GET','alunos.json');
xhr.send(null);
xhr.onreadystatechange = verificaAjax;

function verificaAjax() {
    console.log("Ready State.....: " + xhr.readyState);
    console.log("Status......: " + xhr.status);

    if(xhr.readyState == 2){
        alert("Sucesso na requisição")
        if(xhr.status == 200 || xhr.status == 304){
            let resposta = xhr.responseText;
            console.log("responseText: " + resposta);
        }else{
            alert("Erro na requisição");   
        }
    } else {
        alert("Erro na requisição");    
    }
}