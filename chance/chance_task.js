const Chance = require('chance');
const chance = new Chance();

const randomAge = chance.age();
console.log(randomAge);

console.log("Using if statement:");
if (randomAge < 13) {
    console.log("Child");
} else if (randomAge < 20) {
    console.log("Teen");
} else if (randomAge < 65) {
    console.log("Adult");
} else {
    console.log("Senior");
}

console.log("Using switch statement:");
switch (true) {
    case randomAge < 13:
        console.log("Child");
        break;
    case randomAge < 20:
        console.log("Teen");
        break;
    case randomAge < 65:
        console.log("Adult");
        break;
    default:
        console.log("Senior");
}

console.log("Using ternary operator:");
const personType =
    randomAge < 13 ? "Child" :
        randomAge < 20 ? "Teen" :
            randomAge < 65 ? "Adult" :
                "Senior";

console.log(personType);
