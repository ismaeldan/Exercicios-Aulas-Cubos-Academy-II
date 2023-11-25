const express = require('express')

const { filtroCarro, findId } = require('./controladores/carros')

const { validarSenha } = require('./middleware')

const app = express()

app.use(validarSenha)

app.get('/carro', filtroCarro)

app.get('/carro/:id', findId)

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
