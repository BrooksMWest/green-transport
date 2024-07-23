import React from 'react';
import { Button, Image } from 'react-bootstrap';
import RideHistory from './rideHistory';
import StartRide from './startRide';
import { useAuth } from '../utils/context/authContext';

function Welcome() {
  const { user } = useAuth();

  return (
    <>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap" style={{ position: 'absolute', top: 100, right: 20 }}>
          <Image
            src={user.photoURL}
            alt="User Avatar"
            roundedCircle
            style={{ width: 100, height: 100 }}
          />
          <div>
            <h1>Welcome, {user.displayName} {user.photURL}</h1>
          </div>
        </div>
        <div>
          <Button type="button" size="lg" className="copy-btn" onClick={StartRide}>
            Start Ride
          </Button>
          <Button type="button" size="lg" className="copy-btn" onClick={RideHistory}>
            Ride History
          </Button>

        </div>
      </div>
    </>
  );
}

export default Welcome;
