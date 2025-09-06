//1. Make a Basic Caclulator [ functions for each operation ]

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
    if(b===0){
        return "Undefined ... try different number";
    }
    return a/b;
}
function modulus(a,b){
    return a%b;
}

let output = add(5,6);
output = subtract(5,6);
output = multiply(5,6);
output = divide(5,0);
output = modulus(5,6);



// 2.Use .map() to square all numbers in [2,4,6,8] 
let arr = [2,4,6,8];
let newArray = arr.map(value => value+" squared is: "+ value*value);



//3. Use .find() to get the first number greater than 15 from [5,12,19,21]
let arr2 = [5,12,19,21];
let firstGreaterThan15 = arr2.find(value => value > 15);
console.log(firstGreaterThan15);



//4. Clone an array arr = [10,20,30] using spread operator.
let arr3 = [10,20,30];
let clonedArr = [...arr3];
console.log(clonedArr);



//5. Use .reduce() to find the sum of [5,10,15,20].
let arr4 = [5,10,15,20];
let reduceArray = arr4.reduce((acc, value) => acc + ", " + value);
console.log(reduceArray);