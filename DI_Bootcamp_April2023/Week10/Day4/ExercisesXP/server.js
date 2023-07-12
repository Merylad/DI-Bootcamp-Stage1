const express = require('express');
const knex = require('knex');


// Initialize Express app
const app = express();
const port = 3030; 

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use('/', express.static(__dirname + '/public'))

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

const currentDate = new Date().toISOString().split('T')[0]

app.post('/register', (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;


  

  
    // Insert the user data into the register table
    db('register')
      .insert({ first_name: firstName, last_name: lastName, email, username, created_date: currentDate })
      .then(() => {
        // Insert the login credentials into the login table
        db('login')
          .insert({ username, password })
          .then(() => {
            res.status(200).json({ message: 'Registration successful.' });
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to register user.' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to register user.' });
      });
  });
  
  // Define login route
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  

    // Check if the username and password match in the login table
    db('login')
      .where({ username, password })
      .then((users) => {
        if (users.length === 0) {
          res.status(401).json({ error: 'Invalid username or password.' });
        } else {
          // Update the last_login_date in the register table
          db('register')
            .where({ username })
            .update({ last_login_date: currentDate })
            .then(() => {
              res.status(200).json({ message: 'Login successful.' });
            })
            .catch((error) => {
              res.status(500).json({ error: 'Failed to update last login date.' });
            });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to login.' });
      });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

