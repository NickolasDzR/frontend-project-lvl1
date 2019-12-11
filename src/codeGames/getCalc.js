import startTheGame from '..';
import randomNumber from './randomNumber';

const randomNumberSmall = () => Math.floor(Math.random() * 3);
const message = 'What is the result of the expression?';

const indication = () => {
  switch (randomNumberSmall()) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
  }
};

const getTheRightAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();

  switch (indication()) {
    case '+':
      return [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
    case '-':
      return [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
    case '*':
      return [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];
  }
};


export default () => startTheGame(getTheRightAnswer, message);
