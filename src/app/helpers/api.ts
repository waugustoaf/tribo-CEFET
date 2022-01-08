import axios from 'axios';

const token = JSON.parse(localStorage.getItem('tribo:auth'))?.token;

export const api = axios.create({
  baseURL: 'http://52.15.68.151',
  headers: {
    authorization: !!token ? `Bearer ${token}` : undefined,
  },
});
