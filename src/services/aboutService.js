import { api } from '../lib/api';

export const getAbout = async () => {
  try {
    const response = await api.get('/about');

    return response.data;
  } catch (error) {
    // handle error
  }
};
