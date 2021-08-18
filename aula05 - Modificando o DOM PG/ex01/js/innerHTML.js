/*.innerHTML----------------------------------------------------------------------------
 Se quisermos ler ou modificar o conteúdo de uma tag HTML, 
vamos usar esta propriedade: .innerHTML */

/* document.querySelector('div.nome').innerHTML = '<strong>Daniel</strong>'; */

/* Se quisermos modificar o conteúdo de uma tag HTML, vamos usar esta
propriedade:.innerHTML +=
Dessa forma, estamos adicionando ao div com a classe de compras, a
palavra "Pipoca": */


//OBS:não rodou
document.querySelector('div.compras').innerHTML += '<i>Pipoca</i>';

/* 
.innerText--------------------------------------------------------------------------------------
Se quisermos ler ou modificar o texto de uma tag HTML, vamos usar esta
propriedade: */

document.querySelector('div.nome').innerText = 'Maria';

/* 
Se quisermos adicionar conteúdo ao texto de uma tag HTML, usaremos
esta propriedade da seguinte maneira:  */

document.querySelector('div.nome').innerText += 'Messi';

/* 
Propriedade Style ---------------------------------------------------------------------
Nos permite ler e sobrescrever as regras CSS que são aplicadas a um
elemento que selecionamos.  */


let titulo = document.querySelector('h1');
titulo.style.color = 'cyan';
titulo.style.textAlign = 'center';
titulo.style.fontSize = '12px';
titulo.style.backgroundColor = '#dddddd';
