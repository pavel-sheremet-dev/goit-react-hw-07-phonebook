import axios from 'axios';

// const BASE_URL = 'https://62015ab3fdf50900172499bb.mockapi.io/v1';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_ENDPOINT = '/contacts';

export const getContacts = async () => {
  const res = await axios.get(`${BASE_URL}${API_ENDPOINT}.json`);
  return res.statusText === 'OK'
    ? res.data
    : Promise.reject(new Error(res.statusText));
};

export const addContact = async contact => {
  const res = await axios.post(`${BASE_URL}${API_ENDPOINT}.json`, contact);
  return res.statusText === 'OK'
    ? res.data
    : Promise.reject(new Error(res.statusText));
};

export const deleteContact = async id => {
  const res = await axios.delete(`${BASE_URL}${API_ENDPOINT}/${id}.json`);
  return res.statusText === 'OK'
    ? res.data
    : Promise.reject(new Error(res.statusText));
};
