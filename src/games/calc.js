import {
  getRandomInt,
  getRandomOperator,
  randomNumsGeneratorMinValue as min,
  randomNumsGeneratorMaxValue as max,
} from '../random-data.js';

const rules = 'What is the result of the expression?';

const getQuestion = () => {
  const firstOperand = getRandomInt(min, max);
  const secondOperand = getRandomInt(min, max);
  const operator = getRandomOperator();

  return [firstOperand, operator, secondOperand];
};

const getAnswer = (firstOperand, secondOperand, operator) => {
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

  return correctAnswer;
};

const getQuestionAndAnswer = () => {
  let question = getQuestion();
  const [firstOperand, operator, secondOperand] = question;

  question = question.join(' ');
  const correctAnswer = getAnswer(firstOperand, secondOperand, operator);

  return [question, String(correctAnswer)];
};

export { getQuestionAndAnswer, rules };
