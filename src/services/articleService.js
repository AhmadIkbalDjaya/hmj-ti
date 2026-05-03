import { api, filterNullParams } from '../lib/api';

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
    // handle error
  }
};

export const getArticle = async (slug) => {
  try {
    const response = await api.get(`/articles/${slug}`);

    return response.data;
  } catch (error) {
    // handle error
  }
};
