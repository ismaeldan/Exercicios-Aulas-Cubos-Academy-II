const carros = require('../bancoDados')

const carro = (req, res) => {
  res.send(carros)
}

module.exports = carro
