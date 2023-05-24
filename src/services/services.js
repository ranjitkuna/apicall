import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const ApiService = {
  get(resourceUrl) {
    return axios.get(`${API_URL}/${resourceUrl}`)
    .then(response => response.data);
  },

  post(resourceUrl, postData ) {
    return axios.post(`${API_URL}/${resourceUrl}`, postData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.data);
  },

  put(resourceUrl, putData = {}) {
    return axios.put(`${API_URL}/${resourceUrl}`, putData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.data);
  },

  delete(resourceUrl) {
    return axios.delete(`${API_URL}/${resourceUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.data);
  },
};