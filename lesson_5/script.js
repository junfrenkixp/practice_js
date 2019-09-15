/* While and for loops */

//1 - Выведите столбец чисел от 1 до 100.

// var num = 1;
// for (var i = 0; i < 100; i++) {
//   document.write(num++ + "<br>");
// }

//2 - Выведите столбец чисел от 11 до 33.

// var num = 11;
////1
// for (var i = 11; i < 34; i++) {
//   document.write(num++ + "<br>");
// }
////2
// while (num < 34) {
//   document.write(num++ + "<br>");
// }

//3 - Выведите столбец четных чисел в промежутке от 0 до 100.

// var i = 0;
// while (i <= 50) {
//   document.write(i++ + "<br>");
//   i++;
// }

//4 - С помощью цикла найдите сумму чисел от 1 до 100.

// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//   sum += i;
// }
// document.write(sum);

/* Working with for for arrays */

//5 - Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

//6 - Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// var arr = [1, 2, 3, 4, 5];
// var result = 0;
// for (var i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// document.write(result);

/* Work with for-in */

//7 - Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
//var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

// var obj = { green: "зеленый", red: "красный", blue: "голубой" };
// for (var key in obj) {
//   document.write(key + " - " + obj[key] + "<br>");
// }

//8 - Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

// var obj = { Коля: "200", Вася: "300", Петя: "400" };
// for (var key in obj) {
//   document.write(key + " - зарплата " + obj[key] + " долларов" + "<br>");
// }

/* Tasks */

//9 - Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// var arr = [2, 5, 9, 15, 0, 4];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) document.write(arr[i] + "<br>");
// }

//10 - Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// var arr = [2, 5, -9, -15, 0, 4];
// var sum = null;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) sum += arr[i];
// }
// document.write(sum);

//11 - Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     document.write("Есть!");
//     break;
//   }
// }

//12 - Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// var arr = [10, 20, 30, 50, 235, 3000];
// for (var i = 0; i < arr.length; i++) {
//   arr[i] += "";
//   for (var j = 0, length = arr[i].length; j < length; j++) {
//     if (arr[i][0] == 1 || arr[i][0] == 4 || arr[i][0] == 5) document.write(arr[i] + "<br>");
//     break;
//   }
// }

//13 - Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var str = "";
// for (var i = 0; i < arr.length; i++) {
//   str += "-" + arr[i];
// }
// document.write(str + "-");

//14 - Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// var arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === "Суббота" || arr[i] === "Воскресенье") {
//     document.write("<strong>" + arr[i] + "</strong>" + "<br>");
//   } else {
//     document.write(arr[i] + "<br>");
//   }
// }

//15 - Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

// var arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// var day = "Понедельник";
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === day) {
//     document.write("<strong>" + arr[i] + "</strong>" + "<br>");
//   } else {
//     document.write(arr[i] + "<br>");
//   }
// }

//16 - Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// var n = 1000;
// var num = 0;
// for (var i = 0; i < n; i++) {
//   num++;
//   if (n < 50) break;
//   else n /= 2;
// }
// document.write("n = " + n + "<br>" + "num = " + num);