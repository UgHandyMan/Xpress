import React, { useState } from 'react';
import sqlite3 from 'sqlite3';

function Deposits() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

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

    // Insert the deposit data into the database
    db.run(
      `INSERT INTO deposits (name, date, amount, notes) VALUES (?, ?, ?, ?)`,
      [name, date, amount, notes],
      (err) => {
        if (err) {
          console.error('Error inserting deposit:', err);
        } else {
          console.log('Deposit saved successfully');
          // Reset form fields
          setName('');
          setDate('');
          setAmount('');
          setNotes('');
        }
      }
    );

    // Close the database connection
    db.close();
  };

  return (
    <div className="form-container">
      <h1>Deposits Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
	    placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
	    placeholder="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
	    placeholder="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Notes:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Deposits;
