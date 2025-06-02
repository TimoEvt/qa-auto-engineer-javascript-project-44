import readlineSync from 'readline-sync'

const maxRounds = 3

export default function runGame(game) {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)

  for (let round = 0; round < maxRounds; round += 1) {
    const { question, correctAnswer } = game.generateRound()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}
