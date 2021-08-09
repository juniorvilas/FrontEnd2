/* A secretaria de uma escola contratou a sua empresa para desenvolver sua
   plataforma de gestão de alunos, sendo uma dessas partes a criação de um sistema
   que calcule as notas obtidas ao longo do semestre, Você e seu grupo fazem parte
   da equipe responsável por implementar esta funcionalidade no sistema.

   Para isso, crie um script que permita adicionar uma sequência de números
   (um array de números) consecutivamente para receber as notas dos 4 bimestres.

   Após isso, crie uma estrutura na qual todos os números do array sejam somados
   sequencialmente: o primeiro número seja somado ao segundo e o resultado seja
   impresso no console. Então,temos que pegar esse resultado e adicionar o terceiro
   número a ele, e assim por diante, até terminarmos de percorrer o array. 
   Seguindo a lógica do exemplo a seguir: */
  
let notas = [10,5,10,5];
let somaTotal = 0;
for (let i = 0; i < notas.length; i++) 
{
    somaTotal += notas[i]
    console.log(somaTotal);
}

let media = (somaTotal/notas.length);

for(let indice = 1; indice < notas.length+1; indice++){
    console.log("Sua nota do " + (indice) + " bim foi "  + notas[indice-1]);
}

if(media >= 7) {
    console.log("Parabéns você foi aprovado com a média " + media);
    
} else {
    console.log("Aluno Reprovado estude mais!")
}

