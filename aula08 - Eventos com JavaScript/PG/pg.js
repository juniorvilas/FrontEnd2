/* onload
Este evento permite que todo o script seja executado quando o objeto do
documento estiver totalmente carregado dentro do objeto de janela. */

window.onload = function(){
    alert('o documento está pronto');
   }

/* onclick
Este evento nos permite executar uma ação quando clica no elemento ao qual
estamos aplicando a propriedade. */


btn.onclick = function(){
    console.log('Você clicou!');
   }

   
/* preventDefault()
Isso nos permite evitar que o evento padrão — ou nativo — do elemento ao
qual estamos aplicando seja executado.
Podemos usá-lo, por exemplo, para evitar que uma tag "a" se comporte
nativamente e execute outra ação. */

let hiperlink = document.querySelector('a');

hiperlink.addEventListener('click', function(event){
 console.log('Você clicou');
 event.preventDefault();
});


/* Eventos mais usados
onclick - Quando o usuário clica.
ondblclick - Quando o usuário clica duas vezes.
onmouseover - Quando o mouse se move sobre o elemento.
onmousemove - Quando o mouse é movido.
onscroll - Ao rolar.
onkeydown - Quando uma tecla é pressionada.
onload - Quando a página for carregada.
onsubmit - Quando um formulário é enviado.
 */

