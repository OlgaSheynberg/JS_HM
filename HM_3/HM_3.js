/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени */
let num1 = 2;
let num2 = 3;

const dgr = (a) => a ** 3;
console.log(dgr(num1));
console.log(dgr(num2));

/* Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13 % от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" */

let num = Number(prompt('Введите число'));
while (isNaN(num) == true) {
    alert('Значение задано неверно');
    num = prompt('Введите число')
}
const pay = (a) => a * 0.87;
console.log(`Размер заработной платы за вычетом налогов равен значение ${pay(num)}`);


/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */
let number1 = Number(prompt('Введите число'));
let number2 = Number(prompt('Введите число'));
let number3 = Number(prompt('Введите число'));

function maxNumber(a, b, c) {
    let max = a;
    if (max <= b) {
        max = b;
    }
    if (max <= c) {
        max = c;
    }
    return max;
}
console.log(`Максимальное число ${maxNumber(number1, number2, number3)}`);


/* Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций(каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
должно вывести число 8 в консоль(sum - функция сложения в данном примере, ваши названия функций могут отличаться).Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */
let numb1 = Number(prompt('Введите число'));
while (isNaN(numb1) == true) {
    alert('Значение задано неверно');
    numb1 = prompt('Введите число')
}
let numb2 = Number(prompt('Введите число'));
while (isNaN(numb2) == true) {
    alert('Значение задано неверно');
    numb2 = prompt('Введите число')
}

const sum = (a, b) => a + b;

function diff(a, b) {
    if (a >= b) {
        return a - b;
    } else {
        return b - a;
    }
}
const mltp = (a, b) => a * b;

function split(a, b) {
    if (b !== 0) {
        return console.log(`Частное равно ${a/b}`);;
    } else {
        console.log('Второе число равно 0, на ноль делить нельзя');
    }
}
console.log(`Сумма равна ${sum(numb1,numb2)}`);
console.log(`Разность равна ${diff(numb1,numb2)}`);
console.log(`Произведение равно ${mltp(numb1,numb2)}`);
split(numb1, numb2);