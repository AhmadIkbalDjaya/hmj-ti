import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetArticle } from '../../../hooks/useArticle';

export const useShow = () => {
  const { slug } = useParams();
  const { article, loading, fetchArticle } = useGetArticle();

  useEffect(() => {
    if (slug) {
      fetchArticle(slug);
    }
  }, [slug]);

  return {
    value: {
      article,
      loading,
    },
  };
};
