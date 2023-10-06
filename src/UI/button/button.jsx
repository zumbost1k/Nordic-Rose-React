import React from 'react';
import './button.css';
const CustomButton = ({ text, disabledState }) => {
  return (
    <button className='button' disabled={disabledState}>
      {text}
    </button>
  );
};
export default CustomButton;
