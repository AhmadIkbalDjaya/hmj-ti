import { useEffect, useState } from 'react';
import { api } from '../../../lib/api';

export const useIndex = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/about`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    value: { data, loading },
  };
};
