import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      alert(`Input number`);
    } else {
      if(operator==='+') {
        setResult(firstNumber+secondNumber)
      } else if (operator === '-') {
        setResult(firstNumber-secondNumber)
      } else if (operator === '*') {
        setResult(firstNumber*secondNumber)
      } else {
        setResult(firstNumber/secondNumber)
      }
    }
  }

  const isNumber = (key, e) => {
    if (key==="firstNumber") {
      setFirstNumber(Number(e.target.value));
    } else {
      setSecondNumber(Number(e.target.value));
    }
  }

  return (
    <>
    <p>This form for simple calculations</p>
    <label className='label'> 
        Input firs number:
        <input
          className="input"
          type="text"
          placeholder='first'
          autoComplete="off"
          onChange={e => isNumber('firstNumber', e)}
        />
    </label>

    <select value={operator} onChange={e => setOperator(e.target.value)}>
      <option value='+'>+</option>
      <option value='-'>-</option>
      <option value='*'>*</option>
      <option value='/'>/</option>
    </select>

    <label className='label'>
      Input second number:
      <input
          className="input"
          placeholder='second'
          type="text"
          autoComplete="off"
          onChange={e => isNumber('secondNumber', e)}
      />  
    </label>  

        <button type="submit" className="calc-button" onClick={handleClick}>calc</button>

        {result && (
            <p>Result: {Math.round(result)}</p>
        )}
    </>
  );
}

export default App;
