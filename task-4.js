
// Ось кілька задач для практики з використанням циклів while та do...while для початківців:

// Задача 1 (легка, while)

// Напишіть функцію countDown, яка приймає число n і виводить числа від n до 1 в консолі. Використайте цикл while.

function countDown(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }
}

countDown(5); 
// Вивід:
// 5
// 4
// 3
// 2
// 1

console.log('\n');
// Задача 2 (легка, do...while)

// Створіть функцію askForPassword, яка запитує у користувача пароль через prompt, поки він не введе правильний пароль “1234”. Використайте цикл do...while. (Замість prompt для практики можна використовувати let змінну для введення)

function askForPassword() {
  let password;
    do {
        password = prompt("Enter password");
    } while (password !== "1234");
    console.log("rigth password");
}

// askForPassword();

console.log('\n');

// Запуск функції `askForPassword()` повинен просити пароль, поки він не буде "1234"

// Задача 3 (середня, while)

// Напишіть функцію sumUpTo, яка приймає число n і обчислює суму чисел від 1 до n (включно). Використайте цикл while.

function sumUpTo(n) {
    let total = 0;
    let count = 1;
    while (count <= n) {
        total += count;
        count += 1;
    }
    return total;
}

console.log(sumUpTo(5)); // 15 (1 + 2 + 3 + 4 + 5)
console.log(sumUpTo(10)); // 55 (1 + 2 + ... + 10)

console.log('\n');

// Задача 4 (середня, do...while)

// Створіть функцію generateRandomNumber, яка продовжує генерувати випадкові числа від 1 до 10 до тих пір, поки не згенерує число 7. Виведіть усі згенеровані числа в консоль. Використайте цикл do...while.

function generateRandomNumber() {
    let randomNumber;
    do {
        randomNumber = Math.round(Math.random() * 10);  
    } while (randomNumber !== 7); 
    console.log(randomNumber);
}

generateRandomNumber();
// Вивід (наприклад):
// 3
// 9
// 4
// 7

console.log('\n');
// Задача 5 (складна, while)

// Напишіть функцію findFactorial, яка приймає число n і повертає його факторіал (n!). Факторіал числа n визначається як добуток усіх чисел від 1 до n. Використайте цикл while.

function findFactorial(n) {
    let total = 1;
    let count = 1;
    while (count <= n) {
        total *= count;
        count += 1;
    }
    return total;
}

console.log(findFactorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
console.log(findFactorial(7)); // 5040

console.log('\n');

// Задача 6 (складна, do...while)

// Створіть функцію collectUserInput, яка зберігає в масив усі введені користувачем числа. Використовуйте цикл do...while для зчитування чисел (через prompt або у вигляді змінної для тренування). Коли користувач вводить порожній рядок або “stop”, цикл повинен завершитися і функція повертає масив чисел.

function collectUserInput() {
  let inputs = [];
  let userInput;
    do {
        userInput = prompt("input");
        if (userInput !== "" && userInput !== "stop") {
            inputs.push(Number(userInput));
        } 
    } while (userInput !== "" && userInput !== "stop");
     return inputs;
}

// console.log(collectUserInput());
// Вивід:
// [12, 5, 8, ...] (масив чисел, введених користувачем)

console.log('\n');
console.log('\n');
console.log('\n');

// Ці задачі допоможуть вам освоїти основи роботи з циклами while та do...while, і як використовувати їх для різних типів завдань у JavaScript.