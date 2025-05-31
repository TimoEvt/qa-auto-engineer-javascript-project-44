import runGame from '../index.js'
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export function generateRound() {
  const num = getRandomInt(1, 100)
  const question = num.toString()
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no'
  return { question, correctAnswer }
}
export default function brainEven() {
  runGame({ generateRound })
}
