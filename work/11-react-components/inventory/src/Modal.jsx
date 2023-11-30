import React from 'react';
import Button from "./Button"

const Modal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <dialog open={isOpen}>
      <form onSubmit={onSubmit}>
        {/* Add your form fields here */}
        <input type="text" placeholder="Your Name" />
        {/* ... other form fields ... */}

        <Button type="submit" value="Submit" >Submit</Button>
        <Button type="button" onClick={onClose}>Close</Button>
        
      </form>
    </dialog>
  );
};

export default Modal;