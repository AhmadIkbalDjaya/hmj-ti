import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../lib/api';

export const useShow = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArticle = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/news/${slug}`);
        setArticle(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, [slug]);

  return {
    value: {
      article,
      loading,
    },
  };
};
