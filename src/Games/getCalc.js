import startTheGame from '..';
import randomNumber from './randomNumber';

const message = 'What is the result of the expression?';

const getTheRightAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const randomNumberSmall = Math.floor(Math.random() * 3);
  switch (randomNumberSmall) {
    case 0:
      return [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
    case 1:
      return [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
    case 2:
      return [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];
    default:
      return false;
  }
};


export default () => startTheGame(getTheRightAnswer, message);
