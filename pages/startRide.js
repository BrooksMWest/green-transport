import React, { useState } from 'react';
import Timer from '../components/Timer';

function StartTimer() {
  const [selectedScooter] = useState(null);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <h1>start ride page</h1>
        <div>
          <Timer onClick={selectedScooter} />
        </div>
      </div>
    </div>
  );
}
export default StartTimer;
