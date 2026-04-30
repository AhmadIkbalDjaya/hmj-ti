import { useEffect, useState } from 'react';
import { api } from '../../../../lib/api';

export const useHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlights, setHighlight] = useState([]);
  const [loading, setLoading] = useState(false);

  const getHighlight = async () => {
    try {
      setLoading(true);
      const res = await api.get('/news?perpage=3');
      setHighlight(res.data);
      setActiveIndex(0);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    getHighlight();
  }, []);

  return {
    highlights,
    loading,
    activeIndex,
    handleSlideChange,
  };
};
