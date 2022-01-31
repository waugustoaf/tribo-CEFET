/* eslint-disable prefer-arrow/prefer-arrow-functions */
import axios from 'axios';

const token = JSON.parse(localStorage.getItem('tribo:auth'))?.token;

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    authorization: !!token ? `Bearer ${token}` : undefined,
  },
});
