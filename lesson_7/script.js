/* Character case handling */

//1 - Дана строка 'js'. Сделайте из нее строку 'JS'.

// var str = "js";
// document.write(str.toUpperCase());

//2 - Дана строка 'JS'. Сделайте из нее строку 'js'.

// var str = "JS";
// document.write(str.toLowerCase());

/* Work with length, substr, substring, slice. Work with indexOf */

//3 - Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

// var str = "я учу javascript!";
// document.write(str.length);

//4 - Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

// var str = "я учу javascript!";
// document.write(str.substr(2, 1) + str.substr(3, 13) + "<br>");
// document.write(str.substring(2, 16) + "<br>");
// document.write(str.slice(2, 16));

//5 - Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// var str = "я учу javascript!";
// document.write(str.indexOf("учу"));

//6 - Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

// var str = "я учу javascript!";
// var n = 16;
// var result;
// if (str.length > n) result = str.slice(0, n) + "...";
// else result = str;
// document.write(result);

/* Work with replace */

//7 - Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

// var str = "Я-учу-javascript!";
// document.write(str.replace(/-/g, "!"));

/* Work with split */

//8 - Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// var str = "я учу javascript!";
// var arr = str.split(" ");
// document.write(arr);

//9 - Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// var str = "я учу javascript!";
// var arr = str.split("");
// document.write(arr);

//10 - В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

// var date = "2025-12-31";
// var arr = date.split("-").reverse();
// document.write(arr.join("."));

/* Work with join */

//11 - Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

// var arr = ["я", "учу", "javascript", "!"];
// document.write(arr.join("+"));

/* Tasks */

//12 - Преобразуйте первую букву строки в верхний регистр.

// var str = "я учу javascript!";
// var arr = str.split(" ");
// arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].substring(1);
// document.write(arr.join(" "));

//13 - Преобразуйте первую букву каждого слова строки в верхний регистр.

// var str = "я учу javascript!";
// var arr = str.split(" ");
// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
// }
// document.write(arr.join(" "));

//14 - Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

// var str = "var_test_text";
// var arr = str.split("_");
// for (var i = 1; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
// }
// document.write(arr.join(""));
