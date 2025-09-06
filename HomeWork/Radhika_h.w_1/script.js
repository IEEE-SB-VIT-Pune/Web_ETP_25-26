// --- Calculator Functions ---
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Cannot divide by zero"; }

// Helper to get input values
function getValues() {
  const num1 = parseFloat(document.getElementById("num1").value) || 0;
  const num2 = parseFloat(document.getElementById("num2").value) || 0;
  return [num1, num2];
}

function showAdd() {
  const [a, b] = getValues();
  document.getElementById("calcResult").innerText = "Result: " + add(a, b);
}
function showSubtract() {
  const [a, b] = getValues();
  document.getElementById("calcResult").innerText = "Result: " + subtract(a, b);
}
function showMultiply() {
  const [a, b] = getValues();
  document.getElementById("calcResult").innerText = "Result: " + multiply(a, b);
}
function showDivide() {
  const [a, b] = getValues();
  document.getElementById("calcResult").innerText = "Result: " + divide(a, b);
}

// --- Task 2: .map() to square numbers ---
const numbers = [2, 4, 6, 8];
const squares = numbers.map(num => num * num);
document.getElementById("squares").innerText = `Squares of [${numbers}]: ${squares}`;

// --- Task 3: .find() first number > 15 ---
const nums = [5, 12, 19, 21];
const firstGreater = nums.find(num => num > 15);
document.getElementById("greater").innerText = `From [${nums}], first > 15 is: ${firstGreater}`;

// --- Task 4: Spread operator to clone array ---
const arr = [10, 20, 30];
const clonedArr = [...arr];
document.getElementById("cloned").innerText = `Original: [${arr}] | Cloned: [${clonedArr}]`;

// --- Task 5: .reduce() to sum ---
const values = [5, 10, 15, 20];
const sum = values.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sum").innerText = `Sum of [${values}] = ${sum}`;
