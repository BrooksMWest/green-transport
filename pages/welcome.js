import React from 'react';
import { Button, Image } from 'react-bootstrap';
import RideHistory from './rideHistory';
import StartRide from './startRide';
import { useAuth } from '../utils/context/authContext';

function Welcome() {
  const { user } = useAuth();

  return (
    <>
      <Image src={user.photoURL} alt="User-Avatar" roundedCircle style={{ width: 100, height: 100 }} />
      <h1>
        Welcome, {user.displayName} {user.photURL}
      </h1>

      <div id="welcome-button-wrapper">
        <Button type="button" size="lg" className="copy-btn welcome-button" onClick={StartRide} href="/startRide">
          START RIDE
        </Button>
        <Button type="button" size="lg" className="copy-btn welcome-button" onClick={RideHistory} href="/rideHistory">
          RIDE HISTORY
        </Button>
      </div>
    </>
  );
}

export default Welcome;
