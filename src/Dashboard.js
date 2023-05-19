import React, { useState, useEffect } from 'react';
import sqlite3 from 'sqlite3';

function Dashboard() {
  const [deposits, setDeposits] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Fetch data from the SQLite3 database
    const db = new sqlite3.Database('expressdb.sqlite');

    // Retrieve the data from the deposits table
    db.all('SELECT * FROM deposits', (err, rows) => {
      if (err) {
        console.error('Error fetching deposits:', err);
      } else {
        setDeposits(rows);
      }
    });

    // Retrieve the data from the loans table
    db.all('SELECT * FROM loans', (err, rows) => {
      if (err) {
        console.error('Error fetching loans:', err);
      } else {
        setLoans(rows);
      }
    });

    // Close the database connection
    db.close();
  }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>

      <div className="table-container">
        <h2>Deposits</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2>Loans</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2>New Clients</h2>
        <table>
          {/* Render the new clients data */}
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
