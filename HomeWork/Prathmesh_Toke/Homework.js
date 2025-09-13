/**
 * -----------------------------------
 * WEB ETP - HOMEWORK -- [ 4 SEP ]
 * -----------------------------------
 * TASKS:
 * 1. Basic Calculator (functions for each operation)
 * 2. Using .map() to square all numbers
 * 3. Using .find() to find a number > 15
 * 4. Cloning an array using the spread operator
 * 5. Using .reduce() to find the sum of an array
 */

// -------------------------
// 1. Basic Calculator
// -------------------------

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}


function multiply(a, b) {
  return a * b;
}


function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

console.log("Calculator Operations:");
console.log("10 + 5 =", add(10, 5));
console.log("10 - 5 =", subtract(10, 5));
console.log("10 * 5 =", multiply(10, 5));
console.log("10 / 5 =", divide(10, 5));
console.log("10 / 0 =", divide(10, 0));
console.log('-------------------------\n');


// --------------------------------------------
// 2. Use .map() to square all numbers in [2,4,6,8]
// --------------------------------------------
const nums = [2, 4, 6, 8];
const squared = nums.map(num => num ** 2);

console.log("Squared numbers using .map():");
console.log(`Original: [${nums}]`);
console.log(`Squared: [${squared}]`);
console.log('-------------------------\n');


// --------------------------------------------------
// 3. Use .find() to get the first number > 15 from [5,12,19,21]
// --------------------------------------------------
const numbers = [5, 12, 19, 21];
const firstGreaterThan15 = numbers.find(num => num > 15);

console.log("First number > 15 using .find():");
console.log(`Array: [${numbers}]`);
console.log(`First > 15: ${firstGreaterThan15}`);
console.log('-------------------------\n');


// ---------------------------------------
// 4. Clone an array using spread operator
// ---------------------------------------
const arr = [10, 20, 30];
const clonedArr = [...arr];

console.log("Cloning array using spread operator:");
console.log(`Original: [${arr}]`);
console.log(`Cloned:   [${clonedArr}]`);
console.log('-------------------------\n');


// --------------------------------------------
// 5. Use .reduce() to find the sum of [5,10,15,20]
// --------------------------------------------
const values = [5, 10, 15, 20];
const sum = values.reduce((acc, curr) => acc + curr, 0);

console.log("Sum using .reduce():");
console.log(`Array: [${values}]`);
console.log(`Sum: ${sum}`);
console.log('-------------------------\n');
