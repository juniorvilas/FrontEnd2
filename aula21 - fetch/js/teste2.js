const main = document.getElementById('main');

let url = "https://jsonplaceholder.typicode.com/todos/"

fetch(url)
  .then((response) => {
      return response.json();
    })
  .then((data) => {
   
    /*  const todos = data;
    const title = data.map((title) => {
        return title.title;
    }) */
    main.innerHTML = criarDivs(data);    
    /* document.write(todos[0].id)
    document.write(todos[0].title) */
  })


  function criarDivs(data){    
    
    const id = data.map((id) => {
        return id.id;
    })

    const title = data.map((title) => {
          return title.title;
        

      }).join("\n");
      
      return `<div><p>${title}</p>
                <p>${id}</p>
                </div>`;
      

  }





/* fetch(url)
    .then((response) =>{
        let resposta = response.json();
        console.log(resposta);
        
    })
    .then((data) => {
        console.log(data);
    })  
 */


/* let id = document.querySelector('.id');
let title = document.querySelector('.title');
let completed = document.querySelector('.completed');

id.textContent = data.id;
title.textContent = data.title;
completed.textContent = data.completed; */

/* 
<div>
        <p class="id"></p>
        <p class="title"></p>
        <p class="completed"></p>       
    </div> */




