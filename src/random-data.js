import _ from 'lodash';

const randomNumsGeneratorMinValue = 0;
const randomNumsGeneratorMaxValue = 100;

const getRandomInt = (min, max) => _.random(min, max);
const getRandomOperator = () => _.sample(['+', '-', '*']);

export {
  getRandomInt,
  getRandomOperator,
  randomNumsGeneratorMinValue,
  randomNumsGeneratorMaxValue,
};
