import { getRandomInt } from '../random-data.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const firstInt = getRandomInt();
  const secondInt = getRandomInt();

  return `${firstInt} ${secondInt}`;
};

const getAnswer = (nums) => {
  const [strFirstNum, strSecondNum] = nums.split(' ');
  const firstNum = Number(strFirstNum);
  const secondNum = Number(strSecondNum);
  const minNum = Math.min(firstNum, secondNum);

  let gcd = 1;
  for (let num = 2; num <= minNum; num += 1) {
    if (firstNum % num === 0 && secondNum % num === 0) {
      gcd = num;
    }
  }

  return gcd;
};

export { getAnswer, getQuestion, rules };
