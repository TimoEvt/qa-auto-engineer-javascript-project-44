const runGameEngine = require('./engine')

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateEvenRound() {
  const question = getRandomNumber(1, 100)
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no'
  return [question.toString(), correctAnswer]
}

function main() {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
  runGameEngine(generateEvenRound, rule)
}

main()
