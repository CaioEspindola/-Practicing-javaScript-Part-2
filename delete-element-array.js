const score = [10, 7, 8, 5, 10]
score.pop()
console.log(score)

let scoreAverage = (score[0] + score[1] + score[2] + score[3]) / score.length
console.log(`The average is ${scoreAverage}`)
