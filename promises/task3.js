function getNumFromInterval(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            resolve(randomNum);
        }, 3000);
    });
}

async function sumNum() {
    const promise1 = await getNumFromInterval(1,5);
    const promise2 = await getNumFromInterval(6,10);
    const sum = promise1 + promise2;
    console.log(`Случайное число от 1 до 5: ${promise1}`);
    console.log(`Случайное число от 6 до 10: ${promise2}`);
    console.log(`Сумма полученных чисел: ${sum}`);
}
sumNum();