import { getRandomInt } from '../random-data.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => getRandomInt();

const getAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

export { getAnswer, getQuestion, rules };
