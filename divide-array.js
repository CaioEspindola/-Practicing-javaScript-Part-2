//Method splice

const heroes = [
  'Wolverine',
  'Spider',
  'Ironman',
  'Thor',
  'Locke',
  'Hulk',
  'Batman',
  'Dead Pool',
  'Jocker',
  'Aquaman',
  'Flash',
  'Robin',
  'Superman',
  'Wonder Woman'
]

console.log('Tamanho da Array: ', heroes.length)

const marvel = heroes.slice(0, heroes.length / 2)
const dc = heroes.slice(heroes.length / 2)

console.log(`Marvel Heroes: ${marvel}`)
console.log(`DC Heroes: ${dc}`)
