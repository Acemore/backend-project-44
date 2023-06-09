import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(game.rules);

  for (let roundNumber = 0; roundNumber < roundsCount; roundNumber += 1) {
    const [num, correctAnswer] = game.getQuestionAndAnswer();
    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
