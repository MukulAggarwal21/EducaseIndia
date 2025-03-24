import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import '../../styles/auth.css';

const Login = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, handle login logic here
    navigate('/account');
  };
  
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="text-gray" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        
        <div className="form-submit">
          <Button type="submit" variant="tertiary">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;