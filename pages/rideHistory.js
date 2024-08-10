import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getAllRides, deleteSingleRide } from '../api/rideData';

function RideHistory() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    getAllRides().then((ridesData) => {
      setRides(ridesData);
    }).catch((error) => {
      console.error('Error fetching all rides:', error);
    });
  }, []);

  const handleDelete = (rideId) => {
    deleteSingleRide(rideId).then(() => {
      setRides((prevRides) => prevRides.filter((ride) => ride.id !== rideId));
    }).catch((error) => {
      console.error('Error deleting ride:', error);
    });
  };

  return (
    <div>
      {rides.map((ride, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="ride-history-card" key={`ride-${index}`}>
          <div>
            DATE <br /><br /> {ride.created_on}
          </div>
          <div>
            TOTAL <br /><br /> {ride.duration}
          </div>
          <div>
            COST <br /><br /> ${ride.cost}
          </div>
          <div>
            <Button id="ride-history-details">...</Button>
            <Button
              id="ride-history-delete"
              onClick={() => handleDelete(ride.id)}
            >
              DELETE THIS RIDE
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RideHistory;
