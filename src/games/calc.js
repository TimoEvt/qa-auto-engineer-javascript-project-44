import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];

<<<<<<< HEAD
const question = `Question: ${num1} ${operator} ${num2}`;
=======
  const question = `${num1} ${operator} ${num2}`;
>>>>>>> 66184ca (Fix: корректно формировать вопрос с подстановкой чисел и оператора)
  let answer;
  switch (operator) {
    case '+': answer = String(num1 + num2); break;
    case '-': answer = String(num1 - num2); break;
    case '*': answer = String(num1 * num2); break;
    default:
<<<<<<< HEAD
      throw new Error(`Unknown operator: ${operator}`);
=======
      throw new Error(`Unknown operator: \${operator}`);
>>>>>>> 66184ca (Fix: корректно формировать вопрос с подстановкой чисел и оператора)
  }

  return [question, answer];
};

const runCalcGame = () => {
  runEngine(generateRound, description);
};

export default runCalcGame;
