import React from 'react';
import { Button } from 'react-bootstrap';

function StartTimer() {
  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <h1>start ride page</h1>
        <div id="welcome-button-wrapper">
          <Button type="button" size="lg" className="copy-btn welcome-button" onClick={StartTimer}>
            START
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StartTimer;
