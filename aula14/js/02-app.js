//CONTADOR
//Aula 14 - Local Storage
// Vinculado ex02.html

/* let visitas = localStorage.setItem('visitas','1') */

if(typeof(Storage)!= "undefine" ) {//Verifica se existe o Storage se existe
    if(localStorage.visitas) { // verifica se existe o localStorage.visitas = true;
        // a partir da segunda vez, pega o que está armazenado e soma + 1;
        localStorage.visitas = Number(localStorage.visitas)+1; // converte em número
    }else {
        localStorage.setItem("visitas","1"); //clássica //Aceita apenas string
        //localStorage.visitas = 1;  //objetiva
    }
    //Imprimi caso primeira vez "Visitas: 1"
    //caso contrario, soma + 1
    document.write("Visitas......" + localStorage.visitas);
} else {
    document.write("Sem suporte a Web Storage!");
}


//Solução feita por Rodrigo
/* let visitas = localStorage.getItem('visitas') ||(()=>{localStorage.setItem('visitas', 0); return 0})();
visitas = Number(visitas)+1;
localStorage.setItem('visitas', visitas);
document.querySelector("Body").append("Visitas: "+localStorage.getItem('visitas')); */
