import { api } from '../lib/api';

export const createComplaint = async ({
  name,
  email,
  phone,
  institute,
  description,
} = {}) => {
  try {
    const response = await api.post('/complaints', {
      name,
      email,
      phone,
      institute,
      description,
    });

    return response.data;
  } catch (error) {
    // handle error
  }
};
