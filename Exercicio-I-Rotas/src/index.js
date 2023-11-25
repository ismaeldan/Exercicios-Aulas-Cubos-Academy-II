const express = require('express')

const carro = require('./controladores/carros')

const app = express()

app.get('/', carro)

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
