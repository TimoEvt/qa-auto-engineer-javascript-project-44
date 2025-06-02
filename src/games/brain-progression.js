export default function generateRound() {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const progressionLength = 10
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 10)

  const progression = []
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + i * step)
  }

  const hiddenIndex = getRandomNumber(0, progressionLength - 1)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return [question, correctAnswer]
}
