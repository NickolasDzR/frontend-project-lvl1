import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const questionText = 'What is the result of the expression?';
const numerals = ['+', '-', '*'];

const counter = (firstNumber, secondNumber, numOfOperator) => {
  switch (numerals[numOfOperator]) {
    case '+':
      return [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
    case '-':
      return [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
    case '*':
      return [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];
    default:
      return false;
  }
};

const getTheRightAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const getOperator = randomNumber() % numerals.length;
  return counter(firstNumber, secondNumber, getOperator);
};


export default () => startTheGame(getTheRightAnswer, questionText);
