import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(result);
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);

    if (operator === '+') {
      return firstOperand + inputValue;
    } else if (operator === '-') {
      return firstOperand - inputValue;
    } else if (operator === '*') {
      return firstOperand * inputValue;
    } else if (operator === '/') {
      return firstOperand / inputValue;
    }

    return inputValue;
  };

  const handleEqualClick = () => {
    if (!operator || waitingForSecondOperand) return;

    const result = performCalculation();
    setDisplayValue(result);
    setFirstOperand(result);
    setOperator(null);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="keypad">
        <button onClick={handleDigitClick.bind(null, '7')}>7</button>
        <button onClick={handleDigitClick.bind(null, '8')}>8</button>
        <button onClick={handleDigitClick.bind(null, '9')}>9</button>
        <button onClick={handleOperatorClick.bind(null, '/')}>/</button>
        <button onClick={handleDigitClick.bind(null, '4')}>4</button>
        <button onClick={handleDigitClick.bind(null, '5')}>5</button>
        <button onClick={handleDigitClick.bind(null, '6')}>6</button>
        <button onClick={handleOperatorClick.bind(null, '*')}>*</button>
        <button onClick={handleDigitClick.bind(null, '1')}>1</button>
        <button onClick={handleDigitClick.bind(null, '2')}>2</button>
        <button onClick={handleDigitClick.bind(null, '3')}>3</button>
        <button onClick={handleOperatorClick.bind(null, '-')}>-</button>
        <button onClick={handleDigitClick.bind(null, '0')}>0</button>
        <button onClick={handleOperatorClick.bind(null, '.')}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleOperatorClick.bind(null, '+')}>+</button>
        <button onClick={handleClearClick}>AC</button>
      </div>
    </div>
  );
};

export default Calculator;
