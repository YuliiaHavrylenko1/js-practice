// Ось кілька задач для практики з використанням методів масиву (join, split, slice, concat, indexOf, push) для початківців:

// Задача 1 (легка, push)

// Напишіть функцію addToCart, яка приймає масив cart і новий товар item. Функція повинна додати товар у кінець масиву cart та повернути оновлений масив. Використайте метод push.

function addToCart(cart, item) {
    cart.push(item);
    return cart;
}

console.log(addToCart(["apple", "banana"], "orange")); // ["apple", "banana", "orange"]
console.log(addToCart([], "milk")); // ["milk"]

console.log('\n');

// Задача 2 (легка, join)

// Створіть функцію createSentence, яка приймає масив слів words і повертає рядок, що є з’єднанням цих слів з пробілами між ними. Використайте метод join.

function createSentence(words) {
    return words.join(" ");
}

console.log(createSentence(["Hello", "world"])); // "Hello world"
console.log(createSentence(["JavaScript", "is", "fun"])); // "JavaScript is fun"

console.log('\n');

// Задача 3 (середня, split і join)

// Напишіть функцію reverseWords, яка приймає речення (рядок sentence), розділяє його на слова, перевертає порядок слів і повертає нове речення. Використайте методи split і join.

function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");  
}

console.log(reverseWords("Hello world")); // "world Hello"
console.log(reverseWords("JavaScript is fun")); // "fun is JavaScript"

console.log('\n');

// Задача 4 (середня, slice)

// Створіть функцію getTopThree, яка приймає масив arr і повертає новий масив, що містить перші три елементи з arr. Використайте метод slice.

function getTopThree(arr) {
    return arr.slice(0, 3);
}

console.log(getTopThree([10, 20, 30, 40, 50])); // [10, 20, 30]
console.log(getTopThree([5, 6, 7])); // [5, 6, 7]
console.log(getTopThree([1])); // [1]

console.log('\n');

// Задача 5 (складна, concat)

// Напишіть функцію mergeArrays, яка приймає два масиви arr1 і arr2, об’єднує їх і повертає новий масив. Використайте метод concat.

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeArrays(["a", "b"], ["c", "d", "e"])); // ["a", "b", "c", "d", "e"]

console.log('\n');

// Задача 6 (складна, indexOf і slice)

// Створіть функцію removeItem, яка приймає масив arr і значення item. Функція повинна знайти індекс item у масиві і повернути новий масив без цього елемента. Якщо елемент не знайдено, поверніть вихідний масив. Використайте методи indexOf і slice.

function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index === -1) {
        return arr;
    }
    return arr.slice(0, index).concat(arr.slice(index +1));
    
}

console.log(removeItem([1, 2, 3, 4], 3)); // [1, 2, 4]
console.log(removeItem(["apple", "banana", "orange"], "banana")); // ["apple", "orange"]
console.log(removeItem([5, 6, 7], 10)); // [5, 6, 7] (елемент не знайдено)

console.log('\n');
console.log('\n');
console.log('\n');

// Ці задачі допоможуть вам практикуватися з основними методами масивів у JavaScript і освоїти їхнє застосування в різних сценаріях.