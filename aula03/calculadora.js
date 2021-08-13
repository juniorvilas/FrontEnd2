let calcSoma = require('./somar');
let calcSubt = require('./subtrair');
let calcMult = require('./multiplicar');
let calcDiv = require('./dividir');


function calcular (a,b,operacao) {
    let resultado;
    if (operacao=='+')
    {
        resultado=calcSoma.soma(a,b);
    }
    if (operacao=='-')
    {
        resultado=calcSubt.subtracao(a,b);
    }
    if (operacao=='*')
    {
        resultado=calcMult.multiplicacao(a,b);
    }
    if (operacao=='/')
    {
        resultado=calcDiv.divisao(a,b);
    }
    console.log(resultado);
}

calcular(2,50,'+');
calcular(2,50,'-');
calcular(2,50,'*');
calcular(2,0,'/');
