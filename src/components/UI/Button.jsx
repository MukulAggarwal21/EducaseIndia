import React from 'react';
import '../../styles/button.css';

const Button = ({ children, variant = 'primary', type = 'button', onClick }) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;