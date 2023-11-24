const professores = require('../bancoDados')

const filtrarProfs = (req, res) => {
  const { stack } = req.query

  let resultado = professores

  if (stack) {
    resultado = professores.filter(professor => {
      return professor.stack === stack
    })
  }

  res.send(resultado)
}

const procurarProfs = (req, res) => {
  const findProf = professores.find(professor => {
    return professor.id === Number(req.params.id)
  })
  res.send(findProf)
}

module.exports = {
  procurarProfs,
  filtrarProfs
}
