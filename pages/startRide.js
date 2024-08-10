import { useState } from 'react';
import Timer from '../components/Timer';
import ScooterPickerForm from '../components/ScooterPickerForm';

function StartTimer() {
  const [scooter, setScooter] = useState([]);
  const setValue = (value) => {
    setScooter(value);
  };
  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <h1>start ride page</h1>
        <div>
          <ScooterPickerForm setValue={setValue} />
        </div>
        <div>
          <Timer selectedScooter={scooter} />
        </div>
      </div>
    </div>
  );
}
export default StartTimer;
