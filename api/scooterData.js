import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getScooters = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/scooter`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      const res = response.json();
      console.warn(res);
    })
    .catch(reject);
});

const updateScooter = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/scooter/`, {
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
