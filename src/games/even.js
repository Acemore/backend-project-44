import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../random-nums-generator.js';

const roundsCount = 3;
const minNumForRandomNumsGenerator = 0;
const maxnNumForRandomNumsGenerator = 100;

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let roundNumber = 0; roundNumber < roundsCount; roundNumber += 1) {
    const num = getRandomIntInclusive(
      minNumForRandomNumsGenerator,
      maxnNumForRandomNumsGenerator,
    );
    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(num);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
