import { useEffect } from 'react';
import { useGetBusinesses } from '../../../../hooks/useBusiness';

export const useProductSection = () => {
  const { businesses, loading, fetchBusinesses } = useGetBusinesses();

  useEffect(() => {
    fetchBusinesses({ limit: 2 });
  }, []);

  return {
    businesses,
    loading,
  };
};
