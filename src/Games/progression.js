import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'What number is missing in the progression?';
const progressionLenght = 10;

const makeProgression = (fPositionArray, increaseNum, hiddenNum) => {
  const progression = [];
  for (let i = 0; i < progressionLenght; i += 1) {
    progression.push(Math.abs(`${fPositionArray + (increaseNum * i)} `));
  }
  progression.splice(hiddenNum, 1, '..');
  return progression.join(' ');
};

const generateGameData = () => {
  const firstPositionArray = randomNumber(1, 100);
  const increaseNum = randomNumber(1, 20);
  const hiddenNumIndex = randomNumber(1, 9);
  const question = makeProgression(firstPositionArray, increaseNum, hiddenNumIndex);
  const answer = firstPositionArray + (increaseNum * hiddenNumIndex);
  return [question, answer.toString()];
};

export default () => playGame(generateGameData, gameDescription);
