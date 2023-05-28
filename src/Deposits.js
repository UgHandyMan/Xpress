import React, { useState } from 'react';
import { createDatabase } from './database';
import './App.css';

function Deposits() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

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

      // Access the 'deposits' collection
      const depositsCollection = db.collection('deposits');

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
