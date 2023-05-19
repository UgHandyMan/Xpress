import React, { useState } from 'react';
import sqlite3 from 'sqlite3';
import './App.css';

function Loans() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');


function Loans() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new SQLite database instance
    const db = new sqlite3.Database('expressdb.sqlite');

    // Create the loans table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS loans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        amount REAL,
        date TEXT,
        notes TEXT
      )
    `);

    // Insert the loan data into the database
    db.run(
      `INSERT INTO loans (name, amount, date, notes) VALUES (?, ?, ?, ?)`,
      [name, amount, date, notes],
      (err) => {
        if (err) {
          console.error('Error inserting loan:', err);
        } else {
          console.log('Loan saved successfully');
          // Reset form fields
          setName('');
          setAmount('');
          setDate('');
          setNotes('');
        }
      }
    );

    // Close the database connection
    db.close();
  };


  return (
    <div className="form-container">
      <h1>Loan Payments</h1>
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
          <label>Amount:</label>
          <input
	    placeholder="Amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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

export default Loans;
