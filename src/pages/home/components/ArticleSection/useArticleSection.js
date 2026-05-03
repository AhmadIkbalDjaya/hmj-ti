import { useEffect } from 'react';
import { useGetArticles } from '../../../../hooks/useArticle';

export const useArticleSection = () => {
  const { articles, loading, fetchArticles } = useGetArticles();

  useEffect(() => {
    fetchArticles({ limit: 3 });
  }, []);

  return {
    articles,
    loading,
  };
};
