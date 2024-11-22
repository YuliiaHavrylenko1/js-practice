// Ось кілька задач для практики з використанням методів масиву під час роботи з arguments для початківців:

// Задача 1 (легка)

// Напишіть функцію sumArguments, яка приймає будь-яку кількість числових аргументів і повертає їх суму. Використайте метод Array.from для перетворення arguments у масив, щоб застосувати метод reduce для підрахунку суми.

function sumArguments() {
    const args = Array.from(arguments);
    return args.reduce((previousValue, number) => previousValue + number, 0);

    
}

console.log(sumArguments(1, 2, 3)); // 6
console.log(sumArguments(5, 10, 15)); // 30
console.log(sumArguments(0, -5, 5, 10)); // 10

console.log("\n");

// Задача 2 (легка)

// Створіть функцію convertToArray, яка приймає будь-яку кількість аргументів і повертає масив із цих аргументів. Використайте Array.from для перетворення arguments у масив.

function convertToArray() {
    const args = Array.from(arguments);
    return args.slice("");
}

console.log(convertToArray(1, "apple", true)); // [1, "apple", true]
console.log(convertToArray("a", "b", "c")); // ["a", "b", "c"]
console.log(convertToArray(5, 10, 15, 20)); // [5, 10, 15, 20]

console.log("\n");
// Задача 3 (середня)

// Напишіть функцію findMaxArgument, яка приймає будь-яку кількість числових аргументів і повертає найбільше значення серед них. Використайте Array.from для перетворення arguments у масив і метод Math.max для знаходження максимального значення.

function findMaxArgument() {
    const args = Array.from(arguments);
  return Math.max(...args);
  
}

console.log(findMaxArgument(1, 5, 3, 7, 2)); // 7
console.log(findMaxArgument(-10, -5, -1)); // -1
console.log(findMaxArgument(10, 20, 30, 15)); // 30

console.log("\n");

// Задача 4 (середня)

// Створіть функцію filterStrings, яка приймає будь-яку кількість аргументів і повертає масив, що містить тільки ті аргументи, які є рядками. Використайте Array.from для перетворення arguments у масив і метод filter для вибірки рядків.

function filterStrings() {
  const args = Array.from(arguments);
  return args.filter(arg => typeof arg === "string");
}

console.log(filterStrings(1, "apple", true, "banana", 3.14)); // ["apple", "banana"]
console.log(filterStrings("a", 10, "b", "c", false)); // ["a", "b", "c"]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію concatenateArguments, яка приймає будь-яку кількість аргументів, перетворює їх у масив, і з’єднує всі елементи в один рядок, розділяючи їх комами. Використайте Array.from і метод join.

function concatenateArguments() {
  const args = Array.from(arguments);
  return args.join(",");
}

console.log(concatenateArguments("apple", "banana", "cherry")); // "apple,banana,cherry"
console.log(concatenateArguments(1, 2, 3, 4, 5)); // "1,2,3,4,5"

console.log("\n");

// Задача 6 (складна)

// Створіть функцію uniqueArguments, яка приймає будь-яку кількість аргументів, перетворює їх у масив і повертає новий масив із унікальними значеннями (без повторень). Використайте Array.from для перетворення arguments у масив і методи filter та indexOf для фільтрації унікальних значень.

function uniqueArguments() {
  const args = Array.from(arguments);
  return args.filter((item, index) => args.indexOf(item) === index);
}

console.log(uniqueArguments(1, 2, 2, 3, 4, 4, 5)); // [1, 2, 3, 4, 5]
console.log(uniqueArguments("apple", "banana", "apple", "cherry")); // ["apple", "banana", "cherry"]

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам практикуватися з використанням arguments, методом Array.from, і різними методами масивів для обробки аргументів у функціях.