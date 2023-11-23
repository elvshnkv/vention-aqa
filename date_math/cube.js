import _ from "lodash";

function throwCube(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simulateThrows(playerName, numberOfThrows) {
    const throws = [];
    for (let i = 0; i < numberOfThrows; i++) {
        throws.push(throwCube(1, 6));
        console.log(`With throw ${i + 1}, ${playerName} gets - ${throws[i]}`);
    }
    return throws;
}

const BillTrows = simulateThrows("Bill", 3);
const AndrewTrows = simulateThrows("Andrew", 3);

const billSumOfThrows = _.sum(BillTrows);
console.log('The sum of Bill\'s throws is ' + billSumOfThrows);

const andrewSumOfThrows = _.sum(AndrewTrows);
console.log('The sum of Andrew\'s throws is ' + andrewSumOfThrows);

function calculateTheWinnerAmount(andrewAmount, billAmount) {
    if (andrewAmount === billAmount) {
        console.log("We have a draw!");
    } else if (andrewAmount > billAmount) {
        console.log('Andrew is the winner!');
    } else if (billAmount > andrewAmount) {
        console.log('Bill is the winner!');
    }
}

calculateTheWinnerAmount(andrewSumOfThrows, billSumOfThrows);
