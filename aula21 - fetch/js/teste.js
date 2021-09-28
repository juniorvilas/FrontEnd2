

//armazenar a URL do JSON 
let requestURL = 'https://jsonplaceholder.typicode.com/todos/';

//criar uma nova instância de objeto de solicitação
// a partir do construtor XMLHttpRequest
let request = new XMLHttpRequest();


// abrir uma nova solicitação usando o método open()
request.open('GET', requestURL);


// aqui estamos definindo o  responseType como JSON, 
//para que o XHR saiba que o servidor retornará o JSON
request.responseType = 'text';
request.send();

//aguardar a resposta retornar do servidor e, em seguida, lidar com ela
request.onload = function() {
    const arquivoJsonText = request.response;
    const arquivoJson = JSON.parse(arquivoJsonText);
    showJson(arquivoJson);
  }


  function showJson(jsonObj) {
    const users = jsonObj['id'];
  
    for (let i = 0; i < users.length; i++) {
       
    let myArticle = document.createElement('article');
    let myID = document.createElement('span');
    let myTitle = document.createElement('p');
    let completed = document.createElement('span');
    let section = document.createElement('section');
      
  
      myTitle.textContent = users[i].title;
      myID.textContent = users[i].id;
      completed.textContent = users[i].completed;
      
          
      myArticle.appendChild(myTitle);
      myArticle.appendChild(myID);
      myArticle.appendChild(completed);
     
  
      section.appendChild(myArticle);
    }
  }

 