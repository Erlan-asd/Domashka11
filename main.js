// Задание 1 (используйте замыкание)
// Напишите функцию makeCounter, которая создает счетчик, который увеличивается на единицу при каждом вызове.


// function makeCounter() {
//     let count = 0
//     return function () {

//         return console.log(count++);
//     }
// }

// let counter = makeCounter()

// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()



// Задание 2
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b. Да, именно таким образом, используя двойные круглые скобки (не опечатка).sum(1)(2) = 3
// sum(5)(-1) = 4

// function sum(a) {
//     return function (b) {

//         return console.log(a+b);
//     }
// }

// // 1)________
// let result = sum(2)
// result(6)
// // 2)________
// let result2 = sum(2)(3)


// Задание 3
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050



// function sumTo(num) {
//     if (num === 1) {
//         return 1
//     }

//     return num + sumTo(num - 1);

// }

// let result = sumTo(100);


// console.log(result);
