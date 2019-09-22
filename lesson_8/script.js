/* Work with concat */

//1 - Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr = arr1.concat(arr2);
// document.write(arr);

/* Work with reverse */

//2 - Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// var arr = [1, 2, 3];
// document.write(arr.reverse());

/* Work with push, unshift */

//3 - Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// var arr = [1, 2, 3];
// arr.push(4, 5, 6);
// document.write(arr);

//4 - Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// var arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// document.write(arr);

/* Work with shift, pop */

//5 - Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// var arr = [1, 2, 3];
// var first = arr.shift();
// document.write(first);

//6 - Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// var arr = [1, 2, 3];
// var last = arr.pop();
// document.write(last);

/* Work with slice */

//7 - Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// var arr = [1, 2, 3, 4, 5];
// var arr1 = arr.slice(0, 3);
// document.write(arr1);

//8 - Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// var arr = [1, 2, 3, 4, 5];
// var arr1 = arr.slice(3);
// document.write(arr1);

/* Work with splice */

//9 - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// document.write(arr);

//10 - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// var arr = [1, 2, 3, 4, 5];
// var arr1 = arr.splice(1, 3);
// document.write(arr1);

//11 - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// var arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, "a", "b", "c");
// document.write(arr);

//12 - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(8, 0, "e");
// document.write(arr);

/* Work with sort */

//13 - Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// var arr = [3, 4, 1, 2, 7];
// document.write(arr.sort());

/* Work with Object.keys */

//14 - Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// var obj = { js: "test", jq: "hello", css: "world" };
// document.write(Object.keys(obj));
