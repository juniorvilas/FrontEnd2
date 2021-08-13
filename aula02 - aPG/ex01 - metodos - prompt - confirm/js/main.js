/* NOVOS MÉTODOS */

/* Um deles é o prompt (), que mostra uma caixa de diálogo
com uma mensagem opcional, que pede ao usuário para inserir
um texto. Você também tem duas opções para "Aceitar" ou "Cancelar". 
No console do navegador, poderemos ver o resultado que esse método retorna,
independentemente do que o usuário retornado inserir em uma string de texto.
O que isto significa? Não importa o quanto o usuário insira apenas números,
o que obteremos serão esses números, mas como se fossem texto.
No momento, esses dados estão perdidos, mas se os armazenarmos em uma variável,
podemos usá-los para o resto do nosso programa. 
Ao usar um espaço de memória para salvar esses dados, podemos usá-los como informações.
Caso o usuário selecione "Cancelar", o resultado retornado é nulo. 
Por outro lado, se o usuário pressionar "Aceitar" sem completar nada,
ele retornará um texto vazio.*/


/* let nomeUsuario = prompt("Por favor insira seu nome");
console.log(nomeUsuario); */

/* O método confirm () exibe uma caixa de diálogo com uma mensagem opcional
e dois botões, "OK" e "Cancelar". 
Neste caso, o que nos permite é colocar qualquer questão ou indicação ao utilizador
para que responda apenas com sim ou não.
O valor que será retornado é um booleano indicando verdadeiro
se eu clicar em OK e falso se eu clicar em Cancelar.
Novamente, por si só o método não armazena nenhum dado, mas se armazenarmos
o valor retornado em uma variável, podemos usá-lo como informação.
Vamos tentar combinar os dois métodos em algo mais funcional.
*/


let atendimentoPersonalizado = confirm("Deseja um atendimentoPersonalizado?");

if(atendimentoPersonalizado) {
    let nome = prompt("Por favor insira seu nome");
    alert("Damos as boas vindas ao nosso site a " +nome+". Muito obrigado pela sua visita!Estamos à sua disposição! ?");
} else {
    alert("Obrigado por se conectar. ")
}