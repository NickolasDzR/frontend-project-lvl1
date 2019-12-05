import readlineSync from 'readline-sync';

const startTheGame = () => {
  console.log('Welcome to the brain-games!');
  console.log(`Answer "yes" if the number is even, otherwise answer "no".\n`)
  const actual = readlineSync.question('May i have your name? ');
  console.log(`Hello ${actual}!\n`);
};

export default startTheGame;