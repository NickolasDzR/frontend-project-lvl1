import startTheGame from '..';
import randomNumber from "../codeGames/randomNumber";

const randomNumberSmall = () => Math.ceil(Math.random(1) * 10);
const message = 'What number is missing in the progression?';

const getTheRightAnswer = () => {

    const firstNumberOfArray = randomNumber();
    const increaseNumber = randomNumberSmall();
    const hiddenNumber = randomNumberSmall();
    let arrayOfNumber = [firstNumberOfArray];

    for (let i = 1; i <= 9; i++) {
        arrayOfNumber.push(arrayOfNumber[arrayOfNumber.length - 1] + increaseNumber);
    }
    arrayOfNumber.splice(hiddenNumber, hiddenNumber, '..')
    return [arrayOfNumber.join(' '), increaseNumber]
}

export default () => startTheGame(getTheRightAnswer, message);