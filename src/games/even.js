import {
  getRandomInt,
  randomNumsGeneratorMinValue as min,
  randomNumsGeneratorMaxValue as max,
} from '../random-data.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => getRandomInt(min, max);
const getAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const correctAnswer = getAnswer(question);

  return [question, correctAnswer];
};

export { getQuestionAndAnswer, rules };
