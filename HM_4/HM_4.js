/* Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0– это ноль
1– нечетное число
2– четное число
3– нечетное число…
10– четное число */
for (let i = 0; i < 12; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`)
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`)
    } else {
        console.log(`${i} - нечетное число`)
    }
}


/* Задание 2
Дан массив[1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий[1, 2, 3, 6, 7] */
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = arr1.slice(0, 3);
arr2.push(6, 7);
console.log(arr2);

/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */
let sum = 0;
let min = 0;
const array = [];
for (let index = 0; index < 6; index++) {
    array[index] = Math.floor(Math.random() * 10);
    console.log(array[index]);
    sum = sum + array[index];
    min = array[0];
    if (min > array[index]) {
        min = array[index];
    }
}
console.log(`Сумма элементов массива равна ${sum}`);
console.log(`Минимальное число массива равно ${min}`);

for (let index = 0; index < 6; index++) {
    if (array[index] === 3) {
        console.log(`${index+1} элемент массива равен 3`);
    }
}


/* *
Необязательное задание.*
    Необходимо вывести горку в консоль(используя цикл
        for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

    x
xx
xxx
xxxx
xxxxx */
const arrayX = [];
for (let index = 1; index < 21; index++) {
    arrayX[0] = '';
    arrayX[index] = arrayX[index - 1] + 'x';
    console.log(arrayX[index]);
}