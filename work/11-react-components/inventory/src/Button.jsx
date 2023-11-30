import React from 'react';
import './Button.css'; 

function Button  ({ type = 'button', visual = 'button', onClick, disabled = false, children,className}) {
  let buttonClass = "button" ; 
  if (visual === 'link'){
    buttonClass = 'button-link';
  }
  return (
    <button
    className={`${buttonClass} ${className}`}
    disabled={disabled} type={type}
    onClick={onClick}
    >
    {children}
    </button>
    
  );
};

export default Button;