import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState("Choose an option to start playing!");

  const choices = ['rock', 'paper', 'scissors'];

  const play = (userChoice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    const outcome = getResult(userChoice, compChoice);

    if (outcome === 'win') {
      setUserScore(userScore + 1);
      setResult(`You Win! ${userChoice} beats ${compChoice}`);
    } else if (outcome === 'lose') {
      setCompScore(compScore + 1);
      setResult(`You Lose! ${compChoice} beats ${userChoice}`);
    } else {
      setResult(`It's a Draw! You both chose ${userChoice}`);
    }
  };

  const getResult = (user, comp) => {
    if (user === comp) return 'draw';
    if (
      (user === 'rock' && comp === 'scissors') ||
      (user === 'paper' && comp === 'rock') ||
      (user === 'scissors' && comp === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  };

  return (
    <div className="container">
      <h1>🪨📄✂️ Stone Paper Scissors</h1>
      <div className="scoreboard">
        <p>You: <span>{userScore}</span></p>
        <p>Computer: <span>{compScore}</span></p>
      </div>
      <div className="buttons">
        <button onClick={() => play('rock')}>🪨 Rock</button>
        <button onClick={() => play('paper')}>📄 Paper</button>
        <button onClick={() => play('scissors')}>✂️ Scissors</button>
      </div>
      <h2 id="result">{result}</h2>
    </div>
  );
};

export default App;