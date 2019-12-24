import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';


const question = 'Answer "yes" if the number is even, otherwise answer "no".';


const isEven = number => number % 2 === 0;

const getTheRightAnswer = () => {
  const number = randomNumber();
  const answer = isEven(number) ? [number, 'yes'] : [number, 'no'];
  return answer;
};
export default () => startTheGame(getTheRightAnswer, question);