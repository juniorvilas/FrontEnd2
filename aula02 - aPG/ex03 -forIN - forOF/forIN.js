// Revisão FOR IN - Deve usá-lo com objetos

var personagem = {
    nome: 'Clark',
    idade: 25
};
for (let dado in personagem) {
    console.log(dado, personagem[dado]);
}
