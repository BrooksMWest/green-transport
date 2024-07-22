import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Membership() {
  const { user } = useAuth();

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap" id="membership-container">
        <h1 id="faq-header">MEMBERSHIP OPTIONS</h1>
        <h5 id="faq-text">Congrats, {user.displayName}! You are now registered! Please pick a membership option below!</h5>
      </div>
      <div className="d-flex flex-wrap" id="membership-card-container">
        <h5 className="membership-card" style={{ backgroundColor: 'rgb(216, 216, 216)' }}>
          <div>
            <span className="star" style={{ color: 'rgb(205, 127, 50)' }}>
              &#9733; BRONZE
            </span>
          </div>
          <p>
            $50 <br /> RIDE CREDITS
          </p>
          <Button className="membership-button">SELECT</Button>
        </h5>
        <h5 className="membership-card" style={{ backgroundColor: 'rgb(110, 110, 110)', color: 'white' }}>
          <div>
            <span className="star" style={{ color: 'rgb(192, 192, 192)' }}>
              &#9733; SILVER
            </span>
          </div>
          <p>
            $150 <br /> RIDE CREDITS
          </p>
          <Button className="membership-button">SELECT</Button>
        </h5>
        <h5 className="membership-card" style={{ backgroundColor: 'rgb(54, 50, 50)', color: 'white' }}>
          <div>
            <span className="star" style={{ color: 'rgb(255, 255, 0)' }}>
              &#9733; GOLD
            </span>
          </div>
          <p>
            $250 <br /> RIDE CREDITS
          </p>
          <Button className="membership-button">SELECT</Button>
        </h5>
      </div>
    </div>
  );
}

export default Membership;
