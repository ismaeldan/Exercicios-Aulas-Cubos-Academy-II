const express = require('express')

const { filtroCarro, findId } = require('./controladores/carros')

const app = express()

app.get('/carro', filtroCarro)

app.get('/carro/:id', findId)

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
