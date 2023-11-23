let startDate = new Date('2000-01-01')
let endDate = new Date();
let amountOfFridays = 0
const friday = 5;

function countFridays13() {
    while (startDate < endDate) {
        if (startDate.getDay() === friday && startDate.getDate() === 13) {
            amountOfFridays++
        }
        startDate.setDate(startDate.getDate() + 1 )
    }

    return amountOfFridays;
}

console.log(countFridays13());