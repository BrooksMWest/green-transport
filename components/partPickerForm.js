import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getPartNames } from '../api/maintenanceData';
import ScooterPickerForm from './ScooterPickerForm';

const initialState = {
  id: '',
  name: '',
};

function PartsPickerForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [parts, setParts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getPartNames().then(setParts); // Fetch the part names and set the state

    if (obj) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h3>Report an issue</h3>
        <FloatingLabel controlId="floatingSelect" label="Part">
          <Form.Select
            aria-label="Part"
            name="name"
            onChange={handleChange}
            className="mb-3"
            value={formInput.name}
            required
          >
            <option value="">Select a Part</option>
            {
              parts.map((partName) => (
                <option
                  key={partName}
                  value={partName}
                >
                  {partName}
                </option>
              ))
            }
          </Form.Select>
        </FloatingLabel>
      </div>
      <br />
      <ScooterPickerForm />
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please Explain your issue</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Report Issue
      </Button>
    </Form>

  );
}

PartsPickerForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

PartsPickerForm.defaultProps = {
  obj: initialState,
};

export default PartsPickerForm;
