/* Tasks */

//1 - Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// function ucfirst(str) {
//   var arr = str.split(" ");
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//   }
//   return arr.join(" ");
// }
// var str = "привет как дела";
// document.write(ucfirst(str));

//2 - Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// function line(str) {
//   var arr = str.split("_");
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//   }
//   return arr.join("");
// }
// var str = "var_text_hello";
// document.write(line(str));

//3 - Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

// function inArray(str, arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == str) {
//       return true;
//     }
//   }
//   return false;
// }
// var arr = ["вторник", "сейчас", "привет", "как", "дела"];
// document.write(inArray("сейчас", arr));

//4 - Дана строка, например, '123456'. Сделайте из нее '214365'.

// function line(str) {
//   var arr = str.split("");
//   for (var i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//       var x = arr[i - 1];
//       arr[i - 1] = arr[i];
//       arr[i] = x;
//     }
//   }
//   return arr.join("");
// }
// var str = "123456";
// document.write(line(str));
