import { getRandomInt, getRandomOperator } from '../random-data.js';

const rules = 'What is the result of the expression?';

const getQuestion = () => {
  const firstOperand = getRandomInt();
  const secondOperand = getRandomInt();
  const operator = getRandomOperator();

  return `${firstOperand} ${operator} ${secondOperand}`;
};

const getAnswer = (expr) => {
  const [strFirstOperand, operator, strSecondOperand] = expr.split(' ');
  const firstOperand = Number(strFirstOperand);
  const secondOperand = Number(strSecondOperand);

  let answer;
  switch (operator) {
    case '+':
      answer = firstOperand + secondOperand;
      break;
    case '-':
      answer = firstOperand - secondOperand;
      break;
    case '*':
      answer = firstOperand * secondOperand;
      break;
    default:
      break;
  }

  return answer;
};

export { getAnswer, getQuestion, rules };
