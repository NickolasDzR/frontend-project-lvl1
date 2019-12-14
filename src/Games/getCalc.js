import startTheGame from '..';
import randomNumber from '../getRandomNumber/randomNumber';

const question = 'What is the result of the expression?';

const getTheRightAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const numerals = ['+', '-', '*']
  const getOperator = randomNumber() % numerals.length;
  switch (numerals[getOperator]) {
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


export default () => startTheGame(getTheRightAnswer, question);