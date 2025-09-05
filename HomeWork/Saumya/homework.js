// 1. Basic Calculator (functions for each operation)
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
  return b !== 0 ? a / b : "Cannot divide by zero";
}

console.log("Add:", add(10, 5));          // 15
console.log("Subtract:", subtract(10, 5)); // 5
console.log("Multiply:", multiply(10, 5)); // 50
console.log("Divide:", divide(10, 5));     // 2


// 2. Use .map() to square all numbers in [2,4,6,8]
let numbers = [2, 4, 6, 8];
let squares = numbers.map(num => num * num);
console.log("Squares:", squares); // [4, 16, 36, 64]


// 3. Use .find() to get the first number greater than 15
let arr1 = [5, 12, 19, 21];
let firstGreater = arr1.find(num => num > 15);
console.log("First number > 15:", firstGreater); // 19


// 4. Clone an array using spread operator
let arr = [10, 20, 30];
let clonedArr = [...arr];
console.log("Cloned Array:", clonedArr); // [10, 20, 30]


// 5. Use .reduce() to find the sum of [5,10,15,20]
let arr2 = [5, 10, 15, 20];
let sum = arr2.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 50
