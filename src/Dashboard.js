import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Fetch data from MongoDB database and update 'data' state
    const fetchData = async () => {
      try {
        // Make API call to fetch data from the database
        const response = await fetch('/api/data'); // Replace '/api/data' with your actual API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
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
          {data.map((item) => (
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
  );
}

export default Dashboard;

