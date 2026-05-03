import { useEffect, useState } from 'react';
import { useGetArticles } from '../../../hooks/useArticle';

export const useIndex = () => {
  const [page, setPage] = useState(1);
  const { articles, meta, loading, fetchArticles } = useGetArticles();

  useEffect(() => {
    fetchArticles({ page, limit: 8 });
  }, [page]);

  const handlePagination = (_data, value) => {
    setPage(value);
  };

  return {
    value: {
      articles,
      meta,
      loading,
    },
    func: {
      handlePagination,
    },
  };
};
