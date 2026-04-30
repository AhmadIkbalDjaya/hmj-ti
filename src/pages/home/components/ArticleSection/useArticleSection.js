import { useEffect, useState } from 'react';
import { api } from '../../../../lib/api';

export const useArticleSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getArticles = async () => {
    try {
      setLoading(true);
      const res = await api.get('/news?perpage=3');
      setArticles(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return {
    articles,
    loading,
  };
};
