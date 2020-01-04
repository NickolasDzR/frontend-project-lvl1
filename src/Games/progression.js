import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'What number is missing in the progression?';
const arrayProgressionLenght = 10;

const hideNumberFrom = 1;
const hideNumberTo = 10;

const makeProgression = (fPositionArray, increaseNum, hiddenNum) => {
  const arrayProgression = [];
  for (let i = 0; i < arrayProgressionLenght; i += 1) {
    arrayProgression.push(Math.abs(`${fPositionArray + (increaseNum * i)} `));
  }
  arrayProgression.splice(hiddenNum, 1, '..');
  return arrayProgression.join(' ');
};

const generateGameData = () => {
  const firstPositionArray = randomNumber(1, 100);
  const increaseNum = randomNumber(1, 20);
  const indexHiddenNum = randomNumber(hideNumberFrom, hideNumberTo);
  const question = makeProgression(firstPositionArray, increaseNum, indexHiddenNum);
  const answer = `${firstPositionArray + (increaseNum * indexHiddenNum)}`;
  return [question, answer];
};

export default () => playGame(generateGameData, gameDescription);
