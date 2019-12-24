import readlineSync from 'readline-sync';

const sumOfQuestions = 3;

const startTheGame = (getTheRightAnswer, message) => {
  console.log('Welcome to the brain-games!');
  console.log(`${message}\n`);
  const actual = readlineSync.question('May i have your name? ');
  console.log(`Hello ${actual}!\n`);
  for (let i = 1; i <= sumOfQuestions; i += 1) {
    const [randomNum, theAnswer] = getTheRightAnswer();
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== `${theAnswer}`) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${theAnswer}'.`);
      console.log(`Let's try again, ${actual}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${actual}!`);
};


export default startTheGame;
