import startTheGame from '..';
import randomNumber from "../codeGames/randomNumber";


const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTheRightAnswer = () => {
    const number = randomNumber();
    if (number % 2 === 0) {
        return [number, 'yes', message];
    }
    return [number, 'no', message];
}
export default () => startTheGame(getTheRightAnswer, message);