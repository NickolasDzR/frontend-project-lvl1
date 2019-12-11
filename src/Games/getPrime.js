import startTheGame from '..';
import randomNumber from './randomNumber';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getTheRightAnswer = () => {
  let i = 2;
  const rnd = randomNumber();
  if (rnd < i) {
    return [rnd, 'no'];
  }
  while (i < rnd) {
    if (rnd % i === 0) {
      return [rnd, 'no'];
    }
    i += 1;
  }
  return [rnd, 'yes'];
};

export default () => startTheGame(getTheRightAnswer, message);
