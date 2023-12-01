const database = {
  identificadorInstrutor: 3,
  identificadorAulas: 2,
  instrutores: [
    {
      id: 1,
      nome: 'Guido',
      email: 'guido@email.com',
      status: true
    },
    {
      id: 2,
      nome: 'Dani',
      email: 'dani@email.com',
      status: true
    }
  ],
  aulas: [
    {
      id: 1,
      instrutor_id: 1,
      titulo: 'Desenvolvedor Front-end',
      descricao: 'Fazer o front-en de um site'
    }
  ]
}

module.exports = database
