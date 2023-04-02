import { getRandomInt } from '../random-data.js';

const minProgressionTerm = 1;
const maxProgressionTerm = 19;
const minProgressionCommonDiff = -12;
const maxProgressionCommonDiff = 12;
const minProgressionLen = 5;
const maxProgressionLen = 10;

const rules = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  let progressionTerm = getRandomInt(minProgressionTerm, maxProgressionTerm);
  const progressionCommonDiff = getRandomInt(minProgressionCommonDiff, maxProgressionCommonDiff);
  const progressionLen = getRandomInt(minProgressionLen, maxProgressionLen);

  const progression = [];
  for (let i = 0; i < progressionLen; i += 1) {
    progression.push(progressionTerm);
    progressionTerm += progressionCommonDiff;
  }

  const randomProgressionTermIndex = getRandomInt(0, progression.length - 1);
  const hiddenTerm = progression[randomProgressionTermIndex];
  progression[randomProgressionTermIndex] = '..';

  const question = progression.join(' ');

  return [question, String(hiddenTerm)];
};

export { getQuestionAndAnswer, rules };
