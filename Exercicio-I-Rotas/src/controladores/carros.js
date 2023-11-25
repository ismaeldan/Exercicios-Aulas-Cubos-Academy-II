const carros = require('../bancoDados')

const filtroCarro = (req, res) => {
  const { marca, cor } = req.query

  let resultado = carros

  if (marca) {
    resultado = carros.filter(carro => {
      return carro.marca === marca
    })
  }

  if (cor) {
    resultado = carros.filter(carro => {
      return carro.cor === cor
    })
  }

  res.send(resultado)
}

const findId = (req, res) => {
  const findIdCarro = carros.find(carro => {
    return carro.id === Number(req.params.id)
  })
  res.send(findIdCarro)
}

module.exports = {
  filtroCarro,
  findId
}
