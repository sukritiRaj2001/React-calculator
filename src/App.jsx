import React, { useState } from 'react';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (buttonName) => {
    if (buttonName === '=') {
      try {
        setResult(eval(input)); 
      } catch (error) {
        setResult('Error');
      }
    } else if (buttonName === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + buttonName);
    }
  };

  return (
    <div className="app">
      <h1>Calculator</h1>
      <div className="calculator-container">
        <Display input={input} />
        <ButtonsContainer handleClick={handleClick} />
      </div>
      <ResultDisplay result={result} />
    </div>
  );
};

export default App;
