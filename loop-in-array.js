const marvelList = ['Wolverine', 'Spider', 'Ironman', 'Thor', 'Locke', 'Hulk']

const scoreHeroes = [10, 9, 8, 5, 6, 7]

let marvelListAndScore = [marvelList, scoreHeroes]

console.log(
  `${marvelListAndScore[0][0]}, Score is: ${marvelListAndScore[1][0]}`
)
//obs: check index, get one a parameter of marveLisT, then catch second parameter of scoreHeroes.

const heroAndScore = heroName => {
  if (marvelListAndScore[0].includes(heroName)) {
    //Method include return booleano true or false.
    let indice = marvelListAndScore[0].indexOf(heroName) // Method indexOF return indice number
    return (
      marvelListAndScore[0][indice] +
      ', your score is ' +
      marvelListAndScore[1][indice]
    )
  } else {
    return 'Hero not found!'
  }
}
console.log(heroAndScore('Thor'))
console.log(heroAndScore('Batman'))
