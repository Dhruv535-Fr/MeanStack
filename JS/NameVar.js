const prompt = require('prompt-sync')();

console.log("Hello, JavaScript!");
let x = 5;
let y = 15;
console.log("x =",x);
console.log("Sum of x + y is :", x+y);
let name = "Dhruv";
console.log(`Hello,My name is ${name}`);
console.log(`Sum of ${x} and ${y} is ${x + y}`);

const User = prompt('Enter your Name!');
const path = "/api/users";
const time = new Date().toISOString();

console.log(`[INFO] User ${User} requested ${path} at ${time}`);

let num1 = 9;
let num2 = 4;

console.log(num1 + num2);  // 13
console.log(num1 - num2);  // 5
console.log(num1 * num2);  // 36
console.log(num1 / num2);  // 2.25
console.log(num1 % num2);  // 1
console.log(num2 ** 3);    // 64

let a = 10 + 20;        // 30 (number + number)
let b = "10" + "20";    // "1020" (string + string)
let c = 10 + "20";      // "1020" (number + string → string)
let d = "Value: " + 10; // "Value: 10"

let req = 9,errors = 2;

console.log(`Total: ${req}, Errors: ${errors}, Success: ${req - errors}`);

let count;
count = 5;

const PI = 3.14159;   // must assign here


if(User === "Dhruv"){
    console.log("You are the Admin");
}else{
    console.log("Not a Admin~");
}

let user = {id : 1 ,name : "Dhruv"};

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
// Output: 1 2 3 4 5

let attempts = 0;
const MAX = 3;

do {
  attempts++;
  console.log(`Attempt ${attempts}`);
} while (attempts < MAX);

// looping through an array

const users = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
// Output: Alice Bob Charlie

// for of & for in


// for of : Iterates over values of iterable objects (arrays, strings, Maps, Sets, etc.).
// provide values
const student = ["Alice", "Bob", "Charlie"];

for (const user of student) {
  console.log(user);
}
// Output: Alice Bob Charlie

//for in : Iterates over enumerable property keys (names) of an object.
// provides index

const usere = { name: "Dhruv", age: 20, role: "student" };

for (const key in usere) {
  console.log(`${key}: ${usere[key]}`);
}
// Output:
// name: Dhruv
// age: 20
// role: student
