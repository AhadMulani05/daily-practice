import { useState } from 'react';
import './index.css';

function App() {
  const [color, setColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    
    for(let i=0;i<6;i++){
      newColor += letters[Math.floor(Math.random() * 16)];
    }

    return newColor;
  }

  const changeBackground = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  }

  return (
    <div className="container">
      <h1>🎨 Background Color Changer Game</h1>
      <div className="color-box">
        <p>Current Color: <span className="code">{color}</span></p>
        <button onClick={changeBackground}>Change Background</button>
      </div>
    </div>
  );
}

export default App;
