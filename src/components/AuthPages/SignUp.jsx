import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import '../../styles/auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, handle signup logic here
    navigate('/account');
  };
  
  return (
    <div className="auth-container">
      <h1>Create your PopX account</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            defaultValue="Marry Doe"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">
            Phone number<span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            defaultValue="Marry Doe"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">
            Email address<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            defaultValue="Marry Doe"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">
            Password<span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            defaultValue="Marry Doe"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="company">
            Company name
          </label>
          <input
            type="text"
            id="company"
            defaultValue="Marry Doe"
          />
        </div>
        
        <div className="form-group">
          <label>
            Are you an Agency?<span className="required">*</span>
          </label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                checked={isAgency}
                onChange={() => setIsAgency(true)}
                className="radio-input"
                required
              />
              <span className="radio-label">Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                checked={!isAgency}
                onChange={() => setIsAgency(false)}
                className="radio-input"
              />
              <span className="radio-label">No</span>
            </label>
          </div>
        </div>
        
        <div className="form-submit">
          <Button type="submit" variant="primary">Create Account</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;