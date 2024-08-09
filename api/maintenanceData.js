import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createMaintenance = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/maintenance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getMaintenanceParts = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/maintenancepart`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getPartNames = () => new Promise((resolve, reject) => {
  getMaintenanceParts()
    .then((parts) => {
      const partNames = parts.map((item) => item.part.part_name);
      resolve(partNames);
    })
    .catch(reject);
});

export { createMaintenance, getMaintenanceParts, getPartNames };
