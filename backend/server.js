const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
console.log('hello');

// Connection URI. Update this with your MongoDB Atlas connection string.
const uri = 'mongodb://localhost:27017/mongo.arslan';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB Atlas cluster
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    return;
  }

  console.log('Connected to MongoDB Atlas');

  // Use the MongoDB collections here
  const usersCollection = client.db('mongo').collection('arslan');

  // Signup endpoint
  app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Insert the new user
    await usersCollection.insertOne({ name, email, password });

    res.json({ message: 'Signup successful' });
  });

  // Login endpoint
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email and password
    const user = await usersCollection.findOne({ email, password });

    if (user) {
      return res.json({ message: 'Login successful' });
    }

    res.status(401).json({ message: 'Invalid credentials' });
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
