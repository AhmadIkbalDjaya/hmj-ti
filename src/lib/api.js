import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://be.hmjti-uinam.or.id/api',
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const filterNullParams = (params) => {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value != null),
  );
};
