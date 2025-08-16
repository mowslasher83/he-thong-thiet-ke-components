import React from 'react';

const Button = ({ label, color }) => {
  return <button className={`btn btn-${color}`}>{label}</button>;
};

export default Button;