const marvelHeroes = ['Wolverine', 'Thor', 'Iron Man', 'Spider Man']
const lowScore = [10, 5, 8, 10]

let disapproved = marvelHeroes.filter((hero, indice) => lowScore[indice] < 6)

console.log(`The hero ${disapproved} not wasn't approved.`)
