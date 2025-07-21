import React from "react";
import { useRef } from "react";
import { useState } from "react";

const StopWatchRef = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  function startTimer() {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>stopWatch:{time} second</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <br />
      <button onClick={resetTimer}>Reset</button>
      <br />
      <br />
    </div>
  );
};

export default StopWatchRef;
