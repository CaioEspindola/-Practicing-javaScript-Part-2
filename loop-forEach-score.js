//Loop forEach to calculate average Score.

const scores = [10, 6.5, 8, 7.5]

let sumScore = 0

//     Para cada elemento da Array scores. Função como parametro, para executar algo.
scores.forEach(score => {
  sumScore += score
  // Confere o parametro e interpreta que são cada um dos elementos da Array scores e então soma (+=) os valores, entregando o resultado para variavel sumScore.
})

let averageScore = sumScore / scores.length

console.log(averageScore)

//OBS: É um MÉTODO que tem como ARGUMENTO uma FUNÇÃO. que vai += somar os valores da Array e retornar atualizando a variavel.
