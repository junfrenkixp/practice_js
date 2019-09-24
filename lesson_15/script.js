/* Tasks */

//1 - Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(num) {
//   return num >= 0 && num < 10;
// }
// document.write(isNumberInRange(0));

//2 - Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// var arr = [1, 2, 3, -1, -2, -3, 11, 10, 9];
// function isNumberInRange(num) {
//   return num >= 0 && num < 10;
// }
// var newArr = [];
// for (var i = 0; i <= arr.length; i++) {
//   if (isNumberInRange(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// document.write(newArr);

//3 - Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// function getDigitsSum(digit) {
//   var sum = null;
//   var arr = digit.toString().split("");
//   for (var i = 0; i < arr.length; i++) {
//     var trs = +arr[i];
//     sum += trs;
//   }
//   return sum;
// }
// document.write(getDigitsSum(12345));

//4 - Найдите все года от 1 до 2019, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// function getDigitsSum(digit) {
//   var sum = null;
//   var arr = digit.toString().split("");
//   for (var i = 0; i < arr.length; i++) {
//     var trs = +arr[i];
//     sum += trs;
//   }
//   return sum;
// }
// var arr = [];
// for (var i = 1; i <= 2019; i++) {
//   if (getDigitsSum(i) === 13) arr.push(i);
// }
// console.log(arr);

//5 - Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(even) {
//   return even % 2 == 0;
// }
// document.write(isEven(6));

//6 - Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// var arr = [1, 2, 3, -1, -2];
// function isEven(even) {
//   return even % 2 == 0;
// }
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//   if (isEven(arr[i])) newArr.push(arr[i]);
// }
// document.write(newArr);

//7 - Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// function getDivisors(num) {
//   var arr = [];
//   for (var i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// document.write(getDivisors(30));
