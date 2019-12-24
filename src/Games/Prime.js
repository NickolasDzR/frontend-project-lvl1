import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let i = 2;
  if (number < i) {
    return 'no';
  }
  while (i < number) {
    if (number % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const getTheRightAnswer = () => {
  const number = randomNumber();
  const answer = isPrime(number);
  return [number, answer];
};

export default () => startTheGame(getTheRightAnswer, questionText);
