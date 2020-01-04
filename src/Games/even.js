import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(generateGameData, gameDescription);
