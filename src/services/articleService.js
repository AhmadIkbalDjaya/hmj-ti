import { api, filterNullParams } from '../lib/api';
import handleApiError from '../helpers/handleApiError';

export const getArticles = async ({
  page,
  limit,
  search,
  is_featured,
} = {}) => {
  try {
    const params = filterNullParams({
      page,
      limit,
      search,
      is_featured,
    });
    const response = await api.get('/articles', { params });

    return response.data;
  } catch (error) {
    return handleApiError(error, 'Gagal mengambil data artikel');
  }
};

export const getArticle = async (slug) => {
  try {
    const response = await api.get(`/articles/${slug}`);

    return response.data;
  } catch (error) {
    return handleApiError(error, 'Gagal mengambil detail artikel');
  }
};
