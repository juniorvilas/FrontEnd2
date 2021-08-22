//1- Cria um botão e armazena na variável (botaoVerMais) 
var botaoVerMais = document.createElement("button");

//2 -cria um texto para inserir em alguma tag nesse caso no botão e armazena na variável (botaoTexto)
var botaoTexto = document.createTextNode("Ver mais");

//3 -estamos inserindo o texto(botaoTexto) no botao (botaoVerMais)
botaoVerMais.appendChild(botaoTexto);

//4 -Sintaxe para anexar um elemento filho ao DOM (Nesse caso estamos colando um botao no body)
document.body.appendChild(botaoVerMais);
//-----------------------------------------------------------------------------------
//hasAttribute()
/* Este método nos permite consultar se o elemento possui ou não um
determinado atributo. Funciona da seguinte maneira:
● Recebe um atributo.
● Retorna true se o atributo existe, se não, retorna false. */
//Selecionamos um elemento do HTML
/* let elemento = document.querySelector("#imagem");
//Consultamos se tem um atributo src
elemento.hasAttribute("src"); // true */
//-----------------------------------------------------------------------------------
/* getAttribute()
Este método nos permite obter o valor de um determinado atributo.
Funciona da seguinte maneira:
● Recebe o nome do atributo.
● Retorna o valor existente, caso contrário devolve um texto vazio (“”).
//Selecionamos um elemento do HTML
let elemento = document.querySelector("#imagem");
//Pedimos o valor do atributo
elemento.getAttribute("src"); // imagem.jpg */
//-----------------------------------------------------------------------------------
/* removeAttribute()
Este método exclui por completo o atributo e seus valores do elemento. Se não
encontrado, não faz nada. Funciona da seguinte maneira:
● Recebe o nome do atributo.
● Em qualquer caso, não retorna nenhum valor.
//Selecionamos um elemento do HTML
let elemento = document.querySelector("#imagem");
//Excluímos o valor do atributo
elemento.removeAttribute("src"); */
//------------------------------------------------------------------------------------------
/* setAttribute()
Este método nos permite adicionar um atributo com seu respectivo valor ao
elemento selecionado. Funciona da seguinte forma:
● Recebe o nome do atributo com um valor para o mesmo.
● Em qualquer dos casos, não retorna nenhum valor.
//Selecionamos um elemento do HTML
let elemento = document.querySelector("#imagem");
//Adicionamos o atributo com seu valor
elemento.setAttribute("src", "imagem.jpg"); */
//--------------------------------------------------------------------------------------