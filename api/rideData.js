import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
// API CALLS NEEDED HERE WIL BE CALLS TO:
// create a RIDE DATA IN THE DATABASE
const createRide = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rides.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET All of a USER'S RIDES DATA FROM THE DATABASE
const getUserRides = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rides.json?orderBy="user"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET A SINGLE RIDE FROM THE DATABASE
const getSingleRide = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rides/${id}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { createRide, getUserRides, getSingleRide };