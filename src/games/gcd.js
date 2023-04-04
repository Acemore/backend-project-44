import {
  getRandomInt,
  randomNumsGeneratorMinValue as min,
  randomNumsGeneratorMaxValue as max,
} from '../random-data.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const firstNum = getRandomInt(min, max);
  const secondNum = getRandomInt(min, max);

  return [firstNum, secondNum];
};

const getAnswer = (firstNum, secondNum) => {
  let gcd = 1;

  if (firstNum !== 0 && secondNum !== 0) {
    const minNum = Math.min(firstNum, secondNum);

    for (let num = 2; num <= minNum; num += 1) {
      if (firstNum % num === 0 && secondNum % num === 0) {
        gcd = num;
      }
    }
  } else {
    gcd = Math.max(firstNum, secondNum);
  }

  return gcd;
};

const getQuestionAndAnswer = () => {
  let question = getQuestion();
  const [firstNum, secondNum] = question;

  question = question.join(' ');
  const correctAnswer = getAnswer(firstNum, secondNum);

  return [question, String(correctAnswer)];
};

export { getQuestionAndAnswer, rules };
