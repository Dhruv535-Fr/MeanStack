//collection of key-value pairs

const user = {
    name : "Dhruv",
    age : 20,
    isAdmin : true,
};
console.log(user);

// EmptyObject...

const User = {};
User.name = "Dhruvi";
User.isAdmin = true;

console.log(User);

//Access using dot or bracket 

console.log(user.name);
console.log(User["name"]); // can also passed as ... User[key] where key = "name" or anything..

//Backend example...
const request = {
  id: "abc123",
  method: "GET",
  path: "/users",
  headers: {
    "content-type": "application/json"
  },
  query: {
    page: "2",
    limit: "10"
  }
};

console.log(request.method);       // "GET"
console.log(request.headers["content-type"]); // "application/json"
console.log(request.query.page);   // "2"

const USER = {
    name : "Dhruv",
    age : 20,
    skills : ["C++","js","Java","React"]
};

console.log(USER.skills[0]);

//loops over objects....
//for ...in...

for(const key in USER){
    console.log(key+" : "+USER[key]);
}
//obj.key + forEach...
//Object.keys(obj) gives an array of keys. Then you can use array methods:

Object.keys(USER).forEach(key => { //Object.keys(user) → ["name", "age", "city"]
  console.log(key, USER[key]);
});

/*Object destructuring
Idea: Quickly extract properties from an object into variables.*/

const users = { name: "Dhruv", age: 20 };

const { name, age } = users;

console.log(name); // "Dhruv"
console.log(age);  // 20

const { name: userName, age: userAge } = users; // raname variable..

console.log(userName); // "Dhruv"
console.log(userAge);  // 20

//defulat value..
const { Name = "Dhruv", Age = 21 } = user;

console.log(Name); // "Dhruv"
console.log(Age);

// backend example..
const req = { query: { page: "2", limit: "10" } };
const { page, limit } = req.query;

console.log(page,limit);

function Printdata({Name,div}){
    console.log(Name,div);
}

const student = {
    Name : "Dhruv",
    div : "6A10"
};

Printdata(student);