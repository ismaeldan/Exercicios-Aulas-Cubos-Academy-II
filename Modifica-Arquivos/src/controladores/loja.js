const produtos = require('../database/produtos')

const fs = require('fs/promises')

const listaProdutos = (req, res) => {
  res.send(produtos)
}

const venda = async (req, res) => {
  const { produto_id, quantidade } = req.body

  const consulta = produtos.find(produdo => {
    return produdo.id === Number(produto_id)
  })

  if (!consulta) {
    return res.status(404).json({ mensagem: 'O ID do produto não existe' })
  }

  try {
    const ler = await fs.readFile('./src/database/vendas.json')

    const vendasFeita = JSON.parse(ler)

    vendasFeita.vendas.push({
      produto: consulta,
      quantidade
    })

    await fs.writeFile(
      './src/database/vendas.json',
      JSON.stringify(vendasFeita)
    )

    return res.status(201).json('Vendas registrada')
  } catch (erro) {
    return res.status(400).json(erro.message)
  }
}

module.exports = {
  listaProdutos,
  venda
}
