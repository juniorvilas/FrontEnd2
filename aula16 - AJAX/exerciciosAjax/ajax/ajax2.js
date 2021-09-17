document.getElementById('btnTrocarConteudo').addEventListener('click', carregarDocumento = () => {
    alert("Função Ativada");
    const xhttp = new XMLHttpRequest(); // através dele que fazemos todas as requisições
    xhttp.onload = function () { // quando carregar a pagina ele vai pegar a div com id demo, com this.reponseText vai inseri um texto
        const xmlDoc = this.responseXML;
        const dado = xmlDoc.getElementsByTagName("ARTIST");
        let txt = "";

        for (let i = 0; i < dado.length; i++) {
            txt = txt + dado[i].childNodes[0].nodeValue + "<br>";
        }

        document.getElementById('demo').innerHTML = txt;
    }

    xhttp.open("GET", "arquivos/cd_catalog.xml"); // ele pega o testo que esta em arquivos
    xhttp.send();// ele envia para pagina o arquivo  



})