/* Flag Tasks */

//1 - Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];
// var flag = false;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == 5) {
//     flag = true;
//     break;
//   }
// }
// if (flag == true) document.write("Да");
// else document.write("Нет");

//2 - Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

// var num = 17;
// var flag = false;
// for (var i = 2; i < num; i++) {
//   if (num % i == 0) {
//     flag = true;
//     break;
//   }
// }
// if (flag == true) document.write("true");
// else document.write("false");

//3 - Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];
// var flag = false;
// for (var i = 0; i < arr.length - 1; i++) {
//   if (arr[i] == arr[i + 1]) {
//     flag = true;
//     break;
//   }
// }
// if (flag == true) document.write("Да");
// else document.write("Нет");
