import { useEffect, useState } from 'react';
import { useGetArticles } from '../../../../hooks/useArticle';

export const useHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { articles, loading, fetchArticles } = useGetArticles();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    fetchArticles({ limit: 3, is_featured: true });
    setActiveIndex(0);
  }, []);

  return {
    articles,
    loading,
    activeIndex,
    handleSlideChange,
  };
};
