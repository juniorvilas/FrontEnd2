let textoCompleto = location.hash; // hash é uma parte do endereço da url
document.write(textoCompleto);
document.write("<br>");


/* O método split() divide uma String em uma lista ordenada de substrings,
coloca essas substrings em um array e retorna o array.
A divisão é feita procurando um padrão, onde o padrão é fornecido
 como o primeiro parâmetro na chamada do método. */

let dados = textoCompleto.split("#"); // caracter delimitador
document.write(dados); // convertido em array
document.write("<br>");

let dados1 = dados[1];
document.write(dados1);

document.write("<br>");

let dados2 = dados[2];
document.write(dados2);


document.write("<br>");


//retorna a origem do documento
let origem = location.origin;
document.write(origem);
document.write("<br>");

//pathname -> caminho do arquivo
let nomeCaminho = location.pathname; // caminho completo
document.write(nomeCaminho);
document.write("<br>");


// port -> protocolo
let protocolo = location.protocol;
document.write(protocolo);
document.write("<br>");