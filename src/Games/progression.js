import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'What number is missing in the progression?';
const progressionLenght = 10;

const getQuestion = (firstNumber, increaseNum, hiddenNumIndex) => {
  const progression = [];
  for (let i = 0; i < progressionLenght; i += 1) {
    progression.push(firstNumber + (increaseNum * i));
  }
  progression.splice(hiddenNumIndex, 1, '..');
  return progression.join(' ');
};

const generateGameData = () => {
  const firstNumber = randomNumber(1, 100);
  const increaseNum = randomNumber(1, 20);
  const hiddenNumIndex = randomNumber(1, progressionLenght - 1);
  const question = getQuestion(firstNumber, increaseNum, hiddenNumIndex);
  const answer = firstNumber + (increaseNum * hiddenNumIndex);
  return [question, answer.toString()];
};

export default () => playGame(generateGameData, gameDescription);
