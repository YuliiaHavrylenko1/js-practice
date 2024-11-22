// Ось кілька задач для практики з використанням методу рядків padStart для початківців:

// Задача 1 (легка)

// Напишіть функцію formatID, яка приймає ідентифікатор id (число) і повертає його у вигляді рядка з мінімум 5 символів, заповнюючи нулями зліва, якщо потрібно. Використайте метод padStart.

function formatID(id) {
    return String(id).padStart(5, "0");
}

console.log(formatID(42)); // "00042"
console.log(formatID(7));  // "00007"
console.log(formatID(12345)); // "12345"

console.log("\n");

// Задача 2 (легка)

// Створіть функцію formatMonth, яка приймає номер місяця month (число від 1 до 12) і повертає його у вигляді двозначного рядка, наприклад, "01" для січня. Використайте метод padStart.

function formatMonth(month) {
    return String(month).padStart(2, "0");
}

console.log(formatMonth(1)); // "01"
console.log(formatMonth(10)); // "10"
console.log(formatMonth(5)); // "05"

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію padPhoneNumber, яка приймає телефонний номер number як рядок з 10 цифр і повертає його у вигляді, де перші 3 цифри є кодом міста (заповнені нулями зліва, якщо потрібно). Наприклад, для номера “1234567890” код міста буде “123”. Використайте padStart для коду міста, якщо він менше 3 цифр.

function padPhoneNumber(number) {
  const areaCode = number.slice(0, 3).padStart(3, '0');
  const localNumber = number.slice(3);
  return `(${areaCode}) ${localNumber}`;
}

console.log(padPhoneNumber("1234567890")); // "(123) 4567890"
console.log(padPhoneNumber("9876543210")); // "(987) 6543210"
console.log(padPhoneNumber("4567890"));    // "(045) 67890"

console.log("\n");

// Задача 4 (середня)

// Створіть функцію padInvoiceNumber, яка приймає номер рахунку invoiceNum (число) і повертає його у вигляді рядка з 8 символів, заповнених літерами “A” зліва, якщо потрібно. Використайте padStart.

function padInvoiceNumber(invoiceNum) {
    return String(invoiceNum).padStart(8, "A");
}

console.log(padInvoiceNumber(123)); // "AAAAA123"
console.log(padInvoiceNumber(9876)); // "AAA9876"
console.log(padInvoiceNumber(12345678)); // "12345678"

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію formatCurrency, яка приймає суму amount і повертає її у вигляді рядка з мінімум 10 символів, заповнюючи зліва символами $. Використайте padStart, щоб забезпечити загальну довжину 10 символів.

function formatCurrency(amount) {
    return amount.padStart(10, "$");
}

console.log(formatCurrency("1500"));   // "$$$$$$1500"
console.log(formatCurrency("500000")); // "$$$500000"
console.log(formatCurrency("123"));    // "$$$$$$$123"

console.log("\n");

// Задача 6 (складна)

// Створіть функцію formatBinary, яка приймає число num і повертає його у вигляді 8-бітного двійкового рядка, заповнюючи нулями зліва, якщо потрібно. Використайте padStart.

function formatBinary(num) {
  const binaryString = num.toString(2);
  return binaryString.padStart(8, '0');
}

console.log(formatBinary(5));    // "00000101"
console.log(formatBinary(255));  // "11111111"
console.log(formatBinary(32));   // "00100000"

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти метод padStart для форматування рядків з різними типами даних, такими як ідентифікатори, номери рахунків, дати та двійкові числа.