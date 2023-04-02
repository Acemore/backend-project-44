import {
  getRandomInt,
  getRandomOperator,
  randomNumsGeneratorMinValue as min,
  randomNumsGeneratorMaxValue as max,
} from '../random-data.js';

const rules = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const firstOperand = getRandomInt(min, max);
  const secondOperand = getRandomInt(min, max);
  const operator = getRandomOperator();

  const expr = `${firstOperand} ${operator} ${secondOperand}`;

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = firstOperand + secondOperand;
      break;
    case '-':
      correctAnswer = firstOperand - secondOperand;
      break;
    case '*':
      correctAnswer = firstOperand * secondOperand;
      break;
    default:
      break;
  }

  return [expr, String(correctAnswer)];
};

export { getQuestionAndAnswer, rules };
