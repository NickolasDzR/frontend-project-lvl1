import readlineSync from 'readline-sync';

const startTheGame = (getTheRightAnswer, message) => {
  console.log('Welcome to the brain-games!');
  console.log(`${message}\n`);
  const actual = readlineSync.question('May i have your name? ');
  console.log(`Hello ${actual}!\n`);
  for (let i = 1; i <= 3; i += 1) {
    const [randomNum, theAnswer] = getTheRightAnswer();
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer != theAnswer) {
      if (userAnswer != 'yes') {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${theAnswer}'.`);
        return console.log(`Let's try again, ${actual}!`);
      }
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      return console.log(`Let's try again, ${actual}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${actual}!`);
};


export default startTheGame;
