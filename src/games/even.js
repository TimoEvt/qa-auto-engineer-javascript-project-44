const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

const isEven = (num) => num % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomNumber();
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { gameDescription, generateRound };
