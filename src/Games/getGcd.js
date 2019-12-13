import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';


const question = 'Find the greatest common divisor of given numbers.';

const getTheRightAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const smallestDivisor = (n, m) => {
    if (m === 0) {
      return [`${firstNumber} ${secondNumber}`, n];
    }
    return smallestDivisor(m, n % m);
  };
  return smallestDivisor(firstNumber, secondNumber);
};
export default () => startTheGame(getTheRightAnswer, question);
