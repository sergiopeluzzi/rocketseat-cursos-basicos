# NodeJs

### Step 1 * Iniciando o projeto
Crie a pasta do projeto, entre nela e execute `npm init -y`<br
Isso ira fazer com que o arquivo package.json seja criado

### Step 2 * Instalando e configurando o express
Instale o express via npm com `npm install express`<br
Após concluir a instalação crie um arquivo `server.js` e insira o codigo:
```javascript

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3001)

```

### Step 3 * Rodando o servidor
Instale o nodemon via npm com `npm install -D nodemon`<br
Após concluir a instalação execute o comando
```bash
nodemon server.js
```

### Step 4 * Instalando o docker
Faça o download e instale o Docker CE em <a href="https://docs.docker.com">docker.com</a><br>
Após concluir a instalação execute o comando abaixo pra verificar se a instalação deu certo
```docker
docker
```

### Step 5 * Rodando o container do mongodb
Faça o download do container do mongodb pelo docker com o comando abaixo
```docker
docker pull mongo
```
Após o download vamos iniciar o nosso container mongo com o comando
```docker
docker run --name mongodb -p 27017:27017 -d mongo
```
<b>--name:</b> é o nome que queremos dar para o container<br>
<b>-p:</b> linca as portas do sistema externo com o interno, ou seja, quando algo acessar a porta 27017 do meu sistema (windows, mac, linux) ele será redirecionado pra porta 27017 do container<br>
<b>-d:</b> a imagem que iremos rodar, no nosso caso a do mongo

Após o docker run finalizar, certifique-se de que o container está em execução com o comando
```
docker ps
```
Baixe o <a href="https://robomongo.org/">ROBO 3T</a>, uma ferramenta GUI para o mongodb bem objetiva para testarmos a conexão com o banco

A instalação é fácil e na primeira tela, é necessário adicionar uma conexão.<br>
Clique com o botão direito do mouse > Add > informe um nome para a conexão, o host: localhost e a porta: 27017.<br>
Salve e conecte. Pronto!

<i>`Obs. O container do docker, depois de criado e nomeado, pode ser reativado com docker start [nome do container], exemplo: docker start mongodb. Isso pode acontecer quando voce reiniciar seu PC. O container é parado e fica em um estado de aguardando, até ser iniciado novamente com o docker start`</i>

### Step 6 * Conectando à base da dados
Instale o ORM Mongoose com o comando
```bash
npm install mongoose
```
Após a instalação instancie o mongoose no arquivo `server.js` e inicie a conexão atraves do mongoose.
```javascript
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017')
```
<i>`No mongoose connect, utilizamos o protocolo mongobd:// e a URL de conexão. Caso o mongodb tenha user e senha, é ncessário passar na URL de conexão user@password. Qualquer dúvida procure pela docs do mongose no google`</i>

Seu `server.js` deve ficar mais ou menos assim:
```javascript
const express = require('express')
const mongoose = require('mongoose')

// Iniciando o APP
const app = express()

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi')

// Primeira rota
app.get('/', (req, res) => {
    res.send('Hello')
})

// Servidor escutando a porta 3001
app.listen('3001')
```
Pode acontecer de ocorrer um erro no console do node: <i>`(node:14372) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.`</i>

neste caso o `mongoose.connect` deve receber mais um parametro
```javascript
//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
```
Salve novamente o projeto e verifique no terminal do node se ha algum erro. Se não houver, significa que o mongoose conseguiu se conectar ao banco mongodb

### Step 7 * Criando o model produto
Vamos criar dentro do nosso projeto uma pasta chamada `src` e dentro dela uma pasta chamada `models`, onde guardaremos os models da nossa aplicação<br>
Dentro dessa pasta crie o arquivo <b>Product.js</b>
```javascript
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('Product', ProductSchema)
```
O que fizemos qui foi basicamente mapear a nossa 'tabela' do banco de dados dentro da nossa aplicação. O ProductSchema é um esqueleto, uma estrutura dentro da nossa aplicação que vai servir de modelo quando instanciarmos o nosso model Product. Na ultima linha nós exportamos o ProductSchema como um model Product pra toda nossa aplicação. Agora podemos utilizar o model em qualquer lugar da nossa aplicação. Basta fazer um require nesse arquivo<br>
De volta ao nosso `server.js` vamos fazer um require do arquivo logo abaixo da conexão com o banco de dados
```javascript
// Importando o model Product
require('./src/models/Product')
```
Existe uma biblioteca chamada `require-dir` que nos ajuda nesses imports. Em uma aplicação com muitos models, seria necessário importar um a um, mas essa biblioteca nos ajuda importando o diretório todo. Então instale com o comando
```bash
npm install require-dir
```
importe e substitua a função require por essa
```javascript
const requireDir = require('require-dir')

// Importando os models
requireDir('./src/models')
```
Agora vamos verficar se o produto está persistindo no banco, tentando fazer um insert.<br>
Para isso, abaixo do `requireDir` instancie o `Product`
```javascript
// Instanciando o model
const Product = mongoose.model('Product')
```
E altere a primeira rota para o codigo abaixo:
```javascript
// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'Curso de NodeJs',
        description: 'Crie APIS poderosas com NodeJS',
        url: 'https://nodejs.org'
    })
    
    return res.send('Hello')
})
```

### Step 8 * Reestruturação de arquivos
Agora vamos reorganizar nossos arquivos. <br>

Vamos reestruturar o `server.js`. Vamos tirar toda a logica da nossa programação e separar em arquivos próprios. Criaremos um arquivo para cuidar das rotas, chamado `routes.js` dentro da pasta `src`. <br>
Apagaremos o nosso `app.get()` e vamos inserir uma outra função do express chamada `use()`. Essa função é um coringa, e diz respeito a qqer tipo de requisição. Então adicionando `app.use('/api', require('./src/routes'))` estamos dizendo que toda e qualquer requisição ao endpoint `/api` deve ser controlado pelo arquivo `./src/routes`
`server.js`
```javascript
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o APP
const app = express()

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

// Importando os models
requireDir('./src/models')

// routes exportado é importado e chamado a todo tipo de requisição à raiz /api
app.use('/api', require('./src/routes'))

// Servidor escutando a porta 3001
app.listen('3001')
```

Agora no arquivo `routes.js` instanciaremos o `Router()`do express. Agora estamos dizendo que toda reguisição do tipo `GET` a `/produtos` deve ser redirecionado à função `index` do controller `ProductController`. Vale lembrar que o arquivos `routes;js` só vai ser chamado quando estivermos dentro de `/api`. Então no caso do nosso servidor: `localhost:3001/api/products`

`src/routes.js`
```javascript
const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductController')

// Primeira rota
routes.get('/products', ProductController.index)

module.exports = routes
```

Agora definiremos o comportamendo da função `index` no nosso controller. Instanciamos o nosso model e usaremos uma função assíncrona para retornarmos os dados dos nossos produtos. Vale lembrar que o nosso `Product` é um model do mongoose, e é ele quem faz as operações relacionadas ao banco de dados.

`src/controllers/ProductController.js`
```javascript
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async index(req, res) {
        const products = await Product.find({})

        return res.json(products)
    }
}
```

### Step 9 * Criando os produtos
Como iremos enviar informações do tipo JSON para o nosso servidor, precisamos dizer a ele que vamos fazer isso. E pra isso vamos no arquivo `server.js` e adicionamos a linha com o código
```javascript
...

// Iniciando o APP
const app = express()
// Permitindo enviar para a API dados do tipo JSON
app.use(express.json())

...
```
Em seguida vamos definir uma nova rota no arquivo `routes.js`
```javascript
routes.post('/productos', ProductController.store)
```
E vamos adicionar a função `store` no nosso `ProductController`
```javascript
async store(req, res) {
        const product = await Product.create(req.body)

        return res.json(product)
    }
}
```
Agora, conforme nosso arquivo de rotas, quando houver um post no nosso endpoit `/products`, a função store será chamada. E nela o metodo create sera executado, criando um novo registro no nosso banco de acordo com o JSON q estiver vindo no corpo da requisição

Para testar nossa API, vc pode estar fazendo o download do `Postman` <a href="https://www.getpostman.com/">aqui</a> ou do `Insomnia` <a href="https://imsomnia.rest">aqui</a>

### Step 10 * Terminando o CRUD
Vamos terminar as outras rotas da nossa aplicação<br>
`ProductController.js`
```javascript
    async show(req, res) {
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },
    
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(product)
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id)

        res.send();
    }
    
```
`routes.js`
```javascript
routes.get('/products/:id', ProductController.show)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)
```
Os caso acima são muito simples e semelhantes aos vistos no step anterior. Vale ressaltar que no metodo update usamos o `findByIdAndUpdate` q é uma mão na roda ao trazer o registro do banco e já atualizá-lo, e o importante é o terceiro parâmetro `{ new: true }`, que faz com que o metodo retorno o objeto já atualizado. Sem essa opção, o objeto antigo é retornado.<br>
No método destroy tb contamos com a mao na roda.<br>
Não há segredos nas rotas tb... Apenas o id que eh passado na url e que eh recuperado pelo `req.params.id`


### Step 11 * Paginação
Vamo começar instalando o mongoose paginate com o comando `npm install mongoose-paginate`

vamos ao nosso model `Product` e importamos o paginate e vamos adicioná-lo como um plugin do nosso Schema:<br>
O arquivo ficará assim
```javascript
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema)
```

Agora vamos ao nosso controller e alteramos o metodo index<br>
Trocamos o `find()` por `paginate()`, e agora passamos 2 parametros<br>
O primeiro é o nosso `where`, da mesma forma que usamos no `find()`<br>
E o segundo é a nossa pagina atual e o limite de dados
```javascript
const products = await Product.paginate({}, { page: 1, limit: 10 })
```

Agora ao fazermos uma requisição ao nosso index, teremos um resultado um pouco diferente. Com algumas informações a mais<br>

Próximo passo é passarmos o parametro da página no nosso get<br>
Pra isso nos criaremos uma variável que, por padrão vai receber o valor 1, e q pode ser passado como parâmetro da minha rota com ?page<br>
Isso vai fazer com que nós consigamos controlar em qual página estamos passando o valor pela URL.<br>
Nosso metodo index ficará assim:
```javascript
    ...
    async index(req, res) {
        
        const { page = 1 } = req.query //desestruturação
        const products = await Product.paginate({}, { page, limit: 10 })

        return res.json(products)
    },
    ...
```
Agora ja é possivel passar a page na URL ex: `?page=2` ou `page=3`

### Step 12 * CORS
Agora vamos configurar nossa aplicação para que outros domínios possam acessá-la<br>
O CORS protege nos protege de requisições vindas de outros domínios, ou seja, se sua api estiver em um domínio e o app que irá consumir os dados gerados nela, estiver em outro, esse app será bloqueado e não terá acesso aos dados da api.<br>
Neste momento nós conseguimos acessar os dados via URL do navegador ou pelo POSTMAN ou INSOMNIA.<br>

vamos começar instalando esse pacote do npm: `npm install cors`<br>
Agora vamos ao nosso `server.js` importamos o nosso modulo do cors e dizemos pra nossa aplicação o utilizar
```javascript
...

const cors = require('cors')

...

app.use(cors())

...
```
Dentro do cors podemos melhorar a segurança e dizer quais dominios podem acessar e fazer diversas configurações. Deste modo, nossa aplicação será de visualização pública!