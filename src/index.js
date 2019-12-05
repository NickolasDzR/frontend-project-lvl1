import readlineSync from 'readline-sync';
import getTheRightAnswer from './codeGames/getEven';

const startTheGame = () => {
  console.log('Welcome to the brain-games!');
  console.log(`Answer "yes" if the number is even, otherwise answer "no".\n`)
  const actual = readlineSync.question('May i have your name? ');
  console.log(`Hello ${actual}!\n`);
  for (let i = 1; i <= 3; i += 1) {
    const [randomNum, theAnswer] = getTheRightAnswer();
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question(`Your answer `);
    if (userAnswer != theAnswer) {
      return console.log(`This is wrong aswer`);
    }
    console.log('Correct!')
  }
  return console.log(`Congratulations, ${actual}!`);
}


export default startTheGame;