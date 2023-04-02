import {
  getRandomInt,
  randomNumsGeneratorMinValue as min,
  randomNumsGeneratorMaxValue as max,
} from '../random-data.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = getRandomInt(min, max);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  return [num, correctAnswer];
};

export { getQuestionAndAnswer, rules };
