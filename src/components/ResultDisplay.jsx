import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  return (
    <div className="result-display">
      <h2>Result: {result}</h2>
    </div>
  );
};

export default ResultDisplay;


