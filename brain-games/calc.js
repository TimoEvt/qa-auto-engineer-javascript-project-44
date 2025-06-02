const runGameEngine = require('./engine')

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateCalcRound() {
  const operations = ['+', '-', '*']
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)
  const operator = operations[Math.floor(Math.random() * operations.length)]

  let result
  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    default:
      break
  }

  const question = `${num1} ${operator} ${num2}`
  return [question, result]
}

function main() {
  const rule = 'What is the result of the expression?'
  runGameEngine(generateCalcRound, rule)
}

main()
