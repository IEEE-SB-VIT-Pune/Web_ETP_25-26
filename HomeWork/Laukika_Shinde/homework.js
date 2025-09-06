// --- 1. Make a Basic Caclulator ---
function calculator(a,b,op) {
    let res;

    switch(op) {
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            if(b==0) {
                res = "Error";
            } else {
                res = a / b;
            }
            break;
        default:
            res="Invalid operator";
    }
    return res;
}
console.log("7 + 3 =", calculator(7,3,'+'));
console.log("7 - 3 =", calculator(7,3,'-'));
console.log("7 + 3 =", calculator(7,3,'*'));
console.log("7 + 3 =", calculator(7,3,'/'));
console.log("7 // 3 =",calculator(7,3,'//'));

console.log("\n----------------------------\n");

// --- 2. Use .map() to square all numbers in [2,4,6,8] ---
let arra = [2,4,6,8];
let square = arra.map(num => num*num);
console.log("Square of the elements of arrays are-",square);

console.log("\n----------------------------\n");

// --- 3. Use .find() to get the first number greater than 15 from [5,12,19,21]
 let num = [5,12,19,21];
 let greater = num.find(num => num > 15);
 console.log("The first number greater than 15 is ",greater);

 console.log("\n----------------------------\n");

 // --- 4. Clone an array arr = [10,20,30] using spread operator. ---
let arr = [10,20,30];
let arr1 = [...arr];
console.log("Original array:",arr);
console.log("Cloned array:",arr1);

console.log("\n----------------------------\n");

// --- 5. Use .reduce() to find the sum of [5,10,15,20]. ---
let number = [5,10,15,20];
let sum = number.reduce((total, current) => total + current, 0);
console.log("Sum of Values:", sum);