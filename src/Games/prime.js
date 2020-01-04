import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const isSimple = (iter) => {
    if (iter > number / 2) {
      return true;
    }
    if (number % iter === 0) {
      return false;
    }
    return isSimple(iter + 1);
  };
  return isSimple(2);
};

const generateGameData = () => {
  const number = randomNumber(1, 100);
  const answer = isPrime(number) === true ? 'yes' : 'no';
  return [number, answer];
};

export default () => playGame(generateGameData, gameDescription);
