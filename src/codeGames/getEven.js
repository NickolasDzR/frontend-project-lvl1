import readlineSync from 'readline-sync';


let iter = 0;

const checkTheAnswer = () => {
    if (iter === 3) {
        return console.log('congrations Sam!');
    }
    const number = Math.floor((Math.random(1) + 10) * Math.random(1) * 5);
    const userNumber = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer ${userNumber}`);
    if (number % 2 === 0) {
        return isEven(userNumber);
    }
    return isNotEven(userNumber);
}

const isEven = (userNumber) => {
    if (iter != 3 && userNumber === 'yes') {
        console.log('Correct!');
        iter += 1;
        return checkTheAnswer();
    }
    console.log(`${userNumber}' is wrong answer ;(. Correct answer was 'yes'.`);
    return console.log(`let's try again, Sam!`);
}

const isNotEven = (userNumber) => {
    if (iter != 3 && userNumber === 'no') {
        console.log('Correct!');
        iter += 1;
        return checkTheAnswer();
    }
    console.log(`${userNumber}' is wrong answer ;(. Correct answer was 'no'.`);
    return console.log(`let's try again, Sam!`);
}

export default checkTheAnswer;