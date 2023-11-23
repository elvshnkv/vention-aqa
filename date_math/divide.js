function divideNumberIntoRandoms(number, amountOfRandoms) {
    let randomNumbers = [];

    for (let i = 0; i < amountOfRandoms - 1; i++) {
        let randomNum = Math.floor(Math.random() * (number - 1)) + 1;
        randomNumbers.push(randomNum);
        number = number - randomNum;
    }
    randomNumbers.push(number);
    return randomNumbers;
}

let result = divideNumberIntoRandoms(15, 3);
console.log(result);

function divideNumberIntoRandomDecimals(number, amountOfRandoms) {
    let randomDecimals = [];

    for (let i = 0; i < amountOfRandoms - 1; i++) {
        let randomDecimal = parseFloat((Math.random() * number).toFixed(2));
        randomDecimals.push(randomDecimal);
        number = parseFloat((number - randomDecimal).toFixed(2));
    }
    randomDecimals.push(number);
    return randomDecimals;
}

let resultDec = divideNumberIntoRandomDecimals(17.03, 3);
console.log(resultDec);
