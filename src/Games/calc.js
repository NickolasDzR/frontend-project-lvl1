import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'What is the result of the expression?';
const arithmeticSigns = ['+', '-', '*'];

const generateSolution = (firstNumber, secondNumber, indexOperator) => {
  switch (arithmeticSigns[indexOperator]) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return false;
  }
};

const generateGameData = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const indexOperator = randomNumber(0, arithmeticSigns.length - 1)
  const question = `${firstNumber} ${arithmeticSigns[indexOperator]} ${secondNumber}`;
  const answer = generateSolution(firstNumber, secondNumber, indexOperator);
  return [question, answer];
};


export default () => playGame(generateGameData, gameDescription);