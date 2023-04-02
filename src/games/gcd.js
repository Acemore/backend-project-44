import {
  getRandomInt,
  randomNumsGeneratorMinValue as min,
  randomNumsGeneratorMaxValue as max,
} from '../random-data.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNum = getRandomInt(min, max);
  const secondNum = getRandomInt(min, max);
  const minNum = Math.min(firstNum, secondNum);

  const nums = `${firstNum} ${secondNum}`;

  let gcd = 1;
  for (let num = 2; num <= minNum; num += 1) {
    if (firstNum % num === 0 && secondNum % num === 0) {
      gcd = num;
    }
  }

  return [nums, String(gcd)];
};

export { getQuestionAndAnswer, rules };
