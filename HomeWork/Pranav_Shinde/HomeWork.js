// Question 1
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
console.log("Add:", add(5, 3));        
console.log("Subtract:", subtract(5, 3)); 
console.log("Multiply:", multiply(5, 3)); 
console.log("Divide:", divide(6, 3));   


// Question 2
let numbers=[1,2,3,4,5,6];
let squared=numbers.map(numbers => numbers*2);
console.log(squared);

// Question 3
let arr = [5, 12, 19, 21];
let result = arr.find(num => num > 15);
console.log(result); 

// Question 4
let arr2 = [10, 20, 30];
let cloneArr = [...arr2];
console.log(cloneArr); 


// Question 5
let nums = [5, 10, 15, 20];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);