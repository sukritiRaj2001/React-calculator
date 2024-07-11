import React from 'react';
import './Display.css';

const Display = ({ input }) => {
  return (
    <div className="display">
      <div className="input">{input}</div>
    </div>
  );
};

export default Display;
