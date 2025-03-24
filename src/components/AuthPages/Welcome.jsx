import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import '../../styles/auth.css';

const Welcome = () => {
  return (
    <div className="auth-container welcome-container">
      <div className="auth-header">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      <div className="space-y-3" class="buttons">
      <div class="buttondiv">
          <Link to="/signup">
          <Button variant="primary" class="button1">Create Account</Button>
        </Link> 
      </div>
        <Link to="/login">
          <Button variant="secondary">Already Registered? Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;