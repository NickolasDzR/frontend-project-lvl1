import readlineSync from 'readline-sync';

const startTheGame = () => {
    console.log('Welcome to the brain-games!');

    const actual = readlineSync.question('May i have your name? ');
    console.log(`Hello ${actual}!`);
}

export default startTheGame;