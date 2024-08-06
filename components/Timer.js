import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

// state to store time
const Timer = () => {
  const [time, setTime] = useState(0);

  // state to check wether the timer is running or not
  const [isRunning, setIsrunning] = useState(false);
  // need to store ride data with state
  const [ride, setRide] = useState({});

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every milisecond using javaScript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // hours minutes and seconds calculation
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 36000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const getElapsedTime = () => ({ hours, minutes, seconds });

  // method to start and stop timer
  const startAndStop = () => {
    if (isRunning) {
      setRide({ ...ride, elapsedTime: getElapsedTime() }); // this updates the ride with elapsed time
    }
    setIsrunning(!isRunning);
  };

  const endRide = () => {
    if (isRunning) {
      setIsrunning(false);
    }
    setRide({ ...ride, elapsedTime: getElapsedTime() });
  };
  // add another function to the end ride button to calculate the ride cost on the click and navigate to ride summary page.
  return (
    <div className="stopwatch-container">
      <div id="welcome-button-wrapper">
        <p className="stopwatch-time">
          {hours}:{minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </p>
        <Button type="button" size="lg" className="copy-btn welcome-button" onClick={startAndStop}>
          {isRunning ? 'Stop' : 'Start'}
        </Button>
        <Button type="button" size="lg" className="copy-btn welcome-button" onClick={endRide}>
          End Ride
        </Button>
      </div>
    </div>
  );
};
export default Timer;
