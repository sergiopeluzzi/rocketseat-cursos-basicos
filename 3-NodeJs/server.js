const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// Iniciando o APP
const app = express()
// Permitindo enviar para a API dados do tipo JSON
app.use(express.json())

// Permitindo o acesso de outros dominios
app.use(cors())

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

// Importando os models
requireDir('./src/models')

// routes exportado é importado e chamado a todo tipo de requisição à raiz /api
app.use('/api', require('./src/routes'))

// Servidor escutando a porta 3001
app.listen('3001')