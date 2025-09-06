// 1. Make a Basic Caclulator [ functions for each operation ]
// 2. Use .map() to square all numbers in [2,4,6,8]
// 3. Use .find() to get the first number greater than 15 from [5,12,19,21]
// 4. Clone an array arr = [10,20,30] using spread operator.
// 5. Use .reduce() to find the sum of [5,10,15,20].

// 1. Make a Basic Caclulator [ functions for each operation ]
console.log("1. Make a Basic Caclulator [ functions for each operation ]");

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

console.log("  Add: 5 + 3 = ", add(5, 3));
console.log("  Subtract: 8 - 4 =", sub(8, 4));
console.log("  Multiply: 5 * 4 =", multiply(5, 4));
console.log("  Divide: 10 / 2 =", divide(10, 2));
console.log("  Divide: divide by zero 10 / 0 =", divide(10, 0));

// 2. Use .map() to square all numbers in [2,4,6,8]
console.log("\n2. Use .map() to square all numbers in [2, 4, 6, 8].");

const numbers = [2, 4, 6, 8];
const squared = numbers.map((num) => num * num);
console.log("  Squared numbers using .map():", squared);

// 3. Use .find() to get the first number greater than 15 from [5,12,19,21]
console.log(
  "\n3. Use .find() to get the first number greater than 15 from [5, 12, 19, 21]."
);

const array = [5, 12, 19, 21];
const num = array.find((el) => el > 15);
console.log("  First element greater than 15 using .find():", num);

// 4. Clone an array arr = [10,20,30] using spread operator.
console.log("\n4. Clone an array arr = [10, 20, 30] using spread operator.");

const nums = [10, 20, 30];
const clonedNums = [...nums];
console.log("  Cloned array using spread operator:", clonedNums);

// 5. Use .reduce() to find the sum of [5,10,15,20].
console.log("\n 5. Use .reduce() to find the sum of [5, 10, 15, 20].");
const values = [5, 10, 15, 20];
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log("  Sum using .reduce():", sum);
