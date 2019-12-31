import playGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const gameDescription = 'What is the result of the expression?';
const arithmeticSigns = ['+', '-', '*'];

const generateSolution = (firstNumber, secondNumber, typeOperator) => {
  switch (arithmeticSigns[typeOperator]) {
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

const indexOperatorFrom = 0;
const indexOperatorTo = 2;

const getTheRightAnswer = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const indexOperator = randomNumber(indexOperatorFrom, indexOperatorTo);
  const question = `${firstNumber} ${arithmeticSigns[indexOperator]} ${secondNumber}`;
  const answer = generateSolution(firstNumber, secondNumber, indexOperator);
  return [question, answer];
};


export default () => playGame(getTheRightAnswer, gameDescription);
