const body = document.querySelector("body");

body.innerHTML = `<form>
<input class="primeiro" placeholder = "Primeiro"></input>
<button class="primeiroBtn">Primeiro Input</button>

<input class="segundo" placeholder = "Segundo"></input>
<button class="segundoBtn" >Segundo Input</button>

<input class="terceiro" placeholder = "Terceiro"></input>
<button class="terceiroBtn" >Terceiro Input</button>

</form>

<div class="primeiroDiv"></div>
<div class="segundoDiv"></div>
<div class="terceiroDiv"></div>`;

const primeiroInput = document.querySelector(".primeiro");
const segundoInput = document.querySelector(".segundo");
const terceiroInput = document.querySelector(".terceiro");


    primeiroInput.addEventListener("keyup",()=>{
        segundoInput.disabled = true;
        terceiroInput.disabled = true;
    })

    primeiroInput.addEventListener("mouseover", ()=>{
        primeiroInput.disabled = false;
    })

    primeiroInput.addEventListener("mouseout", ()=>{
        primeiroInput.disabled = true;
    })



segundoInput.addEventListener("keyup", ()=>{
    primeiroInput.disabled = true;
    terceiroInput.disabled = true;
})

segundoInput.addEventListener("mouseover", ()=>{
    segundoInput.disabled = false;
})

segundoInput.addEventListener("mouseout", ()=>{
    segundoInput.disabled = true;
})

terceiroInput.addEventListener("keyup", ()=>{
    primeiroInput.disabled = true;
    segundoInput.disabled = true;
})

terceiroInput.addEventListener("mouseover", ()=>{
    terceiroInput.disabled = false;
})

terceiroInput.addEventListener("mouseout", ()=>{
    terceiroInput.disabled = true;
})



const primeiroBtn = document.querySelector(".primeiroBtn");
const primeiroDiv = document.querySelector(".primeiroDiv");
const segundoBtn = document.querySelector(".segundoBtn");
const segundoDiv = document.querySelector(".segundoDiv");
const terceiroBtn = document.querySelector(".terceiroBtn");
const terceiroDiv = document.querySelector(".terceiroDiv");
primeiroBtn.addEventListener("click", (e) => {
    e.preventDefault();
    primeiroDiv.innerHTML += 
    `<ul>
    <li>${primeiroInput.value}</li>
    </ul>`
    
})

segundoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    segundoDiv.innerHTML += 
    `<ul>
    <li>${segundoInput.value}</li>
    </ul>`
    
})

terceiroBtn.addEventListener("click", (e) => {
    e.preventDefault();
    terceiroDiv.innerHTML += 
    `<ul>
    <li>${terceiroInput.value}</li>
    </ul>`
    
})