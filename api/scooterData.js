import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getScooters = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/scooters`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateScooter = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/scooters/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getScooters, updateScooter };
