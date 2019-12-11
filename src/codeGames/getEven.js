import startTheGame from '..';
import randomNumber from './randomNumber';


const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTheRightAnswer = () => {
  const number = randomNumber();
  if (number % 2 === 0) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};
export default () => startTheGame(getTheRightAnswer, message);
