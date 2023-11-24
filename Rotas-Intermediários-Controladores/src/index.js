const express = require('express')

const { procurarProfs, filtrarProfs } = require('./controladores/professores')

const app = express()

app.get('/professores', filtrarProfs)

app.get('/professores/:id', procurarProfs)

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
