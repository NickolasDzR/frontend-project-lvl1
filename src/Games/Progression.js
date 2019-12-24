import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';


const hideNumberFrom = 1;
const hideNumberTo = 10;
const randomNumberSmall = () => Math.ceil(Math.random(hideNumberFrom) * hideNumberTo);

const question = 'What number is missing in the progression?';
const aProgressionLenght = 8;

const getTheRightAnswer = () => {
  const firstNumberOfArray = randomNumber();
  const increaseNumber = randomNumberSmall();
  const hiddenNumber = randomNumberSmall();
  const arrayOfNumber = [];

  for (let i = 0; i < aProgressionLenght; i += 1) {
    if (i === 0) {
      arrayOfNumber.push(firstNumberOfArray);
    }
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

export default () => startTheGame(getTheRightAnswer, question);