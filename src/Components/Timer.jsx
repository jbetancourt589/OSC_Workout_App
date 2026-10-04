import {useEffect, useState} from "react";

function Timer() {
  //time left on the timer
  const [seconds, setSeconds] = useState(60);

  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervaId;

    if(isRunning && seconds >0) {
      intervaId = setInterval(() => {setSeconds(prevSeconds => prevSeconds - 1);}, 1000);
    }

    if (seconds === 0) { 
      setIsRunning(false);
    }

    return () => clearInterval(intervaId);
  }, [isRunning, seconds]);

  function startTimer() {
    if(seconds > 0) {
      setIsRunning(true);
    }
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setSeconds(60);
  }

  function formatTime() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

   return (
    <div>
      <h2>Rest Timer</h2>

      {/* Displays the current timer value */}
      <h1>{formatTime()}</h1>

      {/* Timer controls */}
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>

      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );

}

export default Timer;