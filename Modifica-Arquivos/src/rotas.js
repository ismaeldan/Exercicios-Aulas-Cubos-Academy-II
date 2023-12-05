const express = require('express')

const { listaProdutos, venda } = require('./controladores/loja')

const rotas = express()

rotas.get('/produtos', listaProdutos)

rotas.post('/produtos', venda)

module.exports = rotas
