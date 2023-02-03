// To calculate the average of 3 classes using a single function.

const marvelClass = [10, 6, 8, 7, 5]
const dcClass = [7, 6, 9, 6, 4]
const twdClass = [4, 8, 10, 7, 9]

function averageScore(classScore) {
  const sumScore = classScore.reduce((acum, atual) => atual + acum, 0)
  return sumScore / classScore.length
}

console.log(`Average Marvel is ${averageScore(marvelClass)}`)
console.log(`Average DC is ${averageScore(dcClass)}`)
console.log(`Average TWD is ${averageScore(twdClass)}`)
