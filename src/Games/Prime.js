import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkTheNumberIfPrime = (number) => {
  let i = 2;
  if (number < i) {
    return [number, 'no'];
  }
  while (i < number) {
    if (number % i === 0) {
      return [number, 'no'];
    }
    i += 1;
  }
  return [number, 'yes'];
};

const getTheRightAnswer = () => {
  const number = randomNumber();
  return checkTheNumberIfPrime(number);
};

export default () => startTheGame(getTheRightAnswer, question);
