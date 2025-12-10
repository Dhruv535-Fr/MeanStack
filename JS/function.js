function greet(name){
    console.log(`Welcome to function! ${name}`);
}

greet("Dhruv");


// A function expression assigns a function (named or anonymous) to a variable
const homePage = function(){
    console.log("You are at home page!");
}
homePage();

// Arrow Function....
const double = num => num * 2;
const add = (a, b) => a + b;

const greet2 = (name) => {
  return `Hello, ${name}`;
};

console.log(greet2("Dhruv")); // Hello, Dhruv

let n = 5;
const sq = n => n * n
console.log(sq(5));

console.log((n => n * n)(5)); // instatnt call

//Parameters...
//defult parameters...

function hello(name = "Guest"){
  console.log(`Hello, ${name}`);
}

hello("Dhruv");
hello();

function getUsers(page = 1, limit = 10) {
  console.log(`Fetching page ${page} with ${limit} users`);
}

getUsers();         // Fetching page 1 with 10 users
getUsers(2);        // Fetching page 2 with 10 users
getUsers(3, 20);    // Fetching page 3 with 20 users

//Rest Parameters...
// Rest parameters (...paramName) collect all remaining arguments into an array.

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(10, 20, 30, 40)); // 100

//backend example...
function log(level, ...messages) {
  console.log(`[${level}]`, ...messages);
}

log("INFO", "Server started");
log("ERROR", "Database error:", "Connection timeout", 500);
// [INFO] Server started
// [ERROR] Database error: Connection timeout 500


function multiply(multiplier, ...nums) {
  return nums.map(n => n * multiplier);
}

console.log(multiply(2, 10, 20, 30)); // [20, 40, 60]

// return type..

function createUser(name, age) {
  return {
    name: name,
    age: age,
    isAdult: age >= 18
  };
}

const user = createUser("Dhruv", 20);
console.log(user.name); // "Dhruv"

// Backend importance
// Functions in Node/Express often return:

// JSON responses: return { success: true, data: users }

// Errors: return { error: "Invalid input" }

// Promises: return fetchData().then(data => process(data))

// Validation results: return isValid ? data : null

// Early returns prevent "callback hell" and make code cleaner.

//Closures ....

function makeGreeter(name) {
  // name is in outer function scope
  return function() {
    console.log(`Hello, ${name}`);
  };
}

const greetDhruv = makeGreeter("Dhruv");
greetDhruv(); // "Hello, Dhruv"


function createCounter() {
  let count = 0; // private

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    value() {
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.value());    // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.value());     // 1
