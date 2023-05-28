import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Deposits() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to save the deposit data
      await axios.post('http://localhost:3000/deposits', {
        name,
        date,
        amount,
        notes,
      });

      console.log('Deposit saved successfully');

      // Reset form fields
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

