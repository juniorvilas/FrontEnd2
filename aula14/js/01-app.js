//Aula 14 - Local Storage
// Vinculado ex01.html
/* 
let dados = localStorage.setItem("materia", "Front End2"); // cria chave

document.write("Valor da chave........." + dados); */

// cria chave
localStorage.setItem("materia", "Front End2"); 
//remover chave
//localStorage.removeItem("materia");

/* document.write("Valor da chave........." + localStorage.materia); */

let dado = localStorage.getItem("materia");
document.write("Valor da chave........." + dado);

