import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Loans() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server with the loan data
      await axios.post('/loans', {
        name,
        amount,
        date,
        notes,
      });

      console.log('Loan saved successfully');
      // Reset form fields
      setName('');
      setAmount('');
      setDate('');
      setNotes('');
    } catch (error) {
      console.error('Error saving loan data:', error);
    }
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

