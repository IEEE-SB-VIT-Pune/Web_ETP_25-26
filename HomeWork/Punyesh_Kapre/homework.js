// 1. Basic Calculator [functions for each operation]
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

console.log("Add:", add(1003, 56));
console.log("Subtract:", subtract(5659, 2505));
console.log("Multiply:", multiply(1450, 5));
console.log("Divide:", divide(10050, 5));


// 2. Use .map() to square all numbers in [2,4,6,8]
let nums = [3, 6, 9, 12];
let squares = nums.map(n => n * n);
console.log("Squares:", squares);


// 3. Use .find() to get the first number greater than 15 from [5,12,19,21]
let arr1 = [5, 12, 19, 21];
let firstGreater = arr1.find(n => n > 15);
console.log("First number greater than 15:", firstGreater);


// 4. Clone an array arr = [10,20,30] using spread operator
let arr2 = [10, 20, 30];
let cloneArr = [...arr2];
console.log("Cloned Array:", cloneArr);


// 5. Use .reduce() to find the sum of [5,10,15,20]
let arr3 = [5, 10, 15, 20];
let sum = arr3.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);
