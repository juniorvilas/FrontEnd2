/* const body = document.querySelector('body');

//Construa um formulário, usando javascript, com no mínimo três campos de input 

        body.innerHTML = `
        <form action="">
        Nome: <input class="campoInput"  type="text"><br>
        Sobrenome: <input class="campoInput" type="text"><br>
        E-mail: <input class="campoInput" type="text"><br>
        </form>
                `

//os campos receberão a propriedade “disabled”, 
//mas quando o mouse estiver acima desse campo ele vai perder
// essa propriedade possibilitando a modificação do conteúdo pelo usuário. 


var variavel = Array.from(document.getElementsByClassName('campoInput'))
variavel.forEach((el,index) => {
    el.addEventListener('focusout', () => {
        el.children[0].setAttribute('disabled',true);
    })
    el.addEventListener('mouseover', () => {
        el.children[1].setAttribute('disabled',false);
    })
    el.addEventListener('mouseout', () => {
        el.children[2].removeAttribute('disabled',true);
    })
}
)
 */

  








