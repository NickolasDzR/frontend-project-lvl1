import startTheGame from '..';
import randomNumber from "../codeGames/randomNumber";

const getTheRightAnswer = () => {
    const number = randomNumber();
    if (number % 2 === 0) {
        return [number, 'yes'];
    }
    return [number, 'no'];
}
export default () => startTheGame(getTheRightAnswer);