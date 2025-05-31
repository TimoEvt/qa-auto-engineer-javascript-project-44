import getRandomInt from '../utils/random.js'

const operators = ['+', '-', '*']

const getCalcRound = () => {
  const num1 = getRandomInt(1, 50)
  const num2 = getRandomInt(1, 50)
  const operator = operators[getRandomInt(0, operators.length - 1)]
  const question = `${num1} ${operator} ${num2}`

  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }

  return [question, String(correctAnswer)];
}

export default getCalcRound
