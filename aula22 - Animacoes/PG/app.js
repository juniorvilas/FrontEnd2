//tempo de velocidade do carregamento da barra 5s
const tempoDeCarga = 5000;

function animarBarra() {
 // Selecionamos o elemento barra
 let elem = document.getElementById("barra");

 // Iniciamos o processo em 0, para assegurar
 // que sempre comece do 0
 let width = 0;

 const progressoSobreTempoTotal = tempoDeCarga / 100;
 // Criamos um intervalo que se repete no tempo em que calculamos
 // para incrementar no progresso
 let id = setInterval(incrementarProgresso, progressoSobreTempoTotal);
 
 function incrementarProgresso() {
    // Se o progresso estiver completo, terminamos o funcionamento do programa
    if (width >= 100) {
    clearInterval(id);
    } else {
    width++;
    // Modificamos o DOM, para atualizar o progresso
    elem.style.width = width + "%";
    elem.innerHTML = width + "%";
    }

}
}
document.querySelector("#iniciar-carga").addEventListener("click", animarBarra);

