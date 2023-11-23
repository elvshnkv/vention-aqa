let arr  = [7, 1, 3, 55, 7, 7 , 5, 7, 34, 7, 9.45, 22];
let arr2  = ['Настя','Ира','Катя','Саша','Катя','Настя'];
let i;

console.log('Начальный массив чисел ' + arr)
console.log('Начальный массив строк ' + arr2)

//найти максимальное значение числа в массиве
function findMaxElement (arr) {
    arr.sort(function (a, b) {
        return b - a;
    });
    console.log('Максимальное значение ' + arr[0]);
}
findMaxElement(arr);

//сортировка массива по возрастанию
function sortASC (arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log('Массив отсортирован по возрастанию ' + arr);
}
sortASC(arr);

//сортировка массива по убыванию
function sortDESC (arr) {
    arr.sort(function (a, b) {
        return b - a;
    });
    console.log('Массив отсортирован по убыванию ' + arr);
}
sortDESC(arr);

//поменять массив в обратном порядке
function reverseArr(arr){
    let reversedArr = arr.reverse();
    console.log('Массив в обратном порядке ' + reversedArr)
}
reverseArr(arr);


/*даны 2 4-х значных числа с неповторяющимися цифрами,
надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )*/
function checkPositionAndValueMatch(number1, number2){
    let positionMatch = 0;
    let valueMatch = 0;
    number1 = number1.toString();
    number2 = number2.toString();

    for (i=0; i < number1.length; i++){
        if(number1[i] === number2[i]){
            positionMatch++;
        }
    }
    console.log('По позиции совпадают '+ positionMatch);

    for (i=0; i < number1.length; i++){
        if(number2.includes(number1[i]) === true){
            valueMatch++;
        }
    }
    console.log('По значению совпадают ' + valueMatch);
}
checkPositionAndValueMatch(3487,3794);

//удалить из массива все повторяющиеся элементы

function removeDuplicates(arr){
    let arr2 = [];
    for (i=0; i < arr.length; i++){
        if(arr2.includes(arr[i]) === false){
            arr2.push(arr[i]);
        }
    }
    console.log('Повторяющиеся значения удалены: ' + arr2);
}
removeDuplicates(arr);
removeDuplicates(arr2);


//записать в массив ряд фибоначчи начиная с N члена с длинной массива M
function fibonacciNM(n, m) {
    const fibonacciStart = [0, 1];
    function generateFibonacci() {
        const nextFibonacci = fibonacciStart[fibonacciStart.length - 1] + fibonacciStart[fibonacciStart.length - 2];
        fibonacciStart.push(nextFibonacci);

        if (fibonacciStart.length < n + m) {
            generateFibonacci();
        }
    }

    if (n > 1) {
        generateFibonacci();
    }

    return fibonacciStart.slice(n - 1, n - 1 + m);
}

console.log(fibonacciNM(5, 5));