// Ось кілька задач для практики з використанням методів масиву (lastIndexOf, pop, shift, unshift) для початківців:

// Задача 1 (легка, pop)

// Напишіть функцію removeLastElement, яка приймає масив arr, видаляє останній елемент з масиву і повертає оновлений масив. Використайте метод pop.

function removeLastElement(arr) {
    arr.pop();
    return arr;
}

console.log(removeLastElement([1, 2, 3, 4])); // [1, 2, 3]
console.log(removeLastElement(["apple", "banana", "cherry"])); // ["apple", "banana"]

console.log("\n");

// Задача 2 (легка, shift)

// Створіть функцію removeFirstElement, яка приймає масив arr, видаляє перший елемент з масиву і повертає оновлений масив. Використайте метод shift.

function removeFirstElement(arr) {
    arr.shift();
    return arr;
}

console.log(removeFirstElement([1, 2, 3, 4])); // [2, 3, 4]
console.log(removeFirstElement(["apple", "banana", "cherry"])); // ["banana", "cherry"]

console.log("\n");

// Задача 3 (середня, unshift)

// Напишіть функцію addElementToFront, яка приймає масив arr і елемент item, додає item на початок масиву і повертає оновлений масив. Використайте метод unshift.

function addElementToFront(arr, item) {
    arr.unshift(item);
    return arr;
}

console.log(addElementToFront([2, 3, 4], 1)); // [1, 2, 3, 4]
console.log(addElementToFront(["banana", "cherry"], "apple")); // ["apple", "banana", "cherry"]

console.log("\n");

// Задача 4 (середня, lastIndexOf)

// Створіть функцію findLastIndex, яка приймає масив arr і елемент item, і повертає останній індекс, де зустрічається item у масиві. Якщо елемент не знайдено, поверніть -1. Використайте метод lastIndexOf.

function findLastIndex(arr, item) {
    return arr.lastIndexOf(item);
}

console.log(findLastIndex([1, 2, 3, 2, 1], 2)); // 3
console.log(findLastIndex(["apple", "banana", "apple", "cherry"], "apple")); // 2
console.log(findLastIndex([5, 6, 7], 8)); // -1

console.log("\n");

// Задача 5 (складна, pop і shift)

// Напишіть функцію removeFirstAndLast, яка приймає масив arr, видаляє перший і останній елементи з масиву і повертає новий масив без цих елементів. Використайте методи pop і shift.

function removeFirstAndLast(arr) {
    // arr.pop();
    // arr.shift();
    // return arr;

    arr.pop(arr.shift());
    return arr;
}

console.log(removeFirstAndLast([1, 2, 3, 4])); // [2, 3]
console.log(removeFirstAndLast(["apple", "banana", "cherry"])); // ["banana"]
console.log(removeFirstAndLast([5])); // []

console.log("\n");

// Задача 6 (складна, unshift і pop)

// Створіть функцію moveLastToFront, яка приймає масив arr, видаляє останній елемент і додає його на початок масиву. Поверніть оновлений масив. Використайте методи pop і unshift.

function moveLastToFront(arr) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

console.log(moveLastToFront([1, 2, 3, 4])); // [4, 1, 2, 3]
console.log(moveLastToFront(["apple", "banana", "cherry"])); // ["cherry", "apple", "banana"]
console.log(moveLastToFront([5])); // [5] (масив залишається тим самим, якщо один елемент)

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам практикуватися з основними методами масивів, такими як lastIndexOf, pop, shift, і unshift, а також зрозуміти їхнє використання у різних сценаріях.