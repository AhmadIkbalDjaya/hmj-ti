import { api } from '../lib/api';

export const createComplaint = async ({
  name,
  email,
  phone,
  institute,
  description,
} = {}) => {
  const response = await api.post('/complaints', {
    name,
    email,
    phone,
    institute,
    description,
  });

  return response.data;
};
