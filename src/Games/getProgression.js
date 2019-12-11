import startTheGame from '..';
import randomNumber from './randomNumber';

const randomNumberSmall = () => Math.ceil(Math.random(1) * 10);
const message = 'What number is missing in the progression?';

const getTheRightAnswer = () => {
  const firstNumberOfArray = randomNumber();
  const increaseNumber = randomNumberSmall();
  const hiddenNumber = randomNumberSmall();
  const arrayOfNumber = [firstNumberOfArray];

  for (let i = 1; i <= 9; i += 1) {
    arrayOfNumber.push(arrayOfNumber[arrayOfNumber.length - 1] + increaseNumber);
  }
  const takeHiddenNum = () => {
    if (hiddenNumber === 1) {
      return arrayOfNumber[hiddenNumber + 1] - (increaseNumber + increaseNumber);
    }
    return arrayOfNumber[hiddenNumber - 2] + increaseNumber;
  };
  arrayOfNumber.splice(hiddenNumber - 1, 1, '..');
  return [arrayOfNumber.join(' '), takeHiddenNum()];
};

export default () => startTheGame(getTheRightAnswer, message);
