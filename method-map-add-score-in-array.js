const scores = [10, 8, 7, 6]

let updateScores = scores.map(score => (score == 10 ? score : score + 1))

console.log(updateScores)
