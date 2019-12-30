import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';


const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  const finderDivisor = (nOne, nTwo) => {
    if (nTwo === 0) {
      return nOne;
    }
    return finderDivisor(nTwo, nOne % nTwo);
  };
  return finderDivisor(firstNumber, secondNumber);
};

const getTheRightAnswer = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  return [question, answer];
};
export default () => playGame(getTheRightAnswer, gameDescription);
