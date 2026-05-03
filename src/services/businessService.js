import { api, filterNullParams } from '../lib/api';

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
    // handle error
  }
};
