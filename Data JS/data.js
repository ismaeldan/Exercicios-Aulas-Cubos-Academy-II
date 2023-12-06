// const finalDaCopa = new Date(2002, 5, 30, 8)

// console.log(finalDaCopa)

//=========================================

// const finalDaCopa = new Date(2002, 5, 30, 8)

// const umaHoraDepois = new Date(+finalDaCopa + 1000 * 60 * 60)

// console.log(umaHoraDepois)

//=========================================

const finalDaCopa = new Date(2002, 5, 30, 8)

const primeiroGol = new Date(+finalDaCopa + (60 + 22) * 60 * 1000)

console.log(primeiroGol)

const segundoGol = new Date(+finalDaCopa + 1000 * 60 * (60 + 34))

console.log(segundoGol)
