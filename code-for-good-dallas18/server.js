const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.json({ express: 'Hello From Express' });
});

app.get('/login', (req, res) => {
  res.json({express: 'login'});
})

app.get('/signup', (req, res) => {
  res.json({express: 'sign up'});
})

app.get('/app', (req, res) => {
  res.json({express: 'application'});
})

app.get('/submit', (req, res) => {
  res.json({express: 'submit'});
})

app.listen(port, () => console.log(`Listening on port ${port}`));
