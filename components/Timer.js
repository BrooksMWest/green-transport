import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

// state to store time
const Timer = () => {
  const [time, setTime] = useState(0); // initializes the variable time. setTime function updates time state

  // state to check wether the timer is running or not
  const [isRunning, setIsrunning] = useState(false); // default is false - timer is not running in this state
  // need to store ride data with state
  const [ride, setRide] = useState({}); // intitalizes ride as an empty object that will hold elapsed time and cost

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every milisecond using javaScript setInterval method
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 1000); // intervalId holds the interval created by setInterval
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // hours minutes and seconds calculation

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const getElapsedTime = () => ({ minutes, seconds });

  // this is where the ride cost is calculated
  const calculateRideCost = () => (minutes * 0.5).toFixed(2);// multiplies the minutes * 50 cents. the toFixed part claculates the ride to 2 decimal places

  // method to start and stop timer
  const startAndStop = () => {
    if (isRunning) {
      setRide({ ...ride, elapsedTime: getElapsedTime() }); // this updates the ride with elapsed time ... is the spread operator
    }
    setIsrunning(!isRunning);
  };

  const endRide = () => {
    if (isRunning) {
      setIsrunning(false);
    }
    const elapsedTime = getElapsedTime();
    const rideCost = calculateRideCost(elapsedTime.minutes + elapsedTime.seconds / 60);
    setRide({ ...ride, elapsedTime, cost: rideCost });
  };
  // add another function to the end ride button to calculate the ride cost on the click and navigate to ride summary page.
  return (
    <div className="stopwatch-container">
      <div id="welcome-button-wrapper">
        <p className="stopwatch-time">
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </p>
        <Button type="button" size="lg" className="copy-btn welcome-button" onClick={startAndStop}>
          {isRunning ? 'Stop' : 'Start'}
        </Button>
        <Button type="button" size="lg" className="copy-btn welcome-button" onClick={endRide} href="/rideHistory">
          End Ride
        </Button>
      </div>
    </div>
  );
};
export default Timer;
