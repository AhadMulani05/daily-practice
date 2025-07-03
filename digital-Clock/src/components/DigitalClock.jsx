// src/components/DigitalClock.jsx
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🕒 Digital Clock</h1>
      <div style={styles.clock}>{formatTime(time)}</div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#222',
    color: '#0f0',
    fontFamily: 'monospace',
    padding: '2rem',
    textAlign: 'center',
    borderRadius: '10px',
    width: '300px',
    margin: 'auto',
    marginTop: '5rem',
    boxShadow: '0 0 20px #0f0',
  },
  heading: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  clock: {
    fontSize: '2.5rem',
    letterSpacing: '2px',
  },
};

export default DigitalClock;
