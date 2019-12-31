import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'What number is missing in the progression?';
const aProgressionLenght = 10;

const hideNumberFrom = 1;
const hideNumberTo = 10;

const getProgression = (fPositionArray, increaseNum, hiddenNum) => {
  const arrayProgression = [];
  for (let i = 0; i < aProgressionLenght; i += 1) {
    arrayProgression.push(Math.abs(`${fPositionArray + (increaseNum * i)} `));
  }
  arrayProgression.splice(hiddenNum, 1, '..');
  return arrayProgression.join(' ');
};

const getTheRightAnswer = () => {
  const fPositionArray = randomNumber(1, 100);
  const increaseNum = randomNumber(1, 20);
  const hiddenNum = randomNumber(hideNumberFrom, hideNumberTo);
  const question = getProgression(fPositionArray, increaseNum, hiddenNum);
  const answer = fPositionArray + (increaseNum * hiddenNum);
  return [question, answer];
};

export default () => playGame(getTheRightAnswer, gameDescription);
