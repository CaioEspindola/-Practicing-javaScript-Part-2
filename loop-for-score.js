//Loop for calculate average Score.

const score = [10, 6.5, 8, 7.5]

let sumScore = 0

for (i = 0; i < score.length; i++) {
  sumScore += score[i]
}

let averageScore = sumScore / score.length

console.log(averageScore)
