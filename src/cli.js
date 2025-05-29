import readlineSync from 'readline-sync';

function greetUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name; // добавили возврат имени
}

export default greetUser;
