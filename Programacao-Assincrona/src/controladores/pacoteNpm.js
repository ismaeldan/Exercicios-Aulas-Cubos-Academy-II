const {
  getPackageDescriptionNpm,
  getCityFromZipcode
} = require('utils-playground')

const cidade = async (req, res) => {
  const cidade = await getCityFromZipcode('08490850')

  res.send(cidade)
}

const packageNPM = async (req, res) => {
  const { nomePacote } = req.params

  const pacote = await getPackageDescriptionNpm(nomePacote)

  res.send(pacote)
}

module.exports = {
  cidade,
  packageNPM
}
