import runGame from '../index.js'
import getRandomInt from '../utils.js'

const description = 'What is the result of the expression?'

const generateRound = () => {
  const operators = ['+', '-', '*']
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const operator = operators[getRandomInt(0, operators.length - 1)]

  const question = `${num1} ${operator} ${num2}`
  let answer
  switch (operator) {
    case '+': answer = String(num1 + num2)
      break
    case '-': answer = String(num1 - num2)
      break
    case '*': answer = String(num1 * num2)
      break
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }

  return [question, answer]
}

const runCalcGame = () => {
  runGame(generateRound, description)
}

export default runCalcGame
