// Задание 1
function countArrayElements(arr) {
    let even = 0; // Счетчик четных чисел
    let odd = 0; // Счетчик нечетных чисел
    let zero = 0; // Счетчик нулей

    for (let i = 0; i < arr.length; i++) {
        // Проверяем, что элемент массива является числом и не NaN
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1; // Если 0, увеличиваем счетчик нулей
            } else if (arr[i] % 2 === 0) {
                even += 1; // Если четное число, увеличиваем счетчик четных
            } else {
                odd += 1; // Если нечетное число, увеличиваем счетчик нечетных
            }
        }
    }

    console.log('Четных элементов:', even);
    console.log('Нечетных элементов:', odd);
    console.log('Нулей:', zero);
}

// Пример вызова функции
const arr = [0, null, NaN, 0, 1, 2, 4, "str"];
countArrayElements(arr);

// Задание 2
function isPrimeNumber(num){
    // Проверяем что число входит в диапазон
    if (num > 1000){
        return 'Данные не верны';
    }

    // Числа 0 и 1 не являются простыми
    if (num <= 1){
        return 'Число не является простым';
    }

    // Проверяем, является ли число простым
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return 'Число не является простым';
        }
    }

    return 'Число является простым';
}

console.log(isPrimeNumber(0));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(18));
console.log(isPrimeNumber(1001));


// Задание 3
function createAdder(firstNumber){
    return function(secondNumber){
        return firstNumber + secondNumber;
    };
}

const add4 = createAdder(4);
console.log(add4(6));

// Задание 4
function printNumber(start, end) {
    let current = start;
    const intervalId = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId);
        }
        current ++;
    }, 1000);
}
printNumber(5, 15);

// Задание 5
const test = (x, n) => {
    if (n < 1) {
        return 'Степень должна быть натуральным числом';
    }
    return x ** n;
};
console.log(test(6, 2));