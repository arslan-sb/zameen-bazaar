const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy user data (replace with a database in a real application)
const users = [{ name: 'Arslan', email: 'a@g.com', password: '123' },];

// Signup endpoint
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  // Check if the email is already registered
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  const newUser = { name, email, password };
  users.push(newUser);
  res.json({ message: 'Signup successful' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    return res.json({ message: 'Login successful' });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
