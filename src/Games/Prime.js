import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
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
  const number = randomNumber(1, 100);
  const answer = isPrime(number) === true ? 'yes' : 'no';
  return [number, answer];
};

export default () => playGame(getTheRightAnswer, gameDescription);
