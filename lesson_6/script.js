/* Work with % */

//1 - Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

// var a = 10,
//   b = 3;
// document.write(a % b);

//2 - Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// var a = 124,
//   b = 3;
// if (a % b === 0) document.write("Делится");
// else document.write("Делится с остатком");

/* Degree and root work */

//3 - Возведите 2 в 10 степень. Результат запишите в переменную st.

// var st = Math.pow(2, 10);
// document.write(st);

//4 - Найдите квадратный корень из 245.

// document.write(Math.sqrt(245));

//5 - Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// var arr = [4, 2, 5, 19, 13, 0, 10];
// var result = 0;
// for (var i = 0; i < arr.length; i++) {
//   result += Math.pow(arr[i], 3);
// }
// document.write(Math.sqrt(result));

/* Work with rounding functions */

//6 - Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// document.write("До целых: " + Math.round(Math.sqrt(379)) + "<br>");
// document.write("До десятых: " + Math.sqrt(379).toFixed(2) + "<br>");
// document.write("До сотых: " + Math.sqrt(379).toFixed(3) + "<br>");

//7 - Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// var obj = { floor: null, ceil: null };
// obj.floor = Math.floor(Math.sqrt(587));
// obj.ceil = Math.ceil(Math.sqrt(587));
// document.write(obj.floor + "<br>" + obj.ceil);

/* Finding the maximum and minimum number */

//8 - Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// var arr = [4, -2, 5, 19, -130, 0, 10];
// document.write(Math.max.apply(null, arr) + "<br>" + Math.min.apply(null, arr));

/* Work with random */

//9 - Выведите на экран случайное целое число от 1 до 100.

// function getRandomInt(min, max) {
//   return Math.floor(min + Math.random() * (max - min + 1));
// }
// document.write(getRandomInt(1, 100));

//10 - Заполните массив 10-ю случайными целыми числами.

// var arr = [];
// function getRandomInt() {
//   return Math.floor(1 + Math.random() * (100 - 1 + 1));
// }
// for (var i = 0; i < 10; i++) {
//   arr[i] = getRandomInt();
// }
// document.write(arr);

/* Work with the module */

//11 - Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

// var a = 10,
//   b = 14;
// document.write(Math.abs(a - b));

//12 - Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

// var a = 6,
//   b = 1;
// var c = Math.abs(a - b);
// document.write(c);

/* Tasks */

//13 - Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

// var arr = [12, 15, 20, 25, 59, 79];
// var average = 0;
// for (var i = 0; i < arr.length; i++) {
//   average += arr[i];
// }
// document.write(average / arr.length);

//14 - Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

// function getFactorial(num) {
//   return num != 1 ? num * getFactorial(num - 1) : 1;
// }
// document.write(getFactorial(5));
