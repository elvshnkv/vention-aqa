function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
function getNum(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const randomNum = getRandomNumber();
            resolve(randomNum);
        }, 3000);
    });
}
async function squareRandomNum() {
    const randomNum = await getNum();
    const squaredNum = randomNum ** 2;
    console.log(`Случайное число: ${randomNum}, его квадрат: ${squaredNum}`);
}

squareRandomNum();