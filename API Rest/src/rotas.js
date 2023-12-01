const express = require('express')

const {
  listaInstrutores,
  consultaInstrutor,
  cadastrarInstrutores,
  atualizarInstrutor,
  atualizarRecurso,
  deletarInstrutor
} = require('./controladores/instrutores')

const {
  listaAulas,
  consultarAula,
  adicionarAulas,
  consultaAulaProfe
} = require('./controladores/aulas')

const rotas = express()

rotas.get('/instrutores', listaInstrutores)

rotas.get('/instrutores/:id', consultaInstrutor)

rotas.post('/instrutores', cadastrarInstrutores)

rotas.put('/instrutores/:id', atualizarInstrutor)

rotas.patch('/instrutores/:id/status', atualizarRecurso)

rotas.delete('/instrutores/:id', deletarInstrutor)

rotas.get('/aulas', listaAulas)

rotas.get('/aulas/:id', consultarAula)

rotas.post('/instrutores/:id/aulas', adicionarAulas)

rotas.get('/instrutores/:id/aulas', consultaAulaProfe)

module.exports = rotas
