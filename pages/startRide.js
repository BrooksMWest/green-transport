import React from 'react';
import ScooterPickerForm from '../components/ScooterPickerForm';
import Timer from '../components/Timer';

function StartTimer() {
  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <h1>start ride page</h1>
        <div>
          <ScooterPickerForm />
        </div>
        <div>
          <Timer />
        </div>
      </div>
    </div>
  );
}
export default StartTimer;
