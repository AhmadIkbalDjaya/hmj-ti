import { useEffect } from 'react';
import { useGetBusinesses } from '../../../hooks/useBusiness';

export const useIndex = () => {
  const { businesses, loading, fetchBusinesses } = useGetBusinesses();

  useEffect(() => {
    fetchBusinesses();
  }, []);

  return {
    value: {
      businesses,
      loading,
    },
  };
};
