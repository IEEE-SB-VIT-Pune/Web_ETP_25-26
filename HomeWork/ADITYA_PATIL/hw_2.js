console.log("______________________________________");
console.log("Aditya Patil - Homework 2");
console.log("______________________________________\n");

console.log("1. Basic Calculator:");

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
        return "Error: Division by zero";
    }
    return a / b;
}

function cal(a, b, ch) {
    let result;
    switch (ch) {
        case "add":
            result = add(a, b);
            break;
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
            break;
        default:
            result = "Error: Invalid operation";
    }
    return result;
}

console.log("Addition of 10 and 5 is:", cal(10, 5, "add"));
console.log("Subtraction of 10 and 5 is:", cal(10, 5, "subtract"));
console.log("Multiplication of 10 and 5 is:", cal(10, 5, "multiply"));
console.log("Division of 10 and 5 is:", cal(10, 5, "divide"));
console.log("Division of 10 and 0 is:", cal(10, 0, "divide"));

console.log("\n______________________________________\n");

let arr = [2, 4, 6, 8];
let ans = arr.map(num => num * num);
console.log("2. Squared Array using map():", ans);

console.log("\n______________________________________\n");

let num = [5, 12, 19, 21];
let res = num.find(num => num > 15);
console.log("3. First number greater than 15 is:", res);

console.log("\n______________________________________\n");


let ori_arr = [10, 20, 30];
let clo_arr = [...ori_arr];
console.log("4. Cloned Array using spread operator:", clo_arr);

console.log("\n______________________________________\n");

let arr1 = [5, 10, 15, 20];
let sum = arr1.reduce((prev, curr) => prev + curr, 0);
console.log("5. Sum of array using reduce():", sum);

console.log("\n______________________________________");