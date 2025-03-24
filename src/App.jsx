import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/AuthPages/Welcome';
import Login from './components/AuthPages/Login';
import SignUp from './components/AuthPages/SignUp';
import AccountSettings from './components/Dashboard/AccountSettings';
import './styles/index.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;