# ReactJS

### Step 1 * Criando o projeto
Pra inicirarmos, tenha certeza que esteja instalado:
* Node <a href="https://nodejs.org/en/">nodejs.org</a>
* NPM <a href="https://nodejs.org/en/">nodejs.org</a>
* Yarn <a href="https://yarnpkg.com/pt-BR/">yarnpkg.com</a>

Vamos começar instalando um pacote chamado `create-react-app`
```
npm install -g create-react-app
```
o <b>-g</b> instala um pacote de forma global... Assim poderemos utilizá-lo tambem fora do nosso projeto, e se o seu `path` estiver configurado pra pegar a pasta do npm, tb poderá ser utilizado no terminal

Alem de estar sempre atualizado o `create-react-app` vem com as configurações de transpilação padronizadas, ou seja, todo aquele trabalho que teríamos que fazer com o `babel`, esse pacote ja faz pra gente, economizando algum tempo de código.

Agora que entendemos o que o pacote faz, vamos criar nosso primeiro projeto. No terminal do seu sistema operacional digite:
```
create-react-app huntweb
```
Onde `huntweb` é o nome do seu projeto

Após a instalação, acesse a pasta do projeto, que no meu caso `cd huntweb`<br>
Em seguida vamos rodar o comando `yarn start` pra iniciar a nossa aplicação<br>
Pronto... App rodando...<br>
Aguarde uns instantes e uma página se abrirá no seu navegador automaticamente. Se isso não acontecer acesse <a href="localhost:3000">Localhost</a>

### Step 2 * Componentes

Vamos começar apagando alguns arquivos pra q possamos entender do zero como a aplicação web funciona.<br>
Apague os arquivos `App.css`, `App.test.js`, `index.css` e `logo.svg`<br>
O `serviceWorker.js` vai servir para caso você queira trabalhar com uma PWA. Ele não atrapalá então deixaremos ele aí mesmo<br>

Proximo passo eh remover a linha que importa o `index.css`
```javascript
import './index.css';
```
do arquivo index.js<br>
Em seguida vamos remover também as linhas que importam os arquivos que deletamos do arquivo `App.js`.<br>
Remova também toda informação dentro da div `App`. Ficando dessa forma:
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
```
Agora estamos prontos para entender como o `React` trabalha. <br>
O arquivo `index.js` é o primeiro a ser carregado pelo `React`<br>
Basicamente o que precisamos entender é que:
* `import React from 'react';` é responsável por carregar todo JSX na aplicação, então sempre que formos trabalhar com o JSX, precisamos importar o `React`. Um exemplo do JSX é o template `<App />`
* `import ReactDOM from 'react-dom';` é responsável por chamar o metodo `ReactDOM.render`, que vai ser chamado uma única vez na nossa aplicação e é aqui no `index.js`. Ele vai renderizar o componente App na div `root` que vai estar la dentro do `index.html` nossa pasta `public`

### Step 3 * Header
Vamos criar o nosso primeiro componente.<br>
Vamos iniciar criando uma pasta chamada `components` dentro do nosso `src`. Entre nela e crie uma pasta pro nosso primeiro componente chamada `Header`. Dentro dessa pasta `Header` crie mais 02 arquivos: `index.js` e `style.css`<br>

Na nossa `index.js` vamos criar o código do nosso component:
```javascript
import React from 'react'
import './style.css'

const Header = () => (
    <header id="main-header">JS Hunt</header>
)

export default Header
```
e no style.css
```css
#main-header {
    width: 100%;
    height: 60px;
    background: #da552f;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
Agora vamos voltar ao `App.js` e vaoms mudar o nosso código:
```javascript
import React, { Component } from 'react';
import Header from './components/Header'
import './style.css'

const App = () => (
  <div className="App">
    <Header />
  </div>
)

export default App;
```

O que fizemos basicamente foi, criar o component, criar um estilo esepcífico para ele e importarmos ele no nosso `App.js` principal.<br>
Nós mudamos a forma de construção dos nossos componentes. Talvez você esteja acostumado com algo do tipo:
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}
```
Mas não se preocupe. Nós utilizamos uma construção `stateless` usando variaveis que retornam uma função da mesma forma que a classe retorna. É apenas uma forma mais simples de escrever os nossos componentes.<br>
Vale lembrar que quando formos trabalhar com `estados`, vamos precisar trabalhar com a forma mais verbosa <i>class</i>, mas enquanto não trabalhamos, vamos aproveitar para escrever menos.


### Step 4 * Buscando da API
Vamos começar instalando o axios atraves do comando `yarn add axios`<br>
E agora vamos criar uma pasta chamada services dentro do nosso src, para armazenar toda regra que precisar acessar ou utilizar um serviço externo. Dentro da pasta `services`, crie o arquivo `api.js`
```javascript
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
})

export default api
```
Vamos lá no `App.js` pra fazer a importação do nosso arquivo com 
```
import api from './services/api'
```
Em seguida vamos começar a criar nossas páginas<br>
Crie uma pasta chamada `pages` e dentro dela crie outra chamada `main` e dentro dela crie o arquivo `index.js`
```javascript
import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {
    //Assim que o componente for mostrado em tela
    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get('/products')

        console.log(response.data.docs)
    }

    render() {
        return <h1>Hello Main</h1>
    }
}
```
Como importamos a `api` na nossa `Main`, podemos remover o import do nosso `App.js`<br>
Nossa classe `Main` nesse momento está apenas mostrando no console do navegador os dados dos produtos da nossa API. Para isso, criamos um metodo asíncrono `loadProdutct` que é executado no `componentDidMount()` do React. Esse método é chamado quando o componente é carregado na tela.

### Step 5 * Armazenando no estado

Agora vamos armazenar os dados da API dentro de variáveis e retornar na tela do app<br>
vamos começar criando uma variável chamada `state` dentro do nosso `pages/main/index.js`
```javascript
    state = {
        products: []
    }
```
e agora no nosso método loadProducts
```javascript
    loadProducts = async () => {
        const response = await api.get('/products')

        this.setState({ products: response.data.docs })
    }
```
Basicamente, precisamos entender até aqui é que o nosso método `render()` fica escutando a variável `state` e quando alguma modificação é feita, ele recarrega o componente automaticamente. Esse é o motivo de não criarmos variáveis diretamente, e sim dentro do state.<br>

Nosso metodo `render()` vai ficar assim
```javascript
    render() {
        return (
            <div className="product-list">
                { this.state.products.map(product => ( <h2 key={ product._id }>{ product.title }</h2> )) }
            </div>
        )
    }
```
Agora vamos exibir os titulos dos produtos na nossa página. Pra isso vamos usar um `map`, que percorre todos os itens do array e retorna pra cada item, um novo item modificado da forma que quisermos.<br>
O `react` pede que, quando utilizamos o map, precisamos colocar a `key` pra cada novo objeto retornado, por isso o `key` no `<h2>`

### Step 6 * Listando os produtos
Primeiramente vamos alterar o código dos nossos produtos. Vamos embelezá-la.<br>
Começaremos pela estrutura. Altere o metodo render() dessa forma:
```javascript
const { products } = this.state

return (
  <div className="product-list">
      { products.map(product => ( 
              <article key={ product._id }>
                  <strong>{ product.title }</strong>
                  <p>{ product.description }</p>
                  <a href="#">Acessar</a>                        
              </article> 
          )) }
  </div>
)
```
Aqui temos que entender que removemos o `h1` e colocamos um `article` no lugar, e montamos uma pequena estrutura `html`.<br>
Outra coisa importante que fizemos foi a desestruturação do `products`. Dessa forma não precisamos referenciá-lo o tempo inteiro como `this.state.products`<br>

Próxima etapa agora é criar um arquivo `style.css` dentro da pasta `pages/main` e importálo no inínicio do nosso `index.js`
```javascript
import './style.css'
```
Agora vamos estilizar a nossa pagina de produtos:
```css
.product-list {
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;
}

.product-list article {
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
}

.product-list article p {
    font-size: 16px;
    color: #999999;
    margin-top: 5px;
    line-height: 24px;
}

.product-list article a {
    height: 42px;
    border-radius: 5px;
    border: 2px solid #da552f;
    background: none;
    margin-top: 10px;
    color: #da552f;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;  
}

.product-list article a:hover {
    background: #da552f;
    color: #ffffff;
}
```
Com esse código nós conseguimos dar uma cara mais amigável ao nosso app

### Step 7 * Paginação
Agora vamos mexer bastante no código.<br>
Primeiro vamos entender o que precisa ser feito.<br>
Basicamente precisamos de dois botões, um botão ANTERIOR o ouro PRÓXIMO. Cada botão deverá chamar um metodo que deve chamar a nossa `loadProducts`, que vai mostrar os dados conforme a página setada.<br>
Vamos adicioná-los ao nosso `render`
```javascript
// Desestruturação pra diminuir o código
const { products, page, productInfo } = this.state

return (
    <div className="product-list">
        { products.map(product => ( 
                <article key={ product._id }>
                    <strong>{ product.title }</strong>
                    <p>{ product.description }</p>
                    <a href="#">Acessar</a>                        
                </article> 
            )) }

        <div className="actions">
            <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
            <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
    </div>
```
Note que chamamos as variaveis page e productInfo do state também. E os botões, basicamente, chamarão as funções respectivas para pagina anterior e próxima, e uma regra para `disabled` foi adicionado. Caso estejamos na página 1 o botão anterior fica desabilitado, caso estejamos na ultima pagina o botão proximo fica desabilitado. Vamos configurar agora a ação dos botões.<br>
Primeiro passo é adicionar as vars `productInfo` e `page` ao nosso state
```javascript
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }
```
E vamos ajustar algumas coisas.<br>
Nossa `loadProducts` agora recebe um parâmetro `page = 1` para carregar na primeira vez a pagina 1, e receber a pagina como parametro para carregar suas informações. <br>
Em seguida vamos desestruturar a `response.data` de uma forma que a var `docs` vai receber o array docs do state e a var `productInfor` vai receber todas as outras informações da nossa API.<br>
Automatimante vamos setar o `state` com as informações atualizadas.

```javascript    
    // Arrow functions somente para as funções pessoais... as functions do react são usadas nos modelos acima
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        // Armazena o conteúdo da prop docs na var docs e todo o resto das propriedades em productInfo
        const { docs, ...productInfo } = response.data

        // products recebe o array docs e productInfo recebe productInfo mesmo e o page agora recebe o valor da pagina atual
        this.setState({ products: docs, productInfo, page })
    }

```
Em seguida vamos criar os metodos `prevPage` e `nextPage`
```javascript
  prevPage = () => {
        // Pega os dados do estado
        const { page, productInfo } = this.state

        // verifica se a página atual que está no state é igual a 1. Se for, quer dizer que estamos na primeira página
        if (page === 1) return

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        // Pega os dados do estado
        const { page, productInfo } = this.state

        // verifica se a página atual que está no state é igual ao numero total de paginas. Se sim, sai do metodo
        if (page === productInfo.pages) return

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }
```
Nesse momento ja funciona nossa paginação, mas precisamos estilizar um pouco também:
```css
.product-list .actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.product-list .actions button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background: #da552f;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.product-list .actions button:hover {
    opacity: 0.7;
}

.product-list .actions button[disabled] {
    opacity: 0.5;
    cursor: default;
```
Pronto, agora nossa paginação está correta

### Step 8 * Configurando a navegação

Nesse ponto vamos configurar a navegação da nossa aplicação e criar a página de detalhes do produto
Primeiro passo é instalar o pacote  `react-router-dom` para nos auxiliar nesse processo de navegação
```
yarn add react-router-dom
```
Esse componente será o responsável por controlar as nossas rotas.

Agora vamos criar um arquivo dentro da pasta `src` chamado `routes.js` e configurá-lo da seguinte forma:
```javascript
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages.main'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Main} />
        </Switch>
    </BrowserRouter>
)
```
Basicamente importamos o `react` e os modulos do `react-routes-dom` e vamos configurar as nossas rotas.<br>
`BrowserRouter` quer dizer que vamos utilizar um browser para navegação. O react router permite a navegação por rotas em várias plataformas.<br>
`Switch` quer dizer que vamos renderizar apenas uma view por rota, ou seja, apenas uma página será carregada quando aquela rota for chamada. O react permite trabalhar com várias páginas por rota, mas n é isso que faremos com nossa App<br>

A nossa primeira rota vai ser chamada quando não tiver nenhum endereço, ou seja, na raiz da aplicação, por isso o `path="/"` e component chama o componente que será renderizado. Neste caso o `Main`<br>

Agora no nosso App.js faremos algumas alterações e ele ficará assim:
```javascript
...
import Routes from './routes'
...

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)
```
Importamos o Routes e agora modificamos o antigo `Main` pelo `Routes`<br>
Agora vamos criar o caminho do nosso produto. Crie o diretório `product` dentro da pasta `pages` e em seguida crie o arquivo `index.js` dentro da `product`<br>
Vamos fazer um template simples, somente para testar:
```javascript
import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return <h1>Product</h1>
    }
}
```
Agora vamos no arquivo `routes.js` e vamos adicionar a nossa rota:
```javascript
...
import Product from './pages/product'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
)
```
Importamos o produto e criamos uma nova rota. Aqui vamos encontrar um problema, pois quando o `router` encontra a `/`, ele ja para automaticamente. Nesse caso o `/products` tem uma barra que faz com que ele pare. Para contornar isso, podemos colocar a expressão `exact` antes do `path` para que ele entenda que ali é a URL base do sistema.<br>
Pronto, pela URL `.../products/1` nos ja conseguimos visualizar o conteúdo do nosso detale.<br>
Agora precisamos configurar em como passar o id para a URL.<br>
E para isso vamos importar um componente chamado `Link` do `react-router-dom`:
```javascript
import { Link } from 'react-router-dom'
```
E vamos alterar o nosso método `rnder()` do nosso `main/index.js`
```javascript
<article key={ product._id }>
    <strong>{ product.title }</strong>
    <p>{ product.description }</p>
    <Link to={`/products/${product._id}`}>Acessar</Link>                        
</article> 
```
Alteramos o nosso `href="#"` por `<Link to={`/products/${product._id}`}>Acessar</Link>`<br>
Agora já conseguiremos acessar a view do product pelo app.

### Step 9 * Navegando pro detalhe

Nesse passo vamos acessar o nosso produto e obter as informações dele<br>
```javascript
import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'

export default class Product extends Component {
    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data })
    }

    render() {
        const { product } = this.state
        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>URL: <a href="{product.url}">{product.url}</a></p>
            </div>            
        )
    }
}
```
Basicamente nosso código ficará assim... E precisamos entender pouca coisa a mais do que ja sabemos.<br>
Criamos o `product` dentro do `state` e inicializamos como um objeto vazio. Ele será populado pelos dados que buscamos na API com a `função async componentDidMount()` que busca os dados antes da montagem da componente.<br>
Após isso montamos o render do nosso componente para apresentar na tela.<br>
Agora criamos um arquivo `style.css` e estilizamos o nosso componente como mostra abaixo:
```css
.product-info {
    max-width: 700px;
    margin: 20px auto 0;
    padding: 20px;
    background: #ffffff;
    border-radius: 5px;
    border: 1px solid #dddddd;
}

.product-info h1 {
    font-size: 32px;
}

.product-info p {
    color: #666666;
    line-height: 24px;
    margin-top: 5px;
}

.product-info p a {
    color: #006699;
}
```