import { api, filterNullParams } from '../lib/api';
import handleApiError from '../helpers/handleApiError';

export const getBusinesses = async ({ page, limit, search } = {}) => {
  try {
    const params = filterNullParams({
      page,
      limit,
      search,
    });
    const response = await api.get('/businesses', { params });

    return response.data;
  } catch (error) {
    return handleApiError(error, 'Gagal mengambil data bisnis');
  }
};
