import readlineSync from 'readline-sync';

const iterationCounts = 3;

const playGame = (generateGameData, message) => {
  console.log('Welcome to the brain-games!');
  console.log(`${message}\n`);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 1; i <= iterationCounts; i += 1) {
    const [randomNum, answer] = generateGameData();
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
