import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Maintenance() {
  return (
    <Form>
      <br />
      <h3>Report An Issue</h3>
      <Form.Select aria-label="Default select example">
        <option>Select Your Scooter Number</option>
        <option value="1">Scooter One</option>
        <option value="2">Scooter Two</option>
        <option value="3">Scooter Three</option>
      </Form.Select>
      <br />
      <Form.Select aria-label="Default select example">
        <option>Select A Part</option>
        <option value="1">Part One</option>
        <option value="2">Part Two</option>
        <option value="3">Part Three</option>
      </Form.Select>
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

export default Maintenance;
