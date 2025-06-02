import runGame from '../index.js'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomOperator() {
  const ops = ['+', '-', '*']
  return ops[getRandomInt(0, ops.length - 1)]
}

export function generateRound() {
  const num1 = getRandomInt(1, 50)
  const num2 = getRandomInt(1, 50)
  const operator = getRandomOperator()

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = (num1 + num2).toString()
      break
    case '-':
      correctAnswer = (num1 - num2).toString()
      break
    case '*':
      correctAnswer = (num1 * num2).toString()
      break
    default:
      break
  }

  const question = `${num1} ${operator} ${num2}`

  return { question, correctAnswer }
}

export default function brainCalc() {
  runGame({ generateRound })
}
