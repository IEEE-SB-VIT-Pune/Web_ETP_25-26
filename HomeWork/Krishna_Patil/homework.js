// 1. Basic Calculator
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


console.log('Add:', add(10, 5));
console.log('Subtract:', subtract(10, 5));
console.log('Multiply:', multiply(10, 5));
console.log('Divide:', divide(10, 5));

// 2. Use .map() to square all numbers in [2,4,6,8]
const nums = [2, 4, 6, 8];
const squares = nums.map(n => n * n);
console.log('Squares:', squares);

// 3. Use .find() to get the first number greater than 15 from [5,12,19,21]
const arr1 = [5, 12, 19, 21];
const firstGreaterThan15 = arr1.find(n => n > 15);
console.log('First number > 15:', firstGreaterThan15);

// 4. Clone an array arr = [10,20,30] using spread operator
const arr = [10, 20, 30];
const clonedArr = [...arr];
console.log('Cloned array:', clonedArr);

// 5. Use .reduce() to find the sum of [5,10,15,20]
const arr2 = [5, 10, 15, 20];
const sum = arr2.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum);