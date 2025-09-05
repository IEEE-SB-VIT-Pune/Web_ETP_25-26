
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
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

console.log("Calculator:");
console.log("10 + 5 =", add(10, 5));
console.log("10 - 5 =", subtract(10, 5));
console.log("10 * 5 =", multiply(10, 5));
console.log("10 / 5 =", divide(10, 5));

const nums = [2, 4, 6, 8];
const squares = nums.map(n => n * n);
console.log("\nSquares of [2,4,6,8]:", squares);

const arr = [5, 12, 19, 21];
const firstOver15 = arr.find(n => n > 15);
console.log("\nFirst number > 15 in [5,12,19,21]:", firstOver15);

const arr2 = [10, 20, 30];
const clone = [...arr2];
console.log("\nCloned array:", clone);
console.log("Is clone same object as arr2?", clone === arr2); 

const sum = nums2.reduce((acc, n) => acc + n, 0);
console.log("\nSum of [5,10,15,20]:", sum);
