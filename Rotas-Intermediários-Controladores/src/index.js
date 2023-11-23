const express = require('express')

const app = express()

const professores = [
  { id: 1, nome: 'Ismael', stack: 'Backend' },
  { id: 2, nome: 'Guido', stack: 'Backend' },
  { id: 3, nome: 'Vidal', stack: 'Backend' },
  { id: 4, nome: 'Dani', stack: 'Frontend' },
  { id: 5, nome: 'Fernanda', stack: 'Frontend' }
]

app.get('/professores', (req, res) => {
  const { stack } = req.query

  let resultado = professores

  if (stack) {
    resultado = professores.filter(professor => {
      return professor.stack === stack
    })
  }

  res.send(resultado)
})

app.get('/professores/:id', (req, res) => {
  const findProf = professores.find(professor => {
    return professor.id === Number(req.params.id)
  })
  res.send(findProf)
})

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
