const express = require('express')

const { cidade, packageNPM } = require('./controladores/pacoteNpm')

const rotas = express()

rotas.get('/cidade', cidade)

rotas.get('/pacote/:nomePacote', packageNPM)

module.exports = rotas
