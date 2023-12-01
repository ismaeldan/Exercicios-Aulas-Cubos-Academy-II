let { instrutores, identificadorInstrutor } = require('../database')

const listaInstrutores = (req, res) => {
  return res.json(instrutores)
}

const consultaInstrutor = (req, res) => {
  const { id } = req.params

  const consulta = instrutores.find(instrutor => {
    return instrutor.id === Number(id)
  })

  if (!consulta) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado' })
  }

  return res.json(consulta)
}

const cadastrarInstrutores = (req, res) => {
  const { nome, email, status } = req.body

  if (!nome) {
    return res.status(400).json({ mensagem: 'O nome é obrigatorio' })
  }

  if (!email) {
    return res.status(400).json({ mensagem: 'O email é obrigatorio' })
  }

  const instrutor = {
    id: identificadorInstrutor++,
    nome,
    email,
    status: status ?? true
  }

  instrutores.push(instrutor)

  return res.status(201).json(instrutor)
}

const atualizarInstrutor = (req, res) => {
  const { id } = req.params
  const { nome, email, status } = req.body

  if (!nome) {
    return res.status(400).json({ mensagem: 'O nome é obrigatorio' })
  }

  if (!email) {
    return res.status(400).json({ mensagem: 'O email é obrigatorio' })
  }

  const consulta = instrutores.find(instrutor => {
    return instrutor.id === Number(id)
  })

  if (!consulta) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado' })
  }

  consulta.nome = nome
  consulta.email = email
  consulta.status = status

  return res.status(204).send()
}

const atualizarRecurso = (req, res) => {
  const { id } = req.params
  const { status } = req.body

  const consulta = instrutores.find(instrutor => {
    return instrutor.id === Number(id)
  })

  if (!consulta) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado' })
  }

  consulta.status = status

  return res.status(204).send()
}

const deletarInstrutor = (req, res) => {
  const { id } = req.params

  const consulta = instrutores.find(instrutor => {
    return instrutor.id === Number(id)
  })

  if (!consulta) {
    return res.status(404).json({ mensagem: 'Instrutor não encontrado' })
  }

  instrutores = instrutores.filter(instrutor => {
    return instrutor.id !== Number(id)
  })

  return res.status(204).send()
}

module.exports = {
  listaInstrutores,
  consultaInstrutor,
  cadastrarInstrutores,
  atualizarInstrutor,
  atualizarRecurso,
  deletarInstrutor
}
