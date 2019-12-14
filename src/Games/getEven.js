import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';


const question = 'Answer "yes" if the number is even, otherwise answer "no".';


const checkTheNumberIfEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getTheRightAnswer = () => {
  const number = randomNumber();
  if (checkTheNumberIfEven(number) === true) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};
export default () => startTheGame(getTheRightAnswer, question);
