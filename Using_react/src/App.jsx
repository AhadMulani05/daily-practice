import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [display, setDisplay] = useState('');

  // Load from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('calculatorDisplay');
    if (saved) setDisplay(saved);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('calculatorDisplay', display);
  }, [display]);

  const appendValue = (value) => setDisplay(display + value);
  const clearDisplay = () => setDisplay('');
  const deleteLast = () => setDisplay(display.slice(0, -1));
  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="container">
      <h1>💡 Simple Calculator</h1>
      <div className="calculator">
        <input type="text" value={display} disabled />
        <div className="buttons">
          <button onClick={clearDisplay} className="operator">C</button>
          <button onClick={() => appendValue('/')} className="operator">÷</button>
          <button onClick={() => appendValue('*')} className="operator">×</button>
          <button onClick={deleteLast} className="operator">⌫</button>

          <button onClick={() => appendValue('7')}>7</button>
          <button onClick={() => appendValue('8')}>8</button>
          <button onClick={() => appendValue('9')}>9</button>
          <button onClick={() => appendValue('-')} className="operator">−</button>

          <button onClick={() => appendValue('4')}>4</button>
          <button onClick={() => appendValue('5')}>5</button>
          <button onClick={() => appendValue('6')}>6</button>
          <button onClick={() => appendValue('+')} className="operator">+</button>

          <button onClick={() => appendValue('1')}>1</button>
          <button onClick={() => appendValue('2')}>2</button>
          <button onClick={() => appendValue('3')}>3</button>
          <button onClick={calculate} className="equal">=</button>

          <button onClick={() => appendValue('0')} className="zero">0</button>
          <button onClick={() => appendValue('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;