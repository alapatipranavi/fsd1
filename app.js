const express = require('express');
const app = express();
const PORT = 3000;

// Middleware example
app.use((req, res, next) => {
  console.log(`Middleware: ${req.method} request for ${req.url}`);
  next(); // passes control to next middleware or route
});

// To handle form data (POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to Express Routing Example!');
});

// Route Parameters
app.get('/user/:id', (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

// Query Parameters
app.get('/search', (req, res) => {
  const name = req.query.name;
  res.send(`You searched for: ${name}`);
});

// POST method (form data)
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Form received! Name: ${name}, Email: ${email}`);
});

// DELETE method
app.delete('/delete/:id', (req, res) => {
  res.send(`User with ID ${req.params.id} deleted`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
