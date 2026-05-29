import { api, filterNullParams } from '../lib/api';
import handleApiError from '../helpers/handleApiError';

export const getCadres = async ({
  page = 1,
  limit = 10,
  search,
  batch,
  status,
} = {}) => {
  try {
    const params = filterNullParams({
      page,
      limit,
      search,
      batch,
      status,
    });
    const response = await api.get('/cadres', { params });

    return response.data;
  } catch (error) {
    return handleApiError(error, 'Gagal mengambil data kader');
  }
};
