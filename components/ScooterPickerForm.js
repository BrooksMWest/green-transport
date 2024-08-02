// import { useRouter } from 'next/router';
// import React from 'react';
// import { FloatingLabel } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
// import getScooters from '../api/scooterData';

// // TO DO: THERE WILL NEED TO BE A createRide FUNCTION THAT CREATES A RIDE. IT WILL NEED TO HAVE THE USER ID, the scooterId, the duration of the ride, and the cost. This will all be saved when the stop ride button is clicked

// const initialState = {
//   id: '',
//   name: '',
// };

// export default function ScooterPickerForm({ obj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const [scooters, setScooters] = useState([]);
//   const router = useRouter();
//   const { user } = useAuth();

//   useEffect(() => {
//     getScooters(user.fbUser.uid);  I'M NOT GOING TO GET ANYTHING WITH WHAT'S HERE NOW!!!
//   });
// }
// return (
//   <>
//     <div>
//       <FloatingLabel controlId="floatingSelect" label="Scooter">
//         <Form.Select
//           aria-label="Scooter"
//           name="id"
//           onChange={handleChange}
//           className="mb-3"
//           key={formInput.id}
//           value={formInput.id}
//           required
//         >
//           <option value="">Select an Author</option>
//           {
//     scooters.map((scooter) => (
//       <option
//         key={scooter.id}
//         value={scooter.id}
//       >
//         {scooter.id}
//       </option>
//     ))
//   }
//         </Form.Select>
//       </FloatingLabel>
//     </div>
//   </>
// );

// ScooterPickerForm.propTypes = {
//   obj: propTypes.shape({
//     id: propTypes.num,
//     id: propTypes.string,
//   }),
// };
