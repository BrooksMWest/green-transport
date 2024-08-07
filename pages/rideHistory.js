import React from 'react';
import { Button } from 'react-bootstrap';

function RideHistory() {
  return (
    <div className="text-center my-4">
      <h1 id="ride-history-header">RIDE HISTORY</h1>
      <div id="ride-history-wrapper">
        <div className="ride-history-card">
          <div>DATE <br /><br /> 06/21/24 </div>
          <div>TOTAL <br /><br /> 10:31 </div>
          <div>COST <br /><br /> $1000 </div>
          <div>
            <Button id="ride-history-details">...</Button>
            <Button id="ride-history-delete">DELETE THIS RIDE</Button>
          </div>
        </div>
        <div className="ride-history-card">
          <div>test</div>
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </div>
        <div className="ride-history-card">
          <div>test</div>
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </div>
        <div className="ride-history-card">
          <div>test</div>
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
        </div>
      </div>
    </div>
  );
}

export default RideHistory;
