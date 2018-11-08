# NodeJs

### Step 1 * Iniciando o projeto
Crie a pasta do projeto, entre nela e execute `npm init -y`
Isso ira fazer com que o arquivo package.json seja criado

### Step 2 * Instalando e configurando o express
Instale o express via npm com `npm install express`
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
Instale o nodemon via npm com `npm install -D nodemon`
Após concluir a instalação execute o comando
```bash
nodemon server.js
```

### Step 4 * Instalando o docker
Faça o download e instale o Docker CE em <a href="https://docs.docker.com">docker.com</a>
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

A instalação é fácil e na primeira tela, é necessário adicionar uma conexão.
Clique com o botão direito do mouse > Add > informe um nome para a conexão, o host: localhost e a porta: 27017.
Salve e conecte. Pronto!

<i>`Obs. O container do docker, depois de criado e nomeado, pode ser reativado com docker start [nome do container], exemplo: docker start mongodb. Isso pode acontecer quando voce reiniciar seu PC. O container é parado e fica em um estado de aguardando, até ser iniciado novamente com o docker start`</i>

### Step 6 * Conectando à base da dados