
// -------------------------------
// 3. ARRAYS (Basic Operations)
// -------------------------------
//
// Arrays are ordered collections of values. Each value is called an element.
// Arrays are zero-indexed (start from 0).

let nums = [1, 2, 3, 4, 5];
console.log("Accessing Elements "+nums[0]); // 1
console.log("Length "+nums.length); // 5

// Common methods
console.log(nums)
nums.push(6);  // add at end
console.log(nums)
nums.pop();  
nums.pop();  
nums.pop();    // remove last
console.log(nums)
nums.shift();  // remove first
console.log(nums)
nums.unshift(0); // add at start
console.log(nums)
console.log("After change "+nums); // [0,2,3,4,5]


// Iterating over an array

// Using for loop
console.log("Iterate method 1")
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// Using for...of loop
console.log("Iterate method 2")
for (let n of nums) {
  console.log(n);
}

// Using forEach method
console.log("Iterate method 3")
nums.forEach(function(n) {
  console.log(n);
});
console.log("--------------------------------------------------------------");

// -------------------------------
// 4. ARRAY HIGHER-ORDER METHODS
// -------------------------------
// These methods take a function as an argument and perform operations on each element.

// ---- map() ----
// Creates a new array by applying a function to each element.
let doubled = nums.map(n => n * 10);
console.log(doubled); 

// ---- filter() ----
// Creates a new array with elements that pass a condition.
let evens = nums.filter(n =>  n % 2 === 0);
console.log(evens); 

// ---- reduce() ----
// Reduces array to a single value (e.g., sum).
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 14

// ---- find() ----
// Returns the first element that matches a condition.
let found = nums.find(n => n > 3);
console.log(found); 

// ---- sort() ----
// Sorts array (default: as strings).
let letters = ["b", "a", "c"];
console.log(letters);
letters.sort();
console.log(letters); 


// For numbers, provide a compare function:
let numbers = [10, 2, 30, 4];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers);
numbers.sort((a, b) => b-a);
console.log(numbers); // [2,4,10,30]

console.log("--------------------------------------------------------------");
// -------------------------------
// 5. DESTRUCTURING
// -------------------------------
// Destructuring allows extracting values from arrays or objects into variables easily.

// Array destructuring
let arr = [100, 200, 300];
let [x, y, z] = arr;
console.log(x, y, z); // 100 200 300
console.log(z)

// Object destructuring
let student = { name: "Ravi", age: 20, city: "Mumbai" };
let { name, age, city } = student;
console.log(name, age , city); // Ravi 20

// You can also rename while destructuring
let { city: hometown } = student;
console.log(hometown); // Mumbai


// -------------------------------
// 6. SPREAD & REST OPERATORS
// -------------------------------
// Spread (...) -> expands an array/object
// Rest (...) -> collects multiple elements into an array
console.log("--------------------------------------------------------------");
// ---- Spread ----
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 4, 5];
let arr5 = [arr1, 4, 5];
console.log(arr5)
console.log(arr2); // [1,2,3,4,5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a:1, b:2, c:3}
console.log("--------------------------------------------------------------");
// ---- Rest ----



function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}








console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Using rest in destructuring
let [first, ...rest] = [10, 20 ];
console.log(first); // 10
console.log(rest);  // [20,30,40]


console.log("--------------------------------------------------------------");
