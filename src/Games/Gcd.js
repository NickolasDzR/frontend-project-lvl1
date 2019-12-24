import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';


const questionText = 'Find the greatest common divisor of given numbers.';

const isGcd = (firstNumber, secondNumber) => {
  const finderDivisor = (nOne, nTwo) => {
    if (nTwo === 0) {
      return nOne;
    }
    return finderDivisor(nTwo, nOne % nTwo);
  };
  return finderDivisor(firstNumber, secondNumber);
};

const getTheRightAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = isGcd(firstNumber, secondNumber);
  return [question, answer];
};
export default () => startTheGame(getTheRightAnswer, questionText);
