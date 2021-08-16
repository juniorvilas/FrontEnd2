function Aluno(...notas) {
    let aluno = {};
    aluno.notasArray = [];
    aluno.notasArray.push(...notas);
    let media = aluno.notasArray.reduce((acumulador, nota) => {
        return acumulador + nota;
    }) / aluno.notasArray.length;

    aluno.notaBim = () => {
        console.log("Olá, Aluno! Confira suas notas abaixo:\n")
        for (let i in aluno.notasArray) {
            console.log(`Sua nota no ${parseInt(i) + 1}º Bimestre foi: ${aluno.notasArray[i]}`);
        }
        return `Média: ${media} \n`
    }

    aluno.status = () => {
        if (media >= 7) {
            return `Aluno aprovado com a média de ${media}. Parabéns!`
        }
        else {
            return `Média de ${media} do Aluno insuficiente para a aprovação.`;
        }
    }

    return aluno;
}
let aluno01 = Aluno(10, 8, 8, 5)
console.log(aluno01.notaBim());
console.log(aluno01.status());