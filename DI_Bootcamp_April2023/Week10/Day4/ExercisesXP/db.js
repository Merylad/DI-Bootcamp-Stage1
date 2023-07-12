const express = require('express');
const knex = require('knex');

// Initialize Express app
const app = express();
const port = 3030; 

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

const db = knex({
    client : 'pg',
    connection : {
        host : 'trumpet.db.elephantsql.com',
        port: '5432',
        user : 'ofzizzbn',
        database : 'ofzizzbn',
        password : 'KrvqIYiiG1nNrYxLVz3SSP2MFYTZHCLr'
    }
})

// Define register route
app.post('/register', (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    
    // Check if any input is empty
    if (!firstName || !lastName || !email || !username || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    
    // Insert the user data into the database
    db('users')
      .insert({ firstName, lastName, email, username, password })
      .then(() => {
        res.status(200).json({ message: 'User registered successfully.' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to register user.' });
      });
  });
  
  // Define login route
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Check if any input is empty
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }
    
    
    db('users')
      .where({ username, password })
      .then((users) => {
        if (users.length === 0) {
          res.status(401).json({ error: 'Invalid username or password.' });
        } else {
          res.status(200).json({ message: 'Login successful.' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to login.' });
      });
  });
  
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

