import { api } from '../lib/api';
import handleApiError from '../helpers/handleApiError';

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
    return handleApiError(error, 'Gagal mengirim pesan');
  }
};
