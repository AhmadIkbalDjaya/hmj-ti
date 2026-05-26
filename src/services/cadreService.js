import { api, filterNullParams } from '../lib/api';

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
  } catch {
    return {
      data: [],
      meta: {
        page,
        limit,
        total: 0,
        total_page: 0,
      },
    };
  }
};
