import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';


const question = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (firstNumber, secondNumber) => {
  const finderDivisor = (nOne, nTwo) => {
    if (nTwo === 0) {
      return nOne;
    }
    return finderDivisor(nTwo, nOne % nTwo);
  };
  return [`${firstNumber} ${secondNumber}`, finderDivisor(firstNumber, secondNumber)];
};

const getTheRightAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  return greatestCommonDivisor(firstNumber, secondNumber);
};
export default () => startTheGame(getTheRightAnswer, question);
