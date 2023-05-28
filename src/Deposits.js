import React, { useState } from 'react';
import sqlite3 from 'sqlite3';
import './App.css';

function Deposits() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

<<<<<<< HEAD
  const RxDB = require('rxdb');
  async function createRxDatabase() {
  // Initialize the database
  const db = await RxDB.create({
    name: 'expressdb',
    adapter: 'idb', // Use IndexedDB adapter
    password: 'Badboy4life312922', // Optional: Set a password for encryption
    multiInstance: true,                // <- multiInstance (optional, default: true)
    eventReduce: true,                  // <- eventReduce (optional, default: false)
    cleanupPolicy: {}                   // <- custom cleanup policy (optional) 
});
=======
  const handleFormSubmit = (e) => {
    e.preventDefault();
>>>>>>> bf590ca4a1bcc332a5d0072487d77b2c3b63e368

    // Create a new SQLite database instance
    const db = new sqlite3.Database('expressdb.sqlite');

<<<<<<< HEAD
      // Insert a new document
      const deposit = await depositsCollection.insert({
        name,
        date,
        amount,
        notes,
      });
    console.log('Deposit form submitted');

    const handleSaveDeposit = async () => {
  try {
    // TODO: Save deposit data to database

    setName('');
    setDate('');
    setAmount('');
    setNotes('');
  } catch (error) {
      console.error('Error saving deposit data:', error);
    }
=======
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
>>>>>>> bf590ca4a1bcc332a5d0072487d77b2c3b63e368
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
