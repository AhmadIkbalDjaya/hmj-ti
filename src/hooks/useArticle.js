import { useState } from 'react';
import { getArticles, getArticle } from '../services/articleService';

export const useGetArticles = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const [articles, setArticles] = useState([]);
  const [meta, setMeta] = useState();
  const [loading, setLoading] = useState(true);

  const fetchArticles = async ({ page, limit, search, is_featured } = {}) => {
    try {
      setLoading(true);
      const result = await getArticles({
        page,
        limit,
        search,
        is_featured,
      });
      setArticles(result.data);
      setMeta(result.meta);
      setLoading(false);
    } catch (error) {
      const message = error?.message ?? 'Gagal mengambil data';
      // enqueueSnackbar(message, { variant: 'error' });
      setLoading(false);
    }
  };

  return {
    articles,
    meta,
    loading,
    fetchArticles,
  };
};

export const useGetArticle = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState();

  const fetchArticle = async (id) => {
    try {
      setLoading(true);
      const result = await getArticle(id);
      setArticle(result.data);
      setLoading(false);

      return result.data;
    } catch (error) {
      const message = error?.message ?? 'Gagal mengambil data';
      // enqueueSnackbar(message, { variant: 'error' });
      setLoading(false);
    }
  };

  return {
    loading,
    article,
    fetchArticle,
  };
};
