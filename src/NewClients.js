import React, { useState } from 'react';
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
    // TODO: Save new client data to MongoDB database
    console.log('New client form submitted');
    // Reset form fields
    setName('');
    setDateOfBirth('');
    setNationalId('');
    setAddress('');
    setResidence('');
    setPhoneNumber('');
    setOccupation('');
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

