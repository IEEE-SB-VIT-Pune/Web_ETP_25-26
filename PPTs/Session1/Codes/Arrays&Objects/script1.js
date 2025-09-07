// ===============================
//   JAVASCRIPT CLASS NOTES
// ===============================
//
// Topics Covered:
// 1. Objects: creation, properties, methods
// 2. The 'this' keyword
// 3. Arrays & operations
// 4. Array higher-order methods: map, filter, reduce, find, sort
// 5. Destructuring
// 6. Spread & Rest operators
//
// Each section has explanation in comments + examples.
// ===============================


// -------------------------------
// 1. OBJECTS
// -------------------------------
//
// Objects in JavaScript are collections of key-value pairs.
// Keys are also called "properties". Values can be data (string, number, etc.) or functions (called methods).

// Example: Creating an object

//METHOD 1
let person = {
  name: "Ojas",
  age: 22,
  isStudent: true,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// METHOD 2
let cars = new Object();
cars.company = "Audi";
cars.model = "A1 Series";
cars.color = "black";
cars.size = "big";

// console.log(cars.size)

// console.log(cars);
// console.log(person);
// console.table(cars);

// console.log("--------------------------------------------------------------")

// console.log("Name: "+person.name);    // Access property -> Ojas
// console.log("Age: "+person["age"]);  // Access property using brackets -> 22
// person.greet();              // Call method -> "Hello, my name is Ojas"


// console.log(person);
// Adding and deleting properties
person.city = "Delhi";   // add
delete person.isStudent; // delete
person.age = 19;         // update
console.log(person);


console.log("--------------------------------------------------------------")


// -------------------------------
// 2. THE 'this' KEYWORD
// -------------------------------
// 'this' refers to the object that is calling the function.
// It makes methods reusable for different objects.

let car = {
  brand: "Toyota",
  model: "Corolla",
  showDetails: function() {
    console.log("Brand: " + this.brand + ", Model: " + this.model);
  }
};

car.showDetails(); // "Brand: Toyota, Model: Corolla"

// Example: 'this' can change based on the context
let bike = { 
  brand: "Yamaha", 
  model: "R15", 
  showDetails: car.showDetails 
};
bike.showDetails(); // "Brand: Yamaha, Model: R15"

console.log("--------------------------------------------------------------");


