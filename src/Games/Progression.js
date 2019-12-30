import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';


const hideNumberFrom = 1;
const hideNumberTo = 10;
const randomNumberSmall = () => Math.ceil(Math.random(hideNumberFrom) * hideNumberTo);

const gameDescription = 'What number is missing in the progression?';
const aProgressionLenght = 9;

const getTheRightAnswer = () => {
  const fPositionArray = randomNumber(1, 100);
  const increaseNumber = randomNumberSmall(1, 100);
  const hiddenNumber = randomNumberSmall(1, 100);
  const arrayNumber = [];

  for (let i = 0; i < aProgressionLenght; i += 1) {
    if (i === 0) {
      arrayNumber.push(fPositionArray);
    }
    arrayNumber.push(arrayNumber[arrayNumber.length - 1] + increaseNumber);
  }
  const takeHiddenNum = () => {
    if (hiddenNumber === 1) {
      return arrayNumber[hiddenNumber + 1] - (increaseNumber + increaseNumber);
    }
    return arrayNumber[hiddenNumber - 2] + increaseNumber;
  };
  arrayNumber.splice(hiddenNumber - 1, 1, '..');
  return [arrayNumber.join(' '), takeHiddenNum()];
};

export default () => playGame(getTheRightAnswer, gameDescription);
