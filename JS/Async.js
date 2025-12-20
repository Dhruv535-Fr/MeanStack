//callback function...

function greet(name, callback) {
  const message = `Hello, ${name}`;
  callback(message); // call the function we received
}

function print(msg) {
  console.log(msg);
}
greet("Dhruv", print); // Hello, Dhruv

//Backend-style: process data
function processUser(userData, onComplete) {
  const processed = {
    ...userData,
    timestamp: Date.now()
  };
  onComplete(processed); // send result to callback
}

processUser({ name: "Dhruv" }, user => {
  console.log("Processed:", user);
});
// Processed: { name: "Dhruv", timestamp: 1734086400000 }

//setTimeout..

console.log("1. Start");

setTimeout(() => {
  console.log("3. Delayed");
}, 100);

console.log("2. End");

// Output:
// 1. Start
// 2. End  
// (1 second later)
// 3. Delayed

//Backend example: simulate API delay
function fakeApiCall(callback) {
  console.log("Making API call...");
  
  setTimeout(() => {
    const fakeData = { users: 42 };
    callback(fakeData); // send result to callback
  }, 2000);
}

fakeApiCall(data => {
  console.log("Got data:", data);
});

/*Sync backend (bad):
app.get('/users', (req, res) => {
  const users = slowDatabaseQuery(); // blocks 2 seconds!
  res.json(users);
});
Every request waits 2 seconds → server freezes */

/*Async backend (good):

app.get('/users', (req, res) => {
  slowDatabaseQuery((users) => { // callback runs when DB is ready
    res.json(users);
  });
});
// Server can handle other requests while waiting for DB
*/

console.log("Start");

const id = setInterval(() =>{
    console.log("Tick");
},1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(id);
  console.log("Stopped");
}, 5000);

// Start heartbeat every 30 seconds
const heartbeatId = setInterval(() => {
  console.log("Server alive:", new Date());
}, 30000);

// Graceful shutdown
process.on('SIGINT', () => {
  clearInterval(heartbeatId); // Clean stop
  process.exit();
});

