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

const getTheRightAnswer = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const typeOperator = randomNumber(0, 2);
  const question = `${firstNumber} ${arithmeticSigns[typeOperator]} ${secondNumber}`;
  const answer = generateSolution(firstNumber, secondNumber, typeOperator);
  return [question, answer];
};


export default () => playGame(getTheRightAnswer, gameDescription);
