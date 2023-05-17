import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Deposits from './Deposits';
import NewClients from './NewClients';
import Loans from './Loans';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here, e.g., check credentials with a server
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return loggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Xpress Financial Services</h1>
          {loggedIn && (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </header>

        <div className="sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/deposits">Deposits</Link>
              </li>
              <li>
                <Link to="/new-clients">New Clients</Link>
              </li>
              <li>
                <Link to="/loans">Loans</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="content">
          <Routes>
            <Route
              path="/login"
              element={
                loggedIn ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <div className="login-form">
                    <h2>Login</h2>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                  </div>
                )
              }
            />

            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/deposits" element={<PrivateRoute component={Deposits} />} />
            <Route path="/new-clients" element={<PrivateRoute component={NewClients} />} />
            <Route path="/loans" element={<PrivateRoute component={Loans} />} />
          </Routes>
        </div>

        <footer className="footer">&copy; 2023 Xpress Financial Services</footer>
      </div>
    </Router>
  );
}

export default App;

