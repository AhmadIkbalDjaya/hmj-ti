import { api } from '../lib/api';
import handleApiError from '../helpers/handleApiError';

export const getOrganizationStructure = async () => {
  try {
    const response = await api.get('/organizational-structure');

    return response.data;
  } catch (error) {
    return handleApiError(error, 'Gagal mengambil struktur organisasi');
  }
};
