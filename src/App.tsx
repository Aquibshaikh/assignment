import React, { useState, useEffect } from 'react';
import './App.css';
import useStore from './store/store';

const CounterApp: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const { name, setName } = useStore();

  const toggleCounter = () => {
    if (!running) {
      setName('');
      setCounter(0);
      setRunning(true);
    } else {
      setCounter(0);
      setRunning(false);
      setName('Aquib');
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (running) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [running]);

  return (
    <div className="container">
      <div className='value'>{name ? `Hi ${name}` : counter}</div>
      <div>
        <button onClick={toggleCounter}>{running ? 'Stop' : 'Start'}</button>
      </div>
    </div>
  );
};

export default CounterApp;
