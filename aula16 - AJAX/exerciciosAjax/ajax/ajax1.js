document.getElementById('btnTrocarConteudo').addEventListener('click', carregarDocumento = () => {
    alert("Função Ativada");
    const xhttp = new XMLHttpRequest(); // através dele que fazemos todas as requisições
    xhttp.onload = function () { // quando carregar a pagina ele vai pegar a div com id demo, com this.reponseText vai inseri um texto
        document.getElementById('demo').innerHTML = this.responseText;
    }

    xhttp.open("GET", "arquivos/ajax_info.txt"); // ele pega o testo que esta em ajax_info.txt
    xhttp.send();// ele envia para pagina o arquivo txt 



})