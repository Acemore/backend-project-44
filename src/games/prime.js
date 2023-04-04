import {
  getRandomInt,
  randomNumsGeneratorMinValue as min,
  randomNumsGeneratorMaxValue as max,
} from '../random-data.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestion = () => getRandomInt(min, max);
const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const correctAnswer = getAnswer(question);

  return [question, correctAnswer];
};

export { getQuestionAndAnswer, rules };
