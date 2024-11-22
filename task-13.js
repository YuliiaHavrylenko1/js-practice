// Ось кілька задач для практики з використанням методу Array.from() для початківців:

// Задача 1 (легка)

// Напишіть функцію createArrayFromString, яка приймає рядок str і повертає масив символів цього рядка. Використайте метод Array.from().

function createArrayFromString(str) {
    return Array.from(str);
}

console.log(createArrayFromString("hello")); // ["h", "e", "l", "l", "o"]
console.log(createArrayFromString("JavaScript")); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію createArrayFromNumber, яка приймає число n і повертає масив чисел від 1 до n включно. Використайте Array.from().

function createArrayFromNumber(n) {
    return Array.from({ length: Number(n) }, (_, i) => i + 1);
    
}

console.log(createArrayFromNumber(5)); // [1, 2, 3, 4, 5]
console.log(createArrayFromNumber(3)); // [1, 2, 3]
 
console.log("\n");

// Задача 3 (середня)

// Створіть функцію createSquaresArray, яка приймає число n і повертає масив квадратів чисел від 1 до n. Використайте Array.from() і функцію-генератор.

function createSquaresArray(n) {
    return Array.from({ length: n }, (_, i) => (i + 1) ** 2);
}

console.log(createSquaresArray(5)); // [1, 4, 9, 16, 25]
console.log(createSquaresArray(3)); // [1, 4, 9]

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію createArrayFromRange, яка приймає два числа start і end і повертає масив чисел від start до end включно. Використайте Array.from().

function createArrayFromRange(start, end) {
    return Array.from({ length: end - start + 1}, (_, i) => start + i);
}

console.log(createArrayFromRange(3, 7)); // [3, 4, 5, 6, 7]
console.log(createArrayFromRange(1, 5)); // [1, 2, 3, 4, 5]

console.log("\n");

// Задача 5 (складна)

// Створіть функцію duplicateElements, яка приймає масив arr і повертає новий масив, де кожен елемент з arr повторюється двічі. Використайте Array.from() для побудови нового масиву.

function duplicateElements(arr) {
    return Array.from({ length: arr.length * 2 }, (_, i) => arr[Math.floor(i / 2)]);
}

console.log(duplicateElements([1, 2, 3])); // [1, 1, 2, 2, 3, 3]
console.log(duplicateElements(["a", "b", "c"])); // ["a", "a", "b", "b", "c", "c"]

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію initializeMatrix, яка приймає два параметри: rows і cols, що визначають кількість рядків і стовпців матриці, і повертає двовимірний масив, заповнений нулями. Використайте Array.from() для створення матриці.

// function initializeMatrix(rows, cols) {
//     // return Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
// }

function initializeMatrix(rows, cols) {
    return Array.from({ length: rows }, (_, rowIndex) => {
        const row = Array.from({ length: cols }, (_, colIndex) => 0);
        console.log(`Row ${rowIndex}:`, row); // Проміжний результат
        return row;
    });
}

console.log(initializeMatrix(2, 3));

console.log(initializeMatrix(2, 3)); 
// [
//   [0, 0, 0],
//   [0, 0, 0]
// ]

console.log(initializeMatrix(3, 2)); 
// [
//   [0, 0],
//   [0, 0],
//   [0, 0]
// ]

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти метод Array.from() і його застосування для створення різних масивів на основі даних або функцій-генераторів.