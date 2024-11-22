// Ось кілька задач для практики з використанням методу масиву includes для початківців:

// Задача 1 (легка)

// Напишіть функцію hasApple, яка приймає масив fruits і повертає true, якщо масив містить елемент "apple", інакше повертає false. Використайте метод includes.

function hasApple(fruits) {
  return fruits.includes("apple");
  }


console.log(hasApple(["banana", "orange", "apple"])); // true
console.log(hasApple(["banana", "orange"])); // false
console.log(hasApple(["apple"])); // true

console.log('\n');

// Задача 2 (легка)

// Створіть функцію containsNumber, яка приймає масив numbers і число num. Функція повинна повернути true, якщо num знаходиться в масиві numbers, інакше — false. Використайте метод includes.

function containsNumber(numbers, num) {
  return numbers.includes(num);
}

console.log(containsNumber([1, 2, 3, 4, 5], 3)); // true
console.log(containsNumber([10, 20, 30], 25)); // false
console.log(containsNumber([], 1)); // false

console.log('\n');

// Задача 3 (середня)

// Напишіть функцію checkAccess, яка приймає масив userRoles і повертає true, якщо масив містить хоча б один із ролей "admin" або "moderator", інакше — false. Використайте метод includes для перевірки ролей.

function checkAccess(userRoles) {
  return userRoles.includes("admin") || userRoles.includes("moderator") ? true : false;
}

console.log(checkAccess(["user", "moderator"])); // true
console.log(checkAccess(["user", "guest"])); // false
console.log(checkAccess(["admin", "user"])); // true

console.log('\n');

// Задача 4 (середня)

// Створіть функцію filterCommonElements, яка приймає два масиви arr1 і arr2 і повертає новий масив, що містить елементи з arr1, які також присутні в arr2. Використайте метод includes.

function filterCommonElements(arr1, arr2) {
  let commonElements = [];
  for (const element of arr1) {
    if (arr2.includes(element))
      commonElements.push(element);
  }
    return commonElements;
  }


console.log(filterCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(filterCommonElements(["apple", "banana"], ["banana", "orange"])); // ["banana"]

console.log('\n');

// Задача 5 (складна)

// Напишіть функцію uniqueElements, яка приймає масив arr і повертає новий масив, що містить лише унікальні елементи (без повторень) з arr. Використайте метод includes для перевірки, чи вже є елемент у новому масиві.

function uniqueElements(arr) {
  let uniqueArr = [];
  for (const element of arr) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr;
}

console.log(uniqueElements([1, 2, 3, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueElements(["apple", "banana", "apple", "orange"])); // ["apple", "banana", "orange"]

console.log('\n');
console.log('\n');
console.log('\n');

// Ці задачі допоможуть вам освоїти метод includes для перевірки наявності елементів у масиві та виконувати різні операції на основі цієї перевірки.