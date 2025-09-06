//Basic calculator
let a = 120;
let b = 60;

function sum(a, b){
    return a+b;
}
function diff(a, b){
    return a-b;
}
function multi(a, b){
    return a*b;
}
function division(a, b){
    return a/b;
}
console.log("a = 120 and b = 60");
console.log("Addition: ", sum(a,b), "\nSubtraction: ", diff(a,b), "\nMultiplication: ", multi(a,b), "\nDivision: ", division(a,b));

//Squaring all numbers in an array

arr1 = [2, 4, 6, 8];
function squaring(a){
    return a**2;
}
sq = arr1.map(squaring);
console.log("Squared array = ", sq);

//Use .find() to get the first number greater than 15 from [5, 12, 19, 21]
arr2 = [5, 12, 19, 21];
find = arr2.find(a => a>15);
console.log("Number: ", find);

//clone array arr = [10, 20, 30] using spread opp
arr = [10, 20, 30];
arr_cloned = [...arr];

//Use .reduce() to find the sum of [5, 10, 15, 20]
nums = [5, 10, 15, 20];
addAll = nums.reduce((a,b) => a+b, 0);
console.log("Addition of elements: ", addAll);