const express = require('express')

const { procurarProfs, filtrarProfs } = require('./controladores/professores')

const app = express()

const intermediario = (req, res, next) => {
  console.log('Intermediario Principal')
  next()
}

const intermediarioRota = (req, res, next) => {
  console.log('intermediario de rota')
  next()
}

app.use(intermediario)

app.get('/professores', intermediarioRota, filtrarProfs)

app.get('/professores/:id', procurarProfs)

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
