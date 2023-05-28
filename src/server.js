const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 4000;

// Create a new SQLite database instance
const db = new sqlite3.Database('expressdb.sqlite');

// Create the deposits table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS deposits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    date TEXT,
    amount REAL,
    notes TEXT
  )
`);

// Middleware to parse JSON body
app.use(express.json());

// Route to handle deposit submission
app.post('/deposits', (req, res) => {
  const { name, date, amount, notes } = req.body;

  // Insert the deposit data into the database
  db.run(
    `INSERT INTO deposits (name, date, amount, notes) VALUES (?, ?, ?, ?)`,
    [name, date, amount, notes],
    (err) => {
      if (err) {
        console.error('Error inserting deposit:', err);
        res.status(500).send('Error saving deposit');
      } else {
        console.log('Deposit saved successfully');
        res.status(200).send('Deposit saved successfully');
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

