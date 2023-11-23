function getRandomPromise(num) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 5000) + 1000;
        setTimeout(() => {
            resolve(num);
        }, delay);
    });
}

const promisesSet = [
    getRandomPromise(1),
    getRandomPromise(2),
    getRandomPromise(3)
];

Promise.race(promisesSet)
    .then(result => {
        console.log("Первый выполненный промис:", result);
    })
    .catch(error => {
        console.error("Произошла ошибка:", error);
    });
