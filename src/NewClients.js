import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function NewClients() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [address, setAddress] = useState('');
  const [residence, setResidence] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server with the new client data
      await axios.post('/new-clients', {
        name,
        date_of_birth: dateOfBirth,
        national_id: nationalId,
        address,
        residence,
        phone_number: phoneNumber,
        occupation,
      });

      console.log('New client saved successfully');
      // Reset form fields
      setName('');
      setDateOfBirth('');
      setNationalId('');
      setAddress('');
      setResidence('');
      setPhoneNumber('');
      setOccupation('');
    } catch (error) {
      console.error('Error saving new client data:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>New Clients</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            placeholder="Enter Name"
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

