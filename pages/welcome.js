import React from 'react';
import { Button } from 'react-bootstrap';
import RideHistory from './rideHistory';
import StartRide from './startRide';

function Welcome() {
  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <Button type="button" size="lg" className="copy-btn" onClick={StartRide}>
          Start Ride
        </Button>
        <Button type="button" size="lg" className="copy-btn" onClick={RideHistory}>
          Ride History
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
