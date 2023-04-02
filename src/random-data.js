import _ from 'lodash';

const randomNumsGeneratorMinValue = 0;
const randomNumsGeneratorMaxValue = 100;

const getRandomInt = () => _.random(randomNumsGeneratorMinValue, randomNumsGeneratorMaxValue);
const getRandomOperator = () => _.sample(['+', '-', '*']);

export { getRandomInt, getRandomOperator };
