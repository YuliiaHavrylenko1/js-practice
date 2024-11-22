// Ось кілька задач для практики з використанням циклу for...of для масивів для початківців:

// Задача 1 (легка)

// Напишіть функцію printElements, яка приймає масив arr і виводить кожен елемент цього масиву в консолі. Використайте цикл for...of.

function printElements(arr) {
    for (const element of arr) {
        console.log(element);
  }
}

printElements([1, 2, 3, 4, 5]);
 Вивід:
 1
 2
 3
 4
5
 
console.log("\n");

// Задача 2 (легка)

// Створіть функцію printStrings, яка приймає масив рядків arr і виводить тільки ті елементи масиву, довжина яких більша за 3 символи. Використайте цикл for...of.

function printStrings(arr) {
    for (element of arr) {
        if (element.length > 3) {
            console.log(element);
        }
    }
}

printStrings(["hi", "hello", "yes", "no", "goodbye"]);
//  Вивід:
//  hello
//  goodbye

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію doubleNumbers, яка приймає масив чисел arr і повертає новий масив, де кожне число з arr подвоєне. Використайте цикл for...of.

 function doubleNumbers(arr) {
   let doubledArr = [];
     for (const element of arr) {
             doubledArr.push(element * 2);

   }
   return doubledArr;
 }

 console.log(doubleNumbers([1, 2, 3, 4])); // [2, 4, 6, 8]
 console.log(doubleNumbers([5, 10, 15])); // [10, 20, 30]

console.log("\n");

// Задача 4 (середня)

// Створіть функцію filterEvenNumbers, яка приймає масив чисел arr і повертає новий масив, що містить тільки парні числа з arr. Використайте цикл for...of.

function filterEvenNumbers(arr) {
  let evenNumbers = [];
    for (const element of arr) {
        if (element % 2 === 0) {
            evenNumbers.push(element);
        }
  }
  return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([10, 15, 20, 25])); // [10, 20]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію sumOfPositiveNumbers, яка приймає масив чисел arr і повертає суму тільки позитивних чисел з arr. Використайте цикл for...of.

function sumOfPositiveNumbers(arr) {
  let sum = 0;
    for (const element of arr) {
        if (element > 0) {
            sum += element;
        }
  }
  return sum;
}

console.log(sumOfPositiveNumbers([1, -2, 3, -4, 5])); // 9 (1 + 3 + 5)
console.log(sumOfPositiveNumbers([-10, 20, -30, 40])); // 60 (20 + 40)

console.log("\n");

// Задача 6 (складна)

// Створіть функцію capitalizeStrings, яка приймає масив рядків arr і повертає новий масив, де кожен рядок починається з великої літери. Використайте цикл for...of.

function capitalizeStrings(arr) {
  let capitalizedArr = [];
    for (const element of arr) {
        if (element.length > 0) {
            capitalizedArr.push(element[0].toUpperCase() + element.slice(1));
      }
  }
  return capitalizedArr;
}

console.log(capitalizeStrings(["hello", "world", "javascript"])); // ["Hello", "World", "Javascript"]
console.log(capitalizeStrings(["apple", "banana", "cherry"])); // ["Apple", "Banana", "Cherry"]

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти цикл for...of для перебору масивів і використання його для різних операцій з елементами масиву.