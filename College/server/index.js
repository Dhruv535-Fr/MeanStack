const express = require('express');
const app = express();

app.use(express.json());

function Auth(req, res, next) {
  const { user, password } = req.query; 

  if (user === 'dhruv' && password === '12345') {
    return next();
  }

  return res.send("Invalid Username & Password!");
}

app.get('/', (req, res) => {
  res.send('Welcome to College!');
});

app.get('/login', Auth, (req, res) => {
  res.send('Hello! Dhruv... How are You!');
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Hello, Myself ${id}`);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
