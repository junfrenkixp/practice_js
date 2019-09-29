/* Tasks */

//1 - Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

// var arr = [1, 2, 3, 4, 5];
// function last(arr) {
//   document.write(arr.shift() + " ");
//   if (arr.length != 0) {
//     last(arr);
//   }
// }
// last(arr);

//2 - Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// var num = 987;
// function sumOfDigits(num) {
//   var arr = num.toString().split("");
//   var sum = null;
//   for (var i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }
//   if (sum > 9) sumOfDigits(sum);
//   else document.write(sum);
// }
// sumOfDigits(num);
