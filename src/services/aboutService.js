import { api } from '../lib/api';
import handleApiError from '../helpers/handleApiError';

export const getAbout = async () => {
  try {
    const response = await api.get('/about');

    return response.data;
  } catch (error) {
    return handleApiError(error, 'Gagal mengambil data profil organisasi');
  }
};
