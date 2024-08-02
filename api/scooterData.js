import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getScooters = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/scooters`, {
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

export default getScooters;
