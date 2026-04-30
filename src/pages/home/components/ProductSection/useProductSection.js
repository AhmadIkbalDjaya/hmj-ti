import { useEffect, useState } from 'react';
import { api } from '../../../../lib/api';

export const useProductSection = () => {
  const [productHighlight, setProductHighlight] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductHighlight = async () => {
    try {
      setLoading(true);
      const res = await api.get('/products?perpage=2');
      setProductHighlight(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductHighlight();
  }, []);

  return {
    productHighlight,
    loading,
  };
};
