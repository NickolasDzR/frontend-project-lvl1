import startTheGame from '..';
import randomNumber from './randomNumber';

const randomNumberSmall = () => Math.floor(Math.random() * 3);
const message = 'What is the result of the expression?';

const indication = () => {
  switch (randomNumberSmall()) {
    case 0:
      return 0; // 0 = +
    case 1:
      return 1; // 1 = -
    case 2:
      return 2; // 2 = *
    default:
      return false;
  }
};

const getTheRightAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  switch (indication()) {
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
