import React from 'react';
import '../../styles/account.css';
const AccountSettings = () => {
  return (
    <div>
      <div className="account-header">
        <h1>Account Settings</h1>
      </div>
      <div className='bootom-part'>
         <div className="account-content">
        <div className="profile-container">
          <div className="profile-image-container">
            <img
              src="./src/components/image.png"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-badge">
              <span>✓</span>
            </div>
          </div>
          
          <div className="profile-info">
            <h2>Marry Doe</h2>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        
        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam
        </p>
      </div>
      </div>
     
    </div>
  );
};

export default AccountSettings;