import React from 'react';
// import '/src/styles/Button.css';

const Button = ({text}) => {
  return (
    <div>
      <button className='btn'>{text}</button>
    </div>
  );
}

export default Button;
