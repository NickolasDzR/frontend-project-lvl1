import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkTheNumberIfPrime = (number) => {
  let i = 2;
  if (number < i) {
    return false;
  }
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getTheRightAnswer = () => {
  const number = randomNumber();
  if (checkTheNumberIfPrime(number) === true) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};

export default () => startTheGame(getTheRightAnswer, question);
