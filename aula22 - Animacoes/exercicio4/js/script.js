/* Grupo: Carlindo Jr, Larissa Nunes, Felipe Araujo, Breno Rodrigues, Giovani Silva */

/* n 01 Aumentar a fonte de acordo a barra de progresso */

let paragrafo01 = document.getElementById('paragrafo01');
let sliderPara = document.getElementById('sliderPara'); 


sliderPara.addEventListener('input', function() {

  let tamanho = sliderPara.value;

  paragrafo01.style.fontSize = tamanho + 'px';
 
})

/* n 02 Aumentar imagem de acordo com a barra de progresso */

let sliderImg = document.getElementById('sliderImg');
let imgStar = document.getElementById('imgStar');

sliderImg.addEventListener('input', function() {

  let tamanhoImg = sliderImg.value;

  imgStar.style.width = tamanhoImg + 'px';

})

/* n 03 Alterar o background color da página */
let body = document.querySelector('body');
let mySliderColor = document.getElementById('mySliderColor');

mySliderColor.addEventListener('input', function(){

  let cor = mySliderColor.value;
  
  body.style.backgroundColor = '#'+cor;

})

/* n 04 Alterar a cor da fonte da página */

let mySliderCorFonte = document.getElementById('mySliderCorFonte');

mySliderCorFonte.addEventListener('input', function () {

  let corFonte = mySliderCorFonte.value;

  body.style.color = '#'+corFonte;

})



/* var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
} */