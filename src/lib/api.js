import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://be.hmjti-uinam.or.id/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
