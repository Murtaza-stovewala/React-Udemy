import { useState, useEffect } from 'react';

export default function QuizTimer({ Timer, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(Timer);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, Timer);

    return () => {
      clearTimeout(timer);
    };
  }, [Timer, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={Timer} value={remainingTime} />;
}