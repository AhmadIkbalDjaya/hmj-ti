import { useEffect, useState } from 'react';
import { api } from '../../../lib/api';

export const useIndex = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/news?page=${page}&perpage=8`);
        setArticles(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, [page]);

  const handlePagination = (_data, value) => {
    setPage(value);
  };

  return {
    value: {
      articles,
      loading,
    },
    func: {
      handlePagination,
    },
  };
};
