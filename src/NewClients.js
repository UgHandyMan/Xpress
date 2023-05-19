import React, { useState } from 'react';
import sqlite3 from 'sqlite3';
import './App.css';

function NewClients() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [address, setAddress] = useState('');
  const [residence, setResidence] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new SQLite database instance
    const db = new sqlite3.Database('expressdb.sqlite');

    // Create the new_clients table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS new_clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        date_of_birth TEXT,
        national_id TEXT,
        address TEXT,
        residence TEXT,
        phone_number TEXT,
        occupation TEXT
      )
    `);

    // Insert the new client data into the database
    db.run(
      `INSERT INTO new_clients (name, date_of_birth, national_id, address, residence, phone_number, occupation) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, dateOfBirth, nationalId, address, residence, phoneNumber, occupation],
      (err) => {
        if (err) {
          console.error('Error inserting new client:', err);
        } else {
          console.log('New client saved successfully');
          // Reset form fields
          setName('');
          setDateOfBirth('');
          setNationalId('');
          setAddress('');
          setResidence('');
          setPhoneNumber('');
          setOccupation('');
        }
      }
    );

    // Close the database connection
    db.close();
  };

  return (
    <div className="form-container">
      <h1>New Clients </h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
	    Placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label>National ID Number:</label>
          <input
	    placeholder="Enter NIN"
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <div>
          <label>Work Address:</label>
          <input
	    placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Residence:</label>
          <input
	    placeholder="Place of Residence"
            type="text"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
	    placeholder="Enter Phone Number starting with 256"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Occupation:</label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewClients;

