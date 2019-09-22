/* Working out standard JavaScript functions */

//1 - Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

// var str = "я учу javascript!";
////1
// var arr = str.split();
// arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].substring(1);
// document.write(arr.join(" "));
////2
// str = str[0].toUpperCase() + str.substr(1);
// document.write(str);

//2 - Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.

// var str = "123456";
// document.write(
//   str
//     .split("")
//     .reverse()
//     .join("")
// );

//3 - Проверьте, что строка начинается на http://.

// var str = "http://123123asd";
// var httpStr = "http://";
// var http = str.substr(0, 7);
// if (httpStr == http) document.write("Верно!");
// else document.write("Не верно!");

//4 - Проверьте, что строка заканчивается на .html.

// var str = "http://123123asd.html";
// if (str.substr(-5) == ".html") document.write("Верно!");
// else document.write("Не верно!");
