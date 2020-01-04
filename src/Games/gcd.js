import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  const finderDivisor = (numOne, numTwo) => {
    if (numTwo === 0) {
      return numOne;
    }
    return finderDivisor(numTwo, numOne % numTwo);
  };
  return finderDivisor(firstNumber, secondNumber);
};

const generateGameData = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${getGcd(firstNumber, secondNumber)}`;
  return [question, answer];
};

export default () => playGame(generateGameData, gameDescription);
