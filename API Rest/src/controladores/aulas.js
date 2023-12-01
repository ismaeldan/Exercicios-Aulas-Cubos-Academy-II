let { aulas, identificadorAulas, instrutores } = require('../database')

const listaAulas = (req, res) => {
  return res.json(aulas)
}

const consultarAula = (req, res) => {
  const { id } = req.params

  const consulta = aulas.find(aula => {
    return aula.id === Number(id)
  })

  if (!consulta) {
    return res.status(404).json({ mensagem: 'Aula não encontrado' })
  }

  res.json(consulta)
}

const adicionarAulas = (req, res) => {
  const { id } = req.params
  const { titulo, descricao } = req.body

  if (!titulo) {
    return res.status(400).json({ mensagem: 'O titulo é obrigatorio' })
  }

  if (!descricao) {
    return res.status(400).json({ mensagem: 'A descrição é obrigatorio' })
  }

  const aula = {
    id: identificadorAulas++,
    instrutor_id: Number(id),
    titulo,
    descricao
  }

  aulas.push(aula)

  return res.status(201).json(aula)
}

const consultaAulaProfe = (req, res) => {
  const { id } = req.params

  const consultaProf = instrutores.find(instrutor => {
    return instrutor.id === Number(id)
  })

  const consultaAula = aulas.find(aula => {
    return aula.instrutor_id === Number(id)
  })

  if (!consultaProf) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado' })
  }

  if (!consultaAula) {
    return res.status(404).json({ mensagem: 'Aula não encontrado' })
  }

  res.json(consultaAula)
}

module.exports = {
  listaAulas,
  consultarAula,
  adicionarAulas,
  consultaAulaProfe
}
