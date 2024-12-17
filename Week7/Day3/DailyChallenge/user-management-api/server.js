const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware 
app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, 'users.json');

if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

// To read users data from the JSON file
function readUsers() {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
}

// Utility to write users data to the JSON file
function writeUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

// POST /register: User registration
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const users = readUsers();

  // Check if username already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists.' });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user object
  const newUser = {
    id: users.length + 1, // Simple ID generation
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  // Save new user to the JSON file
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: 'User registered successfully' });
});

// POST /login: User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Both username and password are required.' });
  }

  const users = readUsers();

  // Find user by username
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password.' });
  }

  // Compare the password with the hashed one
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid username or password.' });
  }

  res.status(200).json({ message: 'Login successful' });
});

// GET /users: Retrieve all users
app.get('/users', (req, res) => {
  const users = readUsers();
  res.status(200).json(users);
});

// GET /users/:id: Retrieve a specific user by ID
app.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  res.status(200).json(user);
});

// PUT /users/:id: Update a user’s information
app.put('/users/:id', (req, res) => {
  const users = readUsers();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Update the user data
  const { firstName, lastName, email, username } = req.body;
  users[userIndex] = {
    ...users[userIndex],
    firstName,
    lastName,
    email,
    username
  };

  writeUsers(users);

  res.status(200).json({ message: 'User updated successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
