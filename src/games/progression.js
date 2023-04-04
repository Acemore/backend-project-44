import { getRandomInt } from '../random-data.js';

const minProgressionTerm = 1;
const maxProgressionTerm = 19;
const minProgressionCommonDiff = -12;
const maxProgressionCommonDiff = 12;
const minProgressionLen = 5;
const maxProgressionLen = 10;

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  let progressionTerm = getRandomInt(minProgressionTerm, maxProgressionTerm);
  const progressionCommonDiff = getRandomInt(minProgressionCommonDiff, maxProgressionCommonDiff);
  const progressionLen = getRandomInt(minProgressionLen, maxProgressionLen);
  const progression = [];

  for (let i = 0; i < progressionLen; i += 1) {
    progression.push(progressionTerm);
    progressionTerm += progressionCommonDiff;
  }

  return progression;
};

const getHiddenTermIndex = (progression) => getRandomInt(0, progression.length - 1);

const getProgressionWithHiddenTerm = (progression, hiddenTermIndex) => {
  const progressionCopy = progression.slice();
  progressionCopy[hiddenTermIndex] = '..';

  return progressionCopy.join(' ');
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const randomProgressionTermIndex = getHiddenTermIndex(progression);

  const question = getProgressionWithHiddenTerm(progression, randomProgressionTermIndex);
  const correctAnswer = progression[randomProgressionTermIndex];

  return [question, String(correctAnswer)];
};

export { getQuestionAndAnswer, rules };
