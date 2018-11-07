/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/sergiopeluzzi')
xhr.send(null)

// função que verifica a mudança do estado da requisição ajax
xhr.onreadystatechange = function() {
    // 4 status recebido
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
}


var minhaPromisse = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/sergiopeluzzi')
        xhr.send(null)

        // função que verifica a mudança do estado da requisição ajax
        xhr.onreadystatechange = function() {
            // 4 status recebido
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}

minhaPromisse()
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })


axios.get('https://api.github.com/users/sergiopeluzzi')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })    


//execicio 01    
function checaidade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            idade >= 18 ? resolve('Maior de 18') : reject('Menor de 18')
        }, 2000)
        
    })
}

checaidade(20)
    .then(function(res) {
        console.log(res)
    })
    .catch(function(err) {
        console.log(err)
    })

*/
//exercicio 02
var botao = document.querySelector('#btnAdd')
var input = document.querySelector('#githubUser')
var ul = document.querySelector('#lista')

botao.setAttribute('onclick', 'clickme()')


function render(repos) {
    ul.innerHTML = ''
    for (repo of repos) {
        var li = document.createElement('li')
        var a = document.createElement('a')
        var liText = document.createTextNode(repo.name)

        a.setAttribute('href', repo.html_url)

        a.appendChild(liText)
        li.appendChild(a)
        ul.appendChild(li)
    }
}

function renderLoading() {
    ul.innerHTML = ''
   
    var li = document.createElement('li')
    var liText = document.createTextNode('Carregando...')

    li.appendChild(liText)
    ul.appendChild(li)

}

function renderError() {
    ul.innerHTML = ''

    var li = document.createElement('li')
    var liText = document.createTextNode('Usuário não encontrado')

    li.style.color = '#F00'

    li.appendChild(liText)
    ul.appendChild(li)

}

function clickme() {

    renderLoading()

    axios.get('https://api.github.com/users/'+input.value+'/repos')
        .then(function(res) {
            render(res.data)
        })
        //exercicio 03
        .catch(function(err) {
            renderError()
        })
}

/*
var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
  for (repo of repositories) {
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement('li');
    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}
function listRepositories() {
  var user = inputElement.value;
  if (!user) return;
  axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function (response) {
      renderRepositories(response.data);
    })
}
*/