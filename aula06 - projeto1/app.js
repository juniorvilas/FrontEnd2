const botaoTitulo = document.querySelector('.btnmudartitulo');

document.addEventListener("click", function(){
    let titulo = document.querySelector('.titulo');
    titulo.style.color = 'black';
    titulo.style.textAlign = 'center';
    titulo.style.fontSize = '22px';
    titulo.style.backgroundColor = '#fff';
})