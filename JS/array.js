const skill = ["HTML","CSS","JS"];
const numbers = [10, 20, 30];
const mixed = [1, "hello", true, { name: "Dhruv" }, [1, 2]];

console.log(mixed);

const fruit = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruit[0]); // "Banana"
console.log(fruit[1]); // "Orange"

// Last element: length using length function..
console.log(fruit[fruit.length - 1]); // "Mango"[2][4]

fruit[1] = "Kiwi";
console.log(fruit); 
// or simple itretions...

//push-pop() in empty array..
const fruits = [];
fruits.push("Apple");
fruits.push("Banana");
console.log(fruits);

console.log(fruits.pop());

const fruit_s = ["Banana", "Orange", "Apple"];

/*unshift – add at the start

Adds element(s) to the beginning.

Returns the new length.

Shifts existing elements to higher indexes.*/
fruit_s.unshift("Lemon"); // add and return
console.log(fruit_s); // ["Lemon", "Banana", "Orange", "Apple"]

/*shift – remove from the start

Removes the first element.

Returns the removed element.

Shifts remaining elements to lower indexes.​*/
fruit_s.shift(); //remove and return
console.log(fruit_s);

//Slice....
// const fruit = ["Banana", "Kiwi", "Apple", "Mango"];
console.log(fruit.slice(1,3)); //(start-inclusive,end-exclusive)...

//Copy a whole array: const copy = arr.slice();.
const copy = fruit.slice();
console.log(copy);

/*splice – destructive edit
Description:
Changes the original array: can remove, replace, or insert elements.*/

/*Syntax:

js
array.splice(start, deleteCount, item1, item2, ...);
start: index where to change

deleteCount: how many to remove

item1...: items to insert at start position

Return value:
Array of elements that were removed.*/

const fr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const removed = fr.splice(2, 2);
console.log(removed); // ["Lemon", "Apple"]
console.log(fr);  // ["Banana", "Orange", "Mango"]


fr.splice(1, 0, "Lemon", "Kiwi");
// start at index 1, delete 0, insert "Lemon", "Kiwi"

console.log(fr);

/*indexOf – find position
Description:
Returns the first index where an element is found, or -1 if not found.*/

const nums = [1,45,72,32,76,54];
console.log(nums.indexOf(32)); // first index where it found 
console.log(nums.indexOf(4)); // -1 if not exist

/*includes – check existence (cleaner)
Description:
Returns true if element exists, false otherwise.
Easier to read than indexOf() !== -1.*/

console.log(nums.includes(32)); // true
console.log(nums.includes(60)); // false

// Map...
/*const newArray = array.map((element, index, array) => {
  // return transformed value
});
*/
const ele = [43,21,65,33,98,32];

const newele = ele.map((n) => n * n);
console.log(newele);

const users = [
  { id: 1, name: "Dhruv" },
  { id: 2, name: "prit" }
];

const names = users.map(user => user.name);
console.log(names); // ["Dhruv", "Alice"]

//fillter... fillter element based on conditions...
/*const newArray = array.filter((element, index, array) => {
  return someCondition; // true → keep, false → drop
});
*/

const num = [1, 2, 3, 4, 5, 6];

const evens = num.filter( (n) =>{ return n % 2 === 0 });

console.log(evens); // [2, 4, 6]
console.log(num);  // [1, 2, 3, 4, 5, 6]


//reduce..
/*reduce – combine into a single value
Idea:
reduce walks through the array and builds up one value (sum, product, object, etc.) using an accumulator.*/
/*const result = array.reduce((accumulator, current, index, array) => {
  // return new accumulator
}, initialValue);
*/

const number = [1, 2, 3, 4];

const sum = number.reduce((acc, n) => {
  return acc + n;
}, 0);

console.log(sum); // 10

