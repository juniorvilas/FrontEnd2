let i = 0; // contador i recebe 0

document.querySelector("#iniciar-carga").addEventListener("click", 
    function carregar() {
        if( i == 0) {// se i for igual a 0 então rode o código abaixo:
            i = 1; // passa 1 para o i
            let elem = document.getElementById("minhaBarra"); // pega a div com id minhaBarra e coloca em elem
            let largura = 1; // Cria uma variavel largura e passa um valor 1 para iniciar em 1%
            let id = setInterval(barra, 100);
            //Executa uma função, depois de esperar um número especificado de milissegundos 
            //e repete a execução da função continuamente 
            function barra() {
                if (largura >= 100) { // se width for maior ou igual a 100 então faça o codigo abaixo:
                    clearInterval(id); // ele limpa o setInterval da variavel id
                    i=0; // ai ele seta o contador em zero
                }else {// caso width for <99 ele entra no else
                    largura++; // soma + 1 a largura
                    elem.style.width = largura + "%"; //recebe a largura e coloca no style.width
                    elem.innerText = largura + "%"; // recebe o valor da largura e escreve da div
                }
            }
        } else {

        }
        
    });